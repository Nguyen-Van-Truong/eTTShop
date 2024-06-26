import 'select2/dist/js/select2';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../assets/plugins/css/swipper.css';
import '../assets/plugins/css/select2.css';
import '../css/tailwind.css';
import '../css/styles.css';
import '../css/responsive.css';
import MiniChat from "./MiniChat";

import Footer from "./footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../api/Api";
import { setEmail, setError, setPassword } from "../redux/Action";
import Header_Top from "./menu/Header_Top";
import {useTranslation} from "react-i18next";
import ChatbotBubble from "./component/ChatbotBubble";

const SignIn = () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        console.log('New email value:', emailValue);
        dispatch(setEmail(emailValue));
    };

    const dispatch = useDispatch();
    const email = useSelector(state => state.appUser.email_login);
    const password = useSelector(state => state.appUser.password_login);
    const userData = useSelector(state => state.appUser.userData);
    const isStatus = useSelector(state => state.appUser.isStatus);
    const error = useSelector(state => state.appUser.errorLogin);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Email:', email); // Thêm dòng này
        console.log('Password:', password); // Thêm dòng này
        dispatch(login(email, password));
    }

    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        console.log('New password value:', passwordValue);
        dispatch(setPassword(passwordValue));
    };

    const handClickRecieveRegister = () => {
        navigate('/register');
        dispatch(setError(''));
    }

    useEffect(() => {
        if (userData !== null) {
            console.log(userData);
            const isAdmin = userData.is_admin;

            if (isAdmin) {
                sessionStorage.setItem('username', userData.username);
                sessionStorage.setItem('email', userData.email);
                navigate('/index-admin');
            } else {
                sessionStorage.setItem('email', userData.email);
                sessionStorage.setItem('username', userData.username);
                navigate('/');
            }
        }


    }, [userData]);

    return (
        <div>
            <Header_Top/>

            <div className="pt_b" style={{ backgroundColor: "var(--bg-breadcum)" }}>
                <div className="container px-3 md:px-5 xl:px-0">
                    <div className="flex items-center gap-1 py-[1.5px]">
                        <a href="/" className="text-[14px] font-normal leading-[110%] text-dark-gray">{t('home')}</a>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <a href="#" className="text-[14px] font-normal leading-[110%] text-dark-gray">{t('account')}</a>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">{t('login')}</span>
                    </div>
                    <h2 className="pt-[13.5px] text-2xl font-semibold text-gray-black font-display">{t('login')}</h2>
                </div>
            </div>

            <div className=" " style={{ backgroundColor: "var(--bg-breadcum)" }}>
                <div className="container py-10">
                    <div className="sign_in ">
                        <h2 className="text-center text-gray-black xl:text-[32px] text-[20px] font-semibold font-display">{t('login')}</h2>
                        {/*form dang nhap*/}
                        <div className="form">
                            <form onSubmit={handleSubmit} action="" className="">
                                {/*bao loi*/}
                                {error && typeof error === 'string' && <div className="alert alert-danger p-lg-1">{error}</div>}
                                <div className="mb-4">
                                    <input type="email" placeholder="Email" name="email"
                                           className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                           value={email} onChange={handleEmailChange} />
                                </div>

                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} placeholder="Password"
                                           className="form_password focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                           value={password} onChange={handlePasswordChange} />
                                    <span className="absolute top-[17px] right-5 cursor-pointer ">
                                        <svg id="icon-show" onClick={togglePasswordVisibility} width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 4.24902C4.5 4.24902 1.5 11.9999 1.5 11.9999C1.5 11.9999 4.5 19.749 12 19.749C19.5 19.749 22.5 11.9999 22.5 11.9999C22.5 11.9999 19.5 4.24902 12 4.24902V4.24902Z"
                                                stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75V15.75Z"
                                                stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg className="mt-[10px]" id="icon-hide" onClick="PasswordIcon()" width="20" height="10"
                                             viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.858 2.93481L18.9963 6.63906" stroke="#272343" strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.4547 4.99353L13.1215 8.77578" stroke="#272343" strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.53701 4.99133L6.86951 8.77433" stroke="#272343" strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.13825 2.9325L0.989502 6.6525" stroke="#272343" strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M1 0.83252C2.575 2.78252 5.4655 5.25002 10 5.25002C14.5345 5.25002 17.4235 2.78252 19 0.83252"
                                                stroke="#272343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="cursor-pointer inline-flex items-center">
                                        <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent"
                                               className="cursor-pointer" type="checkbox" value="yes" />
                                        <label htmlFor="wp-comment-cookies-consent">Remember me</label>
                                    </div>
                                    <a href="/forget-password"
                                       className="text-dark-accents text-[14px] font-medium line-height-[110%]">{t('forgotPassword')}</a>
                                </div>
                                <button type={"submit"} className="form_btn w-full">
                                    {t('login')}
                                    <span>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 7.5L20.5 12M20.5 12L16 16.5M20.5 12H4.5" stroke="white" strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </form>
                            <div
                                className="font-display font-normal text-[14px] leading-[110%] text-gray-black mt-6 text-center">{t('alreadyHaveAccount')} <a
                                className="text-dark-accents font-display font-medium text-[14px] leading-[110%]"
                                onClick={handClickRecieveRegister}>{t('register')}</a></div>
                        </div>
                    </div>
                </div>
            </div>
            {/*footer*/}
            <Footer />
            <MiniChat />
            <ChatbotBubble/>

        </div>
    );
};

export default SignIn;
