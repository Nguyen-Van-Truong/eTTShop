package com.example.demo.controller;

import com.example.demo.dto.CartDTO;
import com.example.demo.service.CartItemService;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
public class CartController {
    private CartService cartService;
    private CartItemService cartItemService;

    public CartController(CartService cartService, CartItemService cartItemService) {
        this.cartService = cartService;
        this.cartItemService = cartItemService;
    }

    @GetMapping("/addCart")
    public void addCart(@RequestParam(value = "user_id") int user_id, @RequestParam(value = "product_id") int product_id, @RequestParam(value = "quantity") int quantity, @RequestParam(value = "price") BigDecimal price) {
        int cartId = cartService.addCart(user_id);
        cartItemService.addCartItems(cartId, product_id, quantity, price);
    }

    @GetMapping("/getListCart")
    public List<CartDTO> getListCart(@RequestParam(value = "user_id") int user_id) {
        return cartItemService.list(user_id);
    }

    @GetMapping("/countCart")
    public int countCart(@RequestParam(value = "user_id") int user_id) {
        return cartItemService.count(user_id);
    }

    @GetMapping("/updateCart")
    public void updateCart(@RequestParam(value = "cart_item_id") int cart_item_id, @RequestParam(value = "quantity") int quantity,@RequestParam(value = "price")  BigDecimal price) {
        cartItemService.updateCart(cart_item_id, quantity, price);
    }
    @GetMapping("/getListHistory")
    public List<CartDTO> getListHistory(@RequestParam(value = "user_id") int user_id) {
        return cartItemService.listHistory(user_id);
    }
    @GetMapping("/deleteCart")
    public void delete(@RequestParam(value ="cart_id") int cart_id){
        cartService.delete(cart_id);
    }
}
