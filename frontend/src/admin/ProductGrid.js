import React, {useEffect, useRef} from 'react';
import noUiSlider from 'nouislider';
import './assets/plugin/nouislider/nouislider.min.css';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
const ProductGrid = () => {
    const sliderRef = useRef(null);
    const inputMinRef = useRef(null);
    const inputMaxRef = useRef(null);

    useEffect(() => {
        const initializeSlider = () => {
            if (sliderRef.current && !sliderRef.current.noUiSlider) {
                noUiSlider.create(sliderRef.current, {
                    start: [0, 2000], // Initial values for the slider
                    connect: true,
                    step: 1,
                    range: {
                        'min': 0,
                        'max': 2000
                    },
                });

                sliderRef.current.noUiSlider.on('update', function (values, handle) {
                    const value = Math.round(values[handle]); // Round the value to avoid decimal places
                    if (handle === 0) { // If the handle being dragged is the first (min value)
                        inputMinRef.current.value = value;
                    } else { // If the handle being dragged is the second (max value)
                        inputMaxRef.current.value = value;
                    }
                });
            }
        };

        initializeSlider();

        return () => {
            if (sliderRef.current && sliderRef.current.noUiSlider) {
                sliderRef.current.noUiSlider.destroy();
            }
        };
    }, []);

    return (
        <div id="ebazar-layout" className="theme-blue">
            {/* sidebar */}
            <Sidebar />

            {/* main body area */}
            <div className="main px-lg-4 px-md-4">
                {/* Body: Header */}
                <Header />
                {/* Body: Body */}
                <div className="body d-flex py-3">
                    <div className="container-xxl">
                        <div className="row align-items-center">
                            <div className="border-0 mb-4">
                                <div
                                    className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                    <h3 className="fw-bold mb-0">Products</h3>
                                    <div className="btn-group group-link btn-set-task w-sm-100">
                                        <a href="product-grid.html"
                                           className="btn active d-inline-flex align-items-center"
                                           aria-current="page"><i className="icofont-wall px-2 fs-5"/>Grid View</a>
                                        <a href="product-list" className="btn d-inline-flex align-items-center"><i
                                            className="icofont-listing-box px-2 fs-5"/> List View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                        <div className="row g-3 mb-3">
                            <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-3">
                                <div className="sticky-lg-top">
                                    <div className="card mb-3">
                                        <div className="reset-block">
                                            <div className="filter-title">
                                                <h4 className="title">Filter</h4>
                                            </div>
                                            <div className="filter-btn">
                                                <a className="btn btn-primary" href="#">Reset</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="categories">
                                            <div className="filter-title">
                                                <a className="title" data-bs-toggle="collapse" href="#category"
                                                   role="button" aria-expanded="true">Categories</a>
                                            </div>
                                            <div className="collapse show" id="category">
                                                <div className="filter-search">
                                                    <form action="#">
                                                        <input type="text" placeholder="Search"
                                                               className="form-control"/>
                                                        <button><i className="lni lni-search-alt"/></button>
                                                    </form>
                                                </div>
                                                <div className="filter-category">
                                                    <ul className="category-list">
                                                        <li><a href="#" data-bs-toggle="collapse"
                                                               data-bs-target="#collapseOne" aria-expanded="false"
                                                               className="collapsed">Game accessories</a>
                                                            <ul id="collapseOne" className="sub-category collapse"
                                                                data-parent="#category">
                                                                <li><a href="#">PlayStation 4</a></li>
                                                                <li><a href="#">Oculus VR</a></li>
                                                                <li><a href="#">Remote</a></li>
                                                                <li><a href="#">Lighting Keyborad</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a className="collapsed" href="#" data-bs-toggle="collapse"
                                                               data-bs-target="#collapseTwo">Bags</a>
                                                            <ul id="collapseTwo" className="sub-category collapse"
                                                                data-parent="#category">
                                                                <li><a href="#">School Bags</a></li>
                                                                <li><a href="#">Traveling Bags</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a className="collapsed" href="#" data-bs-toggle="collapse"
                                                               data-bs-target="#collapseThree">Flower Port</a>
                                                            <ul id="collapseThree" className="sub-category collapse"
                                                                data-parent="#category">
                                                                <li><a href="#">Woodan Port</a></li>
                                                                <li><a href="#">Pattern Port</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a className="collapsed" href="#" data-bs-toggle="collapse"
                                                               data-bs-target="#collapseFour">Watch</a>
                                                            <ul id="collapseFour" className="sub-category collapse"
                                                                data-parent="#category">
                                                                <li><a href="#">Wall Clock</a></li>
                                                                <li><a href="#">Smart Watch</a></li>
                                                                <li><a href="#">Rado Watch</a></li>
                                                                <li><a href="#">Fasttrack Watch</a></li>
                                                                <li><a href="#">Noise Watch</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a className="collapsed" href="#" data-bs-toggle="collapse"
                                                               data-bs-target="#collapseFive">Accessories</a>
                                                            <ul id="collapseFive" className="sub-category collapse"
                                                                data-parent="#category">
                                                                <li><a href="#">Note Diaries</a></li>
                                                                <li><a href="#">Fold Diaries</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="size-block">
                                            <div className="filter-title">
                                                <a className="title" data-bs-toggle="collapse" href="#size"
                                                   role="button" aria-expanded="true">Select Size</a>
                                            </div>
                                            <div className="collapse show" id="size">
                                                <div className="filter-size" id="filter-size-1">
                                                    <ul>
                                                        <li>XS</li>
                                                        <li>S</li>
                                                        <li className>M</li>
                                                        <li>L</li>
                                                        <li>XL</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="color-block">
                                            <div className="filter-title">
                                                <a className="title" data-bs-toggle="collapse" href="#color"
                                                   role="button" aria-expanded="false">Select Color</a>
                                            </div>
                                            <div className="collapse show" id="color">
                                                <div className="filter-color">
                                                    <ul>
                                                        <li>
                                                            <div className="color-check">
                                                                <p><span style={{backgroundColor: '#4114e4'}}/>
                                                                    <strong>Blue</strong></p>
                                                                <input type="checkbox" id="color-1"/>
                                                                <label htmlFor="color-1"><span/></label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="color-check">
                                                                <p><span style={{backgroundColor: '#E14C7B'}}/>
                                                                    <strong>Red</strong></p>
                                                                <input type="checkbox" id="color-2"/>
                                                                <label htmlFor="color-2"><span/></label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="color-check">
                                                                <p><span style={{backgroundColor: '#7CB637'}}/>
                                                                    <strong>Green</strong></p>
                                                                <input type="checkbox" id="color-3"/>
                                                                <label htmlFor="color-3"><span/></label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="color-check">
                                                                <p><span style={{backgroundColor: '#161359'}}/>
                                                                    <strong>Dark</strong></p>
                                                                <input type="checkbox" id="color-4"/>
                                                                <label htmlFor="color-4"><span/></label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="price-range-block">
                                            <div className="filter-title">
                                                <a className="title" data-bs-toggle="collapse" href="#pricingTwo"
                                                   role="button" aria-expanded="false">Pricing Range</a>
                                            </div>
                                            <div className="collapse show" id="pricingTwo">
                                                <div className="price-range">
                                                    <div className="price-amount flex-wrap">
                                                        <div className="amount-input mt-1">
                                                            <label className="fw-bold">Minimum Price</label>
                                                            <input type="text" ref={inputMinRef}
                                                                   className="form-control"/>
                                                        </div>
                                                        <div className="amount-input mt-1">
                                                            <label className="fw-bold">Maximum Price</label>
                                                            <input type="text" ref={inputMaxRef}
                                                                   className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div ref={sliderRef} className="slider-range"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="rating-block">
                                            <div className="filter-title">
                                                <a className="title" data-bs-toggle="collapse" href="#rating"
                                                   role="button" aria-expanded="false">Select Rating</a>
                                            </div>
                                            <div className="collapse show" id="rating">
                                                <div className="filter-rating">
                                                    <ul>
                                                        <li>
                                                            <div className="rating-check">
                                                                <input type="checkbox" id="rating-5"/>
                                                                <label htmlFor="rating-5"><span/>
                                                                </label>
                                                                <p>
                                                                    <i className="icofont-star"/>
                                                                    <i className="icofont-star"/>
                                                                    <i className="icofont-star"/>
                                                                    <i className="icofont-star"/>
                                                                    <i className="icofont-star"/>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="rating-check">
                                                                <input type="checkbox" id="rating-4"/>
                                                                <label htmlFor="rating-4"><span/></label>
                                                                <p>
                                                                    <i className="icofont-star"/>
                                                                    <i className="icofont-star"/>
                                                                    <i className="icofont-star"/>
                                                                    <i className="icofont-star"/>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="rating-check">
                                                                <input type="checkbox" id="rating-3"/>
                                                                <label htmlFor="rating-3"><span/></label>
                                                                <p>
                                                                    <i className="icofont-star"/>
                                                                    <i className="icofont-star"/>
                                                                    <i className="icofont-star"/>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="rating-check">
                                                                <input type="checkbox" id="rating-2"/>
                                                                <label htmlFor="rating-2"><span/></label>
                                                                <p>
                                                                    <i className="icofont-star"/>
                                                                    <i className="icofont-star"/>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="rating-check">
                                                                <input type="checkbox" id="rating-1"/>
                                                                <label htmlFor="rating-1"><span/></label>
                                                                <p>
                                                                    <i className="icofont-star"/>
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8 col-xl-8 col-xxl-9">
                                <div
                                    className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-3">
                                    <div className="col">
                                        <div className="card">
                                            <div className="product">
                                                <div className="product-image">
                                                    <div className="product-item active">
                                                        <img src="assets/images/product/product-1.jpg" alt="product"
                                                             className="img-fluid w-100"/>
                                                    </div>
                                                    <a className="add-wishlist" href="#">
                                                        <i className="bi bi-heart-fill text-danger"/>
                                                    </a>
                                                </div>
                                                <div className="product-content p-3">
                                                    <span className="rating mb-2 d-block"><i
                                                        className="icofont-star text-warning"/> 4.5 (145)</span>
                                                    <a href="product-detail.html" className="fw-bold">Oculus VR </a>
                                                    <p className="text-muted">Reference 1204</p>
                                                    <span className="d-block fw-bold fs-5 text-secondary">$ 149</span>
                                                    <a href="product-cart.html" className="btn btn-primary mt-3">Add to
                                                        Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="product">
                                                <div className="product-image">
                                                    <div className="product-item active">
                                                        <img src="assets/images/product/product-3.jpg" alt="product"
                                                             className="img-fluid w-100"/>
                                                    </div>
                                                    <a className="add-wishlist" href="#">
                                                        <i className="bi bi-heart text-danger"/>
                                                    </a>
                                                </div>
                                                <div className="product-content p-3">
                                                    <span className="rating mb-2 d-block"><i
                                                        className="icofont-star text-warning"/> 4.5 (98)</span>
                                                    <a href="product-detail.html" className="fw-bold">Note Diaries </a>
                                                    <p className="text-muted">Reference 1224</p>
                                                    <span className="d-block fw-bold fs-5 text-secondary">$ 149</span>
                                                    <a href="product-cart.html" className="btn btn-primary mt-3"> Add to
                                                        Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-md-12">
                                        <nav className="justify-content-end d-flex">
                                            <ul className="pagination">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item active" aria-current="page">
                                                    <a className="page-link" href="#">2</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                    </div>
                </div>
                {/* Modal Custom Settings*/}
                <div className="modal fade right" id="Settingmodal" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog  modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Custom Settings</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body custom_setting">
                                {/* Settings: Color */}
                                <div className="setting-theme pb-3">
                                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                        className="icofont-color-bucket fs-4 me-2 text-primary"/>Template Color Settings
                                    </h6>
                                    <ul className="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2">
                                        <li data-theme="indigo">
                                            <div className="indigo"/>
                                        </li>
                                        <li data-theme="tradewind">
                                            <div className="tradewind"/>
                                        </li>
                                        <li data-theme="monalisa">
                                            <div className="monalisa"/>
                                        </li>
                                        <li data-theme="blue" className="active">
                                            <div className="blue"/>
                                        </li>
                                        <li data-theme="cyan">
                                            <div className="cyan"/>
                                        </li>
                                        <li data-theme="green">
                                            <div className="green"/>
                                        </li>
                                        <li data-theme="orange">
                                            <div className="orange"/>
                                        </li>
                                        <li data-theme="blush">
                                            <div className="blush"/>
                                        </li>
                                        <li data-theme="red">
                                            <div className="red"/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-gradient py-3">
                                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                        className="icofont-paint fs-4 me-2 text-primary"/>Sidebar Gradient</h6>
                                    <div className="form-check form-switch gradient-switch pt-2 mb-2">
                                        <input className="form-check-input" type="checkbox" id="CheckGradient"/>
                                        <label className="form-check-label" htmlFor="CheckGradient">Enable Gradient! (
                                            Sidebar )</label>
                                    </div>
                                </div>
                                {/* Settings: Template dynamics */}
                                <div className="dynamic-block py-3">
                                    <ul className="list-unstyled choose-skin mb-2 mt-1">
                                        <li data-theme="dynamic">
                                            <div className="dynamic"><i className="icofont-paint me-2"/> Click to
                                                Dyanmic Setting
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="dt-setting">
                                        <ul className="list-group list-unstyled mt-1">
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label>Primary Color</label>
                                                <button id="primaryColorPicker"
                                                        className="btn bg-primary avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label>Secondary Color</label>
                                                <button id="secondaryColorPicker"
                                                        className="btn bg-secondary avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label className="text-muted">Chart Color 1</label>
                                                <button id="chartColorPicker1"
                                                        className="btn chart-color1 avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label className="text-muted">Chart Color 2</label>
                                                <button id="chartColorPicker2"
                                                        className="btn chart-color2 avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label className="text-muted">Chart Color 3</label>
                                                <button id="chartColorPicker3"
                                                        className="btn chart-color3 avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label className="text-muted">Chart Color 4</label>
                                                <button id="chartColorPicker4"
                                                        className="btn chart-color4 avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label className="text-muted">Chart Color 5</label>
                                                <button id="chartColorPicker5"
                                                        className="btn chart-color5 avatar xs border-0 rounded-0"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Settings: Font */}
                                <div className="setting-font py-3">
                                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                        className="icofont-font fs-4 me-2 text-primary"/> Font Settings</h6>
                                    <ul className="list-group font_setting mt-1">
                                        <li className="list-group-item py-1 px-2">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="radio" name="font"
                                                       id="font-poppins" defaultValue="font-poppins"/>
                                                <label className="form-check-label" htmlFor="font-poppins">
                                                    Poppins Google Font
                                                </label>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-1 px-2">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="radio" name="font"
                                                       id="font-opensans" defaultValue="font-opensans" defaultChecked/>
                                                <label className="form-check-label" htmlFor="font-opensans">
                                                    Open Sans Google Font
                                                </label>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-1 px-2">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="radio" name="font"
                                                       id="font-montserrat" defaultValue="font-montserrat"/>
                                                <label className="form-check-label" htmlFor="font-montserrat">
                                                    Montserrat Google Font
                                                </label>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-1 px-2">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="radio" name="font"
                                                       id="font-mukta" defaultValue="font-mukta"/>
                                                <label className="form-check-label" htmlFor="font-mukta">
                                                    Mukta Google Font
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* Settings: Light/dark */}
                                <div className="setting-mode py-3">
                                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                        className="icofont-layout fs-4 me-2 text-primary"/>Contrast Layout</h6>
                                    <ul className="list-group list-unstyled mb-0 mt-1">
                                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                                            <div className="form-check form-switch theme-switch mb-0">
                                                <input className="form-check-input" type="checkbox" id="theme-switch"/>
                                                <label className="form-check-label" htmlFor="theme-switch">Enable Dark
                                                    Mode!</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                                            <div className="form-check form-switch theme-high-contrast mb-0">
                                                <input className="form-check-input" type="checkbox"
                                                       id="theme-high-contrast"/>
                                                <label className="form-check-label" htmlFor="theme-high-contrast">Enable
                                                    High Contrast</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                                            <div className="form-check form-switch theme-rtl mb-0">
                                                <input className="form-check-input" type="checkbox" id="theme-rtl"/>
                                                <label className="form-check-label" htmlFor="theme-rtl">Enable RTL
                                                    Mode!</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-start">
                                <button type="button" className="btn btn-white border lift" data-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary lift">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;