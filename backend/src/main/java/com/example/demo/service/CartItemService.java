package com.example.demo.service;

import com.example.demo.dto.CartDTO;
import com.example.demo.model.Cart;
import com.example.demo.model.CartItems;
import com.example.demo.model.Products;
import com.example.demo.repository.CartItemRepository;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class CartItemService {
    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final CartItemRepository cartItemRepository;

    @Autowired
    public CartItemService(CartRepository cartRepository, ProductRepository productRepository, CartItemRepository cartItemRepository) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
        this.cartItemRepository = cartItemRepository;
    }

    public void addCartItems(int user_id, int product_id, int quantity, BigDecimal price) {
        Optional<Cart> carts = cartRepository.findById(user_id);
        Optional<Products> products = productRepository.findById(product_id);
        if (carts.isPresent() && products.isPresent()) {
            Cart cart = carts.get();
            Products product = products.get();
            CartItems cartItems = new CartItems(cart, product, quantity, price);
            cartItemRepository.save(cartItems);
        }
    }

    public List<CartDTO> list(int id) {
        List<CartDTO> cartDTOS = cartItemRepository.getCartItemsBy(id);
        return cartDTOS;
    }
}