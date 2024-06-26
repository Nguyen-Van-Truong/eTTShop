import 'select2/dist/js/select2';
import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
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
import {useDispatch, useSelector} from "react-redux";
import {checkEmail, otp, } from "../api/Api";
import {resetRegistrationMessage, setError, setFormData, setIsSubmitting} from "../redux/Action";
import {bindActionCreators} from "redux";
import {Cookies, useCookies} from "react-cookie";
import {check} from "../redux/RegisterAction";
import {useTranslation} from "react-i18next";
import Header_Top from "./menu/Header_Top";
import ChatbotBubble from "./component/ChatbotBubble";

const Register = () => {
    const [cookies, setCookie] = useCookies(['otp']);

    const [showPassword, setShowPassword] = useState(false);
    const [isConfirmPassWord, setConfirmPass] = useState(false);
    const dispatch = useDispatch();
    const formData = useSelector(state => state.appUser.formData);
    const errors = useSelector(state => state.appUser.errors);
    const { t } = useTranslation();
    const errorMessage = useSelector(state => state.appUser.errorsMessage);
    const isSubmitting =useSelector(state => state.appUser.isSubmitting);
    const navigate = useNavigate();

    /**
     *  goi hàm  action
     */
    const {otpAction} = bindActionCreators({otpAction: otp}, dispatch);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPass(!isConfirmPassWord);
    };
    /**
     * ham thay đổi onchange khi nhâp  thông tin form
     * @param event
     */
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        console.log("Input changed:", name, value);
        dispatch(setFormData(name, value));

        if (name === 'email') {
            dispatch(checkEmail(value));
        }

    };
    /**
     * ham xử lý from khi submit
     * @param e
     */

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.password === '' || formData.email === '' || formData.username === ''){
            dispatch(setError('Vui lòng điền đẩy đủ các thông tin'));
        }else
        if (formData.password !== formData.confirmPassword) {

            dispatch(setError('Mật khẩu không trùng khớp'));
        } else if (formData.username === '' && formData.email === '' && formData.password === '') {
            dispatch(setError('Vui lòng điền đầy đủ các thông tin'));

        } else if (formData.email === '') {
            dispatch(setError('Mail Không được để trống'));
        } else {
            dispatch(setIsSubmitting(true));
            /**
             * tao ngau nhien otp
             * @type {{password, email: *, username: *}}
             */
            const userData = {
                username: formData.username,
                email: formData.email,
                password: formData.password,

            };
            const min = 100000;
            const max = 999999;
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            dispatch(check(true));
            otpAction(userData.email, randomNum, (code) => navigate('/send-otp', {state: {code, randomNum}}));
            sessionStorage.setItem('username', formData.username);
            sessionStorage.setItem('password', formData.password);
            sessionStorage.setItem('email', formData.email);
            dispatch(setError(''));
        }
    }
    useEffect(() => {

    }, []);
    return (
        <div>

          <Header_Top/>

            <div className="pt_b" tyle={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container px-3 md:px-5 xl:px-0">
                    <div className="flex items-center gap-1 py-[1.5px]">
                        <a href="#" className="text-[14px] font-normal leading-[110%] text-dark-gray">{t('home')}</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>

                        <a href="#" className="text-[14px] font-normal leading-[110%] text-dark-gray">{t('account')}</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>

                        <span
                            className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">{t('register')}</span>
                    </div>

                    <h2 className="pt-[13.5px] text-2xl font-semibold text-gray-black font-display">{t('register')}</h2>
                </div>
            </div>

            <div style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container py-20">
                    <div className="sign_in">
                        <h2 className="text-center text-gray-black xl:text-[32px] text-[20px] font-semibold font-display">{t('register')}</h2>
                        <div className="form">
                            <form onSubmit={handleSubmit} className="">
                                {errorMessage && <div className="alert alert-danger p-lg-1">{errorMessage}</div>}
                                {errors && <div className="alert alert-danger p-lg-1">{errors}</div>}
                                <div className="mb-4">
                                    <input type="text" placeholder="Username" name="username"
                                           className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                           value={formData.username} onChange={handleInputChange}/>
                                </div>
                                <div className="mb-4">
                                    <input type="email" placeholder="Email" name="email"
                                           className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                           value={formData.email} onChange={handleInputChange}/>
                                </div>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} placeholder="Password"
                                           className="form_password focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                           name="password" value={formData.password} onChange={handleInputChange}/>
                                    <span className="absolute top-[17px] right-5 cursor-pointer ">

                            <svg id="create-icon-show" onClick={togglePasswordVisibility} width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 4.24902C4.5 4.24902 1.5 11.9999 1.5 11.9999C1.5 11.9999 4.5 19.749 12 19.749C19.5 19.749 22.5 11.9999 22.5 11.9999C22.5 11.9999 19.5 4.24902 12 4.24902V4.24902Z"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <path
                                    d="M12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75V15.75Z"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                            <svg className="mt-[10px]" id="create-icon-hide" onClick="CreatePasswordIcon()" width="20"
                                 height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.858 2.93481L18.9963 6.63906" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.4547 4.99353L13.1215 8.77578" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.53701 4.99133L6.86951 8.77433" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.13825 2.9325L0.989502 6.6525" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M1 0.83252C2.575 2.78252 5.4655 5.25002 10 5.25002C14.5345 5.25002 17.4235 2.78252 19 0.83252"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                        </span>
                                </div>
                                <div className="relative">
                                    <input type={isConfirmPassWord ? "text" : "password"} placeholder="Confirm Password"
                                           className="form_password focus:outline-none  focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                           name="confirmPassword" value={formData.confirmPassword}
                                           onChange={handleInputChange}/>
                                    <span className="absolute top-[17px] right-5 cursor-pointer ">
                            <svg id="icon-show" onClick={toggleConfirmPasswordVisibility} width="24" height="24"
                                 viewBox="0 0 24 24"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 4.24902C4.5 4.24902 1.5 11.9999 1.5 11.9999C1.5 11.9999 4.5 19.749 12 19.749C19.5 19.749 22.5 11.9999 22.5 11.9999C22.5 11.9999 19.5 4.24902 12 4.24902V4.24902Z"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <path
                                    d="M12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75V15.75Z"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                            <svg className="mt-[10px]" id="icon-hide" onClick="PasswordIcon()" width="20" height="10"
                                 viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.858 2.93481L18.9963 6.63906" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.4547 4.99353L13.1215 8.77578" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.53701 4.99133L6.86951 8.77433" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.13825 2.9325L0.989502 6.6525" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M1 0.83252C2.575 2.78252 5.4655 5.25002 10 5.25002C14.5345 5.25002 17.4235 2.78252 19 0.83252"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                        </span>
                                </div>

                                <button type={"submit"} className="form_btn w-full" disabled={isSubmitting}>
                                    {t('register')}
                                    <span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7.5L20.5 12M20.5 12L16 16.5M20.5 12H4.5" stroke="white" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                                </button>
                            </form>
                            <div
                                className="font-display font-normal text-[14px] leading-[110%] text-gray-black mt-6 text-center">
                                {t('dontHaveAccount')} <Link
                                className="text-dark-accents font-display font-medium text-[14px] leading-[110%]"
                                to={"/login"}>{t('login')}</Link></div>
                        </div>
                    </div>
                </div>
            </div>


            {/*footer*/}
            <Footer/>
            <MiniChat/>
            <ChatbotBubble/>

        </div>
    );
}
export default Register;
