import $ from 'jquery';
import Swiper from "swiper";
import 'select2/dist/js/select2';
import mixitup from 'mixitup';
import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import '../assets/plugins/css/swipper.css'
import '../assets/plugins/css/select2.css'
import '../css/tailwind.css'
import '../css/styles.css'
import '../css/responsive.css'
import MiniChat from "./MiniChat";
import Menu_Response from "./menu/Menu_Response";
import Header_Menu from "./menu/Header_Menu";
import Header_Bottom from "./menu/Header_Bottom";
import Footer from "./footer/Footer";

const Forget_Password = () => {
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
          
            <div class="pt_b" style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div class="container">
                    <div class="flex items-center gap-1 py-[1.5px]">
                        <a href="#" class="text-[14px] font-normal leading-[110%] text-dark-gray">Trang chủ</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round" />
                        </svg>

                        <a href="#" class="text-[14px] font-normal leading-[110%] text-dark-gray">Tài khoản</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round" />
                        </svg>

                        <span class="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Quên mật khẩu</span>
                    </div>


                </div>
            </div>
            
            <div style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div class="container py-20">
                    <div class="sign_in">
                        <h2 class="text-center text-gray-black xl:text-[32px] text-[20px] font-semibold font-display">Quên mật khẩu</h2>
                        <p class="xl:text-center text-center text-[#636270] text-[16px] font-normal leading-[150%] font-display pb-6 xl:w-[408px] mx-auto">
                            Vui lòng nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của bạn.</p>
                        <div class="form">
                            <form action="" class="">
                                <div>
                                    <input type="text" placeholder="Email"
                                           class="pl-5 py-[17px] w-full bg-[#F0F2F3] rounded-lg focus:outline-none  focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out pr-5"/>
                                </div>
                                <button class="form_btn w-full">
                                    Hoàn tất
                                    <span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7.5L20.5 12M20.5 12L16 16.5M20.5 12H4.5" stroke="white" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                                </button>
                            </form>
                            <div class="font-display font-normal text-[14px] leading-[110%] text-gray-black mt-6 text-center"><a href="sign-in.html"
                                                                                                                                 class="text-dark-accents font-display font-medium text-[14px] leading-[110%]"> Đăng nhập</a></div>
                        </div>
                    </div>
                </div>
            </div>


            {/*footer*/}
            <Footer/>
            <MiniChat/>
        </div>
    );
}
export default Forget_Password;