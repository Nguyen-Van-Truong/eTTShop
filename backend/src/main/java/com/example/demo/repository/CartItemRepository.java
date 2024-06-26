package com.example.demo.repository;

import com.example.demo.dto.CartDTO;
import com.example.demo.dto.CartItemDTO;
import com.example.demo.model.Cart;
import com.example.demo.model.CartItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItems, Integer> {


    @Query("SELECT new com.example.demo.dto.CartDTO(c.user.user_id ,c.cart_id ,i.cart_item_id,m.file_url, p.product_name, i.price, i.quantity) " +
            "FROM User u " +
            "JOIN Cart c ON u.user_id = c.user.user_id " +
            "JOIN CartItems i ON c.cart_id = i.cart.cart_id " +
            "JOIN Products p ON i.products.product_id = p.product_id " +
            "JOIN Medias m ON p.product_id = m.products.product_id " +
            "WHERE c.status = 'active' and u.user_id=:user_id" + " group by i.cart.cart_id")
    List<CartDTO>getCartItemsBy(@Param("user_id") int user_id);
    @Query("SELECT sum(i.quantity) " +
            "FROM User u " +
            "JOIN Cart c ON u.user_id = c.user.user_id " +
            "JOIN CartItems i ON c.cart_id = i.cart.cart_id " +
            "WHERE c.status = 'active' and u.user_id=:user_id")
    Integer countCart(@Param("user_id") int user_id);


    Optional<CartItems> findById(int id);
    /**
     * lich su don hàng
     */
    @Query("SELECT new com.example.demo.dto.CartDTO(c.cart_id, m.file_url, p.product_name, i.price, i.quantity, c.updated_at, c.status) " +
            "FROM User u " +
            "JOIN Cart c ON u.user_id = c.user.user_id " +
            "JOIN CartItems i ON c.cart_id = i.cart.cart_id " +
            "JOIN Products p ON i.products.product_id = p.product_id " +
            "JOIN Medias m ON p.product_id = m.products.product_id " +
            "WHERE c.status = 'active' and u.user_id=:user_id or c.status = 'inactive' and u.user_id=:user_id  or c.status = 'checked_out' and u.user_id=:user_id  " + " group by i.cart.cart_id")
    List<CartDTO>history(@Param("user_id") int user_id);

    @Query("SELECT  new com.example.demo.dto.CartItemDTO(i.cart_item_id,i.quantity, i.price)" +
            "FROM User u " +
            "JOIN Cart c ON u.user_id = c.user.user_id " +
            "JOIN CartItems i ON c.cart_id = i.cart.cart_id " +
            "WHERE c.status = 'active' and u.user_id=:user_id")
    List<CartItemDTO>findByCart_item_id(@Param("user_id") int user_id);


}
