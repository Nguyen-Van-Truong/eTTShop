import $ from 'jquery';
import Swiper from "swiper";
import 'select2/dist/js/select2';
import mixitup from 'mixitup';
import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import shop_cart from "../assets/images/all-img/shopping-cart-01.png";
import '../assets/plugins/css/swipper.css'
import '../assets/plugins/css/select2.css'
import '../css/tailwind.css'
import '../css/styles.css'
import '../css/responsive.css'
import MiniChat from "./MiniChat";
import Header_Menu from "./menu/Header_Menu";
import Menu_Response from "./menu/Menu_Response";
import Header_Bottom from "./menu/Header_Bottom";
import Footer from "./footer/Footer";
const  Cart = () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const containerRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [isMenu, setIsMenu] = useState(false);




    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsMenu(!isMenu);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scroll < 500) {
                setHeaderSticky(false);
            } else {
                setHeaderSticky(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <div>
         
            <header class="font-display">
                <div id="header-sticky" class="">
                    <div className="top-header bg-secondary">
                        <div className="container px-3 md:px-5 xl:px-0">
                            <div className="py-3.5 flex justify-center sm:justify-between">

                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Header*/}
                    <Header_Menu/>
                </div>

                {/*bottom-header*/}
                <Header_Bottom/>
 {/*menu response*/}
             <Menu_Response/>
            </header>
            <div class="pt_b"   style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div class="container px-3 md:px-5 xl:px-0">
                    <div class="flex items-center gap-1 py-[1.5px]">
                        <a href="#" class="text-[14px] font-normal leading-[110%] text-dark-gray">Home</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Shop</span>
                    </div>
                </div>
            </div>
            <section   style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div class="container px-3 md:px-5 xl:px-0">

                    <div class="shopping-cart-wrapper pt-10 pb-20 flex lg:flex-nowrap flex-wrap-tw items-start gap-6-t">

                        <div class="shopping-cart lg:w-2/3 w-full">
                            <div class="px-6 py-6 overflow-x-auto">

                                <table class="w-[824px] leading-normal">
                                    <thead>
                                    <tr>
                                        <th class="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[240px]">
                                            Sản phẩm
                                        </th>
                                        <th class="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[104px]">
                                            Giá
                                        </th>
                                        <th class="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[164px]">
                                            Số lượng
                                        </th>
                                        <th class="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[96px]">
                                            Tổng tiền
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="cart-item">
                                        <td class="py-6 text-sm">
                                            <div class="flex gap-2 items-center">
                                                <button class="del">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 2L6.00003 6M6.00003 6L10 2M6.00003 6L2 10M6.00003 6L10 10" stroke="#9A9CAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>

                                                <div class="w-[70px] h-[70px]">
                                                    <img class="w-full h-full rounded-lg" src={shop_cart} alt="" />
                                                </div>
                                                <div class="ml-1">
                                                    <p class="mb-0 text-[#272343] text-sm">Sofa for Living Room</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-6 text-sm">
                                            <p class="mb-0">$250.00</p>
                                        </td>
                                        <td class="py-6 text-sm">
                                            <div class="border inline-flex justify-around items-center h-[52px] w-[140px] border-[#D6D9DD] rounded-lg">
                                                <span class="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pl-[14px] select-none minus" id="minus">-</span>
                                                <input type="text" class="text-[#272343] text-base plus_mines_input select-none" value="01"/>
                                                <span class="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pr-[14px] select-none plus" id="plus">+</span>
                                            </div>
                                        </td>
                                        <td class="py-6 text-sm">
                                            <p>$250.00</p>
                                        </td>
                                    </tr>
                                    <tr class="cart-item">
                                        <td class="pb-6 text-sm">
                                            <div class="flex gap-2 items-center">
                                                <button class="del">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 2L6.00003 6M6.00003 6L10 2M6.00003 6L2 10M6.00003 6L10 10" stroke="#9A9CAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                                <div class="w-[70px] h-[70px]">
                                                    <img class="w-full h-full rounded-lg" src={shop_cart} alt="" />
                                                </div>
                                                <div class="ml-1">
                                                    <p class="mb-0 text-[#272343] text-sm">Sofa for Living Room</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="pb-6 text-sm">
                                            <p class="mb-0">$250.00</p>
                                        </td>
                                        <td class="pb-6 text-sm">
                                            <div class="border inline-flex justify-around items-center h-[52px] w-[140px] border-[#D6D9DD] rounded-lg">
                                                <span class="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pl-[14px] select-none minus" id="minus">-</span>
                                                <input type="text" class="text-[#272343] text-base plus_mines_input" value="01"/>
                                                <span class="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pr-[14px] select-none plus" id="plus">+</span>
                                            </div>
                                        </td>
                                        <td class="pb-6 text-sm">
                                            <p>$250.00</p>
                                        </td>
                                    </tr>
                                    <tr class="cart-item">
                                        <td class="pb-6 text-sm">
                                            <div class="flex gap-2 items-center">
                                                <button class="del">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 2L6.00003 6M6.00003 6L10 2M6.00003 6L2 10M6.00003 6L10 10" stroke="#9A9CAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                                <div class="w-[70px] h-[70px]">
                                                    <img class="w-full h-full rounded-lg" src={shop_cart} alt="" />
                                                </div>
                                                <div class="ml-1">
                                                    <p class="mb-0 text-[#272343] text-sm">Sofa for Living Room</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="pb-6 text-sm">
                                            <p class="mb-0">$250.00</p>
                                        </td>
                                        <td class="pb-6 text-sm">
                                            <div class="border inline-flex justify-around items-center h-[52px] w-[140px] border-[#D6D9DD] rounded-lg">
                                                <span class="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pl-[14px] select-none minus" id="minus">-</span>
                                                <input type="text" class="text-[#272343] text-base plus_mines_input" value="01"/>
                                                <span class="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pr-[14px] select-none plus" id="plus">+</span>
                                            </div>
                                        </td>
                                        <td class="pb-6 text-sm">
                                            <p>$250.00</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr class="my-0"/>
                                <div class="coupon-wrap p-6-t">
                                    <input type="text" name="" id="" class="px-5-tw py-[18px] bg-[#F0F2F3] rounded-lg border-none focus:outline-none coupon-input coupon-btn w-full block focus:ring-2 ring-[#029FAE]" placeholder="Mã giảm giá"/>
                                        <button type="submit" class="bg-[#007580] hover:bg-[#272343] transition-all duration-300 inline-flex font-semibold text-gray-white coupon-btn px-6 py-[17px] rounded-lg">Áp dụng Mã Giảm Giá</button>
                                        <button class="bg-off-white text-[#272343] coupon-btn font-semibold py-[17px] px-6 rounded-lg">Cập Nhật Giỏ Hàng</button>
                                </div>
                        </div>
                        <div class="cart-total p-8 lg:w-1/3 w-full">
                            <div class="subtotal-info">
                                <div class="flex justify-between items-center">
                                    <p class="common-hedding">Tổng tiền</p>
                                    <p class="text-gray-black text-[16px] leading-[120%] font-display font-medium">$1,435.00</p>
                                </div>
                                <div class="flex justify-between items-center pt-4">
                                    <p class="common-hedding">Mã giảm giá</p>
                                    <p class="text-gray-black text-[16px] leading-[120%] font-display font-medium">26%</p>
                                </div>
                                <div class="flex justify-between items-center pt-4">
                                    <p class="common-hedding">Phí vận chuyển </p>
                                    <p class="text-gray-black text-[16px] leading-[120%] font-display font-medium">Free</p>
                                </div>
                                <hr/>
                                    <div class="flex justify-between items-center">
                                        <p class="common-hedding">Tổng:</p>
                                        <p class="text-gray-black text-[22px] leading-[120%] font-display font-semibold">$1026.23</p>
                                    </div>
                                    <button class="mt-6 bg-accents hover:bg-[#272343] transition-all duration-300 py-[19px] rounded-lg text-[18px] font-bold font-display leading-[110%] text-gray-white text-center w-full">Thanh toán</button>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/*footer*/}
            <Footer/>
            <MiniChat/>
        </div>
    );
}
export default Cart ;