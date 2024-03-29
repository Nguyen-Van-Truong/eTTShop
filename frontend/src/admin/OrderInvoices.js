import React from 'react';
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Pagination from "./component/Index/Pagination";

const OrderInvoices = () => {
    // Logic của component ở đây

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
                                    <h3 className="fw-bold mb-0">Order Invoices</h3>
                                </div>
                            </div>
                        </div>
                        {/* Row end  */}
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <table id="patient-table" className="table table-hover align-middle mb-0"
                                               style={{width: '100%'}}>
                                            <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Item</th>
                                                <th>Billing Date</th>
                                                <th>Total Amount</th>
                                                <th>User Name</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><strong>#Order-78414</strong></td>
                                                <td><img src="assets/images/product/product-1.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span> Oculus VR </span>
                                                </td>
                                                <td>May 16, 2021</td>
                                                <td>$212</td>
                                                <td>Alexander007</td>
                                                <td>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-print fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-download fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-send-mail fs-4"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>#Order-58414</strong></td>
                                                <td><img src="assets/images/product/product-2.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Wall Clock</span>
                                                </td>
                                                <td>May 22, 2021</td>
                                                <td>$612</td>
                                                <td>Joan123</td>
                                                <td>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-print fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-download fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-send-mail fs-4"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>#Order-48414</strong></td>
                                                <td><img src="assets/images/product/product-3.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Note Diaries</span>
                                                </td>
                                                <td>May 16, 2021</td>
                                                <td>$612</td>
                                                <td>Peterjio</td>
                                                <td>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-print fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-download fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-send-mail fs-4"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>#Order-38414</strong></td>
                                                <td><img src="assets/images/product/product-4.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Flower Port</span>
                                                </td>
                                                <td>May 23, 2021</td>
                                                <td>$112</td>
                                                <td>Zoesmart</td>
                                                <td>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-print fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-download fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-send-mail fs-4"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>#Order-28414</strong></td>
                                                <td><img src="assets/images/product/product-5.jpg"
                                                         className="avatar lg rounded me-2"
                                                         alt="profile-image"/><span>Bag</span></td>
                                                <td>May 18, 2021</td>
                                                <td>$300</td>
                                                <td>Grace786</td>
                                                <td>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-print fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-download fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-send-mail fs-4"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>#Order-18414</strong></td>
                                                <td><img src="assets/images/product/product-6.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Rado Watch</span>
                                                </td>
                                                <td>May 22, 2021</td>
                                                <td>$330</td>
                                                <td>Dianalove</td>
                                                <td>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-print fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-download fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-send-mail fs-4"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>#Order-88414</strong></td>
                                                <td><img src="assets/images/product/product-7.jpg"
                                                         className="avatar lg rounded me-2" alt="profile-image"/><span>Traveling bag</span>
                                                </td>
                                                <td>May 16, 2021</td>
                                                <td>$370</td>
                                                <td>Sarahone</td>
                                                <td>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-print fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-download fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-send-mail fs-4"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>#Order-98414</strong></td>
                                                <td><img src="assets/images/product/product-8.jpg"
                                                         className="avatar lg rounded me-2"
                                                         alt="profile-image"/><span>Chair</span></td>
                                                <td>May 16, 2021</td>
                                                <td>$170</td>
                                                <td>Julia42</td>
                                                <td>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-print fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-download fs-5"/></a>
                                                    <a className="btn btn-sm btn-white" href="invoices.html"><i
                                                        className="icofont-send-mail fs-4"/></a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <Pagination/>

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

export default OrderInvoices;