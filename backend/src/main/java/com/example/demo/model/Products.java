package com.example.demo.model;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;


import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "products")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "product_id"
)
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int product_id;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    private Categories category;
    @Column(name = "product_name")
    private String product_name;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private BigDecimal price;
    @Column(name = "stock_quantity")
    private int stock_quantity;
    @Column(name = "status", columnDefinition = "ENUM('có sẵn', 'hết hàng', 'ngưng sản xuất', 'ẩn')")
    private String status;

    @Column(name = "created_at")
    private Timestamp created_at;

    @OneToMany(mappedBy = "products", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<Medias> medias;

    public Products(int product_id) {
        this.product_id = product_id;
    }
    public  Products(){

    }

    public Products(String product_name, String description, BigDecimal price, int stock_quantity, String status, Timestamp created_at) {
        this.product_name = product_name;
        this.description = description;
        this.price = price;
        this.stock_quantity = stock_quantity;
        this.status = status;
        this.created_at = created_at;
    }

    public Categories getCategory() {
        return category;
    }

    public int getCategory_id() {
        return this.category.getCategoryId();
    }
    public List<String> getMediaUrls() {
        return this.medias.stream().map(Medias::getFile_url).toList();
    }

    public void setCategory(Categories category) {
        this.category = category;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getStock_quantity() {
        return stock_quantity;
    }

    public void setStock_quantity(int stock_quantity) {
        this.stock_quantity = stock_quantity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Timestamp getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Timestamp created_at) {
        this.created_at = created_at;
    }

    public Set<Medias> getMedias() {
        return medias;
    }

    public void setMedias(Set<Medias> medias) {
        this.medias = medias;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

