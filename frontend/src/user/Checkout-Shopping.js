import 'select2/dist/js/select2';

import React, {useState, useEffect} from 'react';

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
import {useDispatch, useSelector} from "react-redux";
import {commune, dis_tricts, province} from "../api/Api";
import {formatPrice} from "../format/FormatMoney";
import {
    processPayment,
    set_errors_payment,
    setAddress,
    setEmailPayment,
    setFullName,
    setNumberPhone,
    setSelectDistrict,
    setSelectedCommuneName,
    setSelectedDistrictName,
    setSelectedProvince,
    setSelectedProvinceName
} from "../redux/paymentActions";
import Header_Top from "./menu/Header_Top";
import ChatbotBubble from "./component/ChatbotBubble";


const Checkout_Shopping = () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const dispatch = useDispatch();
    const provinces = useSelector((state) => state.appUser.provinces);
    const districts = useSelector((state) => state.appUser.districts);
    const communes = useSelector((state) => state.appUser.communes);
    const selectedProvinceId = useSelector(state => state.paymentReducer.selectedProvinceId);

    const selectedDistrict = useSelector(state => state.paymentReducer.selectedDistrict);
    const selectedProvinceName = useSelector(state => state.paymentReducer.selectedProvinceName);
    const selectedDistrictName = useSelector(state => state.paymentReducer.selectedDistrictName);
    const selectedCommuneName = useSelector(state => state.paymentReducer.selectedCommuneName);
    const address = useSelector(state => state.paymentReducer.addressPayment);
    const cartList = useSelector(state => state.cart.ListCart);
    const user_id = useSelector(state => state.appUser.user_id);
    const errors_payment = useSelector(state => state.paymentReducer.errors_payment);
    const fullName = useSelector(state => state.paymentReducer.fullName);

    const numberPhone = useSelector(state => state.paymentReducer.numberPhone);
    const emailPayment = useSelector(state => state.paymentReducer.emailPayment);
    /*8
 TONG TIEN
     */
    const totalPrice = cartList.reduce((sum, item) => sum + item.price, 0);

    const handleProvinceChange = (e) => {
        const provinceId = e.target.value;
        dispatch(setSelectedProvince(provinceId));

        const province = provinces.find(p => p.id.toString() === provinceId);
        dispatch(setSelectedProvinceName(province.name))
        console.log(province.name);
        console.log(provinceId);
    };
    const handleDistrictChange = (e) => {
        const districtId = e.target.value;
        dispatch(setSelectDistrict(districtId));
        const district = districts.find(d => d.id.toString() === districtId);
        dispatch(setSelectedDistrictName(district.name));
        console.log(districtId);
    };
    const handleCommuneChange = (e) => {
        const communeId = e.target.value;
        const commune = communes.find(c => c.id.toString() === communeId);
        dispatch(setSelectedCommuneName(commune ? commune.name : ''));
    };
    const handleAddressChange = (e) => {

        dispatch(setAddress(e.target.value));
    };
    const handFullNameChange = (e) => {
        dispatch(setFullName(e.target.value));
    };

    const handNumberPhoneChange = (e) => {
        dispatch(setNumberPhone(e.target.value));
    };

    const handEmailChange = (e) => {
        dispatch(setEmailPayment(e.target.value));
    };

    /**
     * tạo mã ngau nhiem
     */
    function getRandomNumber(len) {
        let result = '';
        for (let i = 0; i < len; i++) {
            result += Math.floor(Math.random() * 10); // Random digit from 0 to 9
        }
        return result;
    }

    useEffect(() => {
        dispatch(province());

        if (selectedProvinceId) {
            dispatch(dis_tricts(selectedProvinceId));
        }
        if (selectedDistrict) {
            dispatch(commune(selectedDistrict));
        }

        const updatedAddress = `${selectedCommuneName ? selectedCommuneName + ' - ' : ''}${selectedDistrictName ? selectedDistrictName + ' - ' : ''}${selectedProvinceName || ''}`;
        dispatch(setAddress(updatedAddress));

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
    }, [dispatch, selectedProvinceId, selectedDistrict, selectedProvinceName, selectedDistrictName, selectedCommuneName]);

    const handlePayment = () => {
        const validAddress = address ? address.trim() : '';
        const validFullName = fullName ? fullName.trim() : '';
        const validNumberPhone = numberPhone ? numberPhone.trim() : '';
        const validEmailPayment = emailPayment ? emailPayment.trim() : '';

        // In các giá trị ra console để kiểm tra
        console.log('Valid Address:', validAddress);
        console.log('Valid Address:', validAddress);
        console.log('Valid Full Name:', validFullName);
        console.log('Valid Number Phone:', validNumberPhone);
        console.log('Valid Email Payment:', validEmailPayment);

        if (validAddress === "" || validFullName === "" || validNumberPhone === "" || validEmailPayment === "") {
            console.log("Missing information detected");
            dispatch(set_errors_payment("Vui lòng điền đầy đủ các thông tin"));
        } else {
            const paymentData = {
                user_id: user_id,
                shippingAddress: validAddress,
                code: getRandomNumber(8),
                amount: totalPrice,
                bankCode: 'NCB',
                orderInfo: 'Payment for order xyz'
            };

            console.log('Payment Data:', paymentData);

            dispatch(processPayment(paymentData));
        }
    };


    return (
        <div>
            <Header_Top/>
            <div>
                <div className="pt_b" style={{backgroundColor: "var(--bg-breadcum)"}}>
                    <div className="container px-3 md:px-5 xl:px-0">
                        <div className="flex items-center gap-1 py-[1.5px]">
                            <a href="#" className="text-[14px] font-normal leading-[110%] text-dark-gray">Home</a>

                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>

                            <span
                                className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Shop</span>
                        </div>

                    </div>
                </div>

                <div className="" style={{backgroundColor: "var(--bg-breadcum)"}}>
                    <div className="container py-20">
                        <div className="flex flex-wrap-tw lg:flex-nowrap items-start gap-6-t">

                            <div className="cart-total lg:w-2/3 w-full p-8">
                                <h2 className="text-start text-2xl text-[#272343] font-semibold mb-6 font-display">Thông
                                    tin thanh toán hoá đơn</h2>
                                <div>
                                    <form action="" className="">
                                        {errors_payment && typeof errors_payment === 'string' &&
                                            <div className="alert alert-danger p-lg-1">{errors_payment}</div>}
                                        <div className="flex flex-col sm:flex-row gap-5 items-center mb-5">
                                            <div className=" w-full">
                                                <input type="text" placeholder="Full name"
                                                       className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                                       value={fullName} onChange={handFullNameChange}/>
                                            </div>

                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3 items-center mb-5">

                                            <div className=" w-full">
                                                <li className="inline-flex items-center justify-center address">
                                                    <select className="custom-select2 relative"
                                                            onChange={handleProvinceChange} name="category">
                                                        <option value="" disabled selected>Chọn tỉnh</option>
                                                        {provinces.map((province) => (
                                                            <option key={province.id}
                                                                    value={province.id}>{province.name}</option>
                                                        ))}

                                                    </select>
                                                </li>
                                            </div>
                                            <div className=" w-full">
                                                <li className="inline-flex items-center justify-center address "
                                                    onChange={handleDistrictChange}>
                                                    <select className="custom-select2 relative">
                                                        <option value="" disabled selected>Chọn huyện</option>
                                                        {districts.map((district) => (
                                                            <option key={district.id}
                                                                    value={district.id}>{district.name}</option>
                                                        ))}
                                                    </select>
                                                </li>
                                            </div>
                                            <div className=" w-full">
                                                <li className="inline-flex items-center justify-center address">
                                                    <select className="custom-select2 relative"
                                                            onChange={handleCommuneChange}>
                                                        <option value="" disabled selected>Chọn xã</option>
                                                        {communes.map((commune) => (
                                                            <option key={commune.id}
                                                                    value={commune.id}>{commune.name}</option>
                                                        ))}
                                                    </select>
                                                </li>
                                            </div>
                                        </div>
                                        <div className="w-full inline-flex mb-5">
                                             <textarea
                                                 className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                                 placeholder="Address"
                                                 name=""
                                                 cols="8"
                                                 rows="3"
                                                 value={address}
                                                 onChange={handleAddressChange}
                                             ></textarea>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-5 items-center mb-5">
                                            <div className=" w-full">
                                                <input type="text" placeholder="Phone"
                                                       className="input-box focus:outline-none  focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                                       value={numberPhone} onChange={handNumberPhoneChange}/>
                                            </div>

                                            <div className=" w-full">

                                                <input
                                                    type="email"
                                                    placeholder="Email" name="email"
                                                    className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                                    value={emailPayment}
                                                    onChange={handEmailChange}
                                                />
                                            </div>
                                        </div>

                                        <hr className="my-8"/>


                                    </form>
                                </div>
                            </div>

                            <div className="cart-total p-8 h-auto lg:w-1/3 w-full">


                                {cartList.map((cart) => (
                                    <div className="flex justify-between items-center pb-4">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <img src={cart.url} alt=""/>
                                            </div>
                                            <div className="flex gap-[6px]">
                                                <p>{cart.name}</p>
                                                <span>X</span>
                                                <p>{cart.quantity}</p>
                                            </div>

                                        </div>
                                        <p className="text-gray-black text-[16px] leading-[120%] font-display font-medium">{formatPrice(cart.price)} VNĐ</p>

                                    </div>
                                ))}


                                <hr/>


                                <div className="subtotal-info">

                                    <div className="flex justify-between items-center">
                                        <p className="common-hedding">Tổng tiền</p>
                                        <p className="text-gray-black text-[16px] leading-[120%] font-display font-medium">{formatPrice(totalPrice)} VNĐ</p>
                                    </div>
                                    <div className="flex justify-between items-center pt-4">
                                        <p className="common-hedding">Giảm giá</p>
                                        <p className="text-gray-black text-[16px] leading-[120%] font-display font-medium">0%</p>
                                    </div>
                                    <div className="flex justify-between items-center pt-4">
                                        <p className="common-hedding">Phí vận chuyển</p>
                                        <p className="text-gray-black text-[16px] leading-[120%] font-display font-medium">Free</p>
                                    </div>
                                    <hr/>
                                    <div className="flex justify-between items-center">
                                        <p className="common-hedding">Tổng:</p>
                                        <p className="text-gray-black text-[22px] leading-[120%] font-display font-semibold">{formatPrice(totalPrice)} VNĐ</p>
                                    </div>


                                    <button type={"submit"}
                                            className="w-full flex gap-3 items-center justify-center mt-5 bg-accents hover:bg-[#272343] rounded-lg transition-all duration-300 py-[16px] text-[18px] font-bold font-display leading-[110%] text-gray-white"
                                            onClick={handlePayment}
                                    >
                                        Thanh toán
                                        <span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 7.5L20 12M20 12L15.5 16.5M20 12H4" stroke="white" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </span>
                                    </button>


                                </div>
                            </div>
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
export default Checkout_Shopping;
