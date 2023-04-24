import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import '../../scss/navbar.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const selectedServices = useSelector((state) => state.services.selectedServices)
    const totalPrice = useSelector((state) => state.services.totalPrice)

    const location = useLocation()

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand ms-3">{location.pathname === '/' ? 'CLIENT VIEW' : 'ADMIN VIEW'}</a>

                {
                    location.pathname === '/' ? (
                        <>
                            <button className="btn total-price-btn me-3" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FontAwesomeIcon
                                icon={faCartShopping}/>
                                <span className="total-price">{totalPrice}</span></button>

                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                                 aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <span id="offcanvasRightLabel" className="fs-4">Basket</span>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="list-unstyled">
                                        {selectedServices.length > 0 ? (
                                            <>
                                                {
                                                    selectedServices.map((selectedService, index) => (
                                                        <li key={index}>
                                                            <span href="#">{selectedService}</span>
                                                        </li>

                                                    ))
                                                }
                                                <hr/>
                                                <p className="fs-4">Total price: <span className="float-end">{totalPrice} zł</span></p>
                                            </>
                                        ) : (
                                            <li>
                                                <span className="d-flex justify-content-center">
                                                Your basket is empty!
                                                </span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </>
                    ) : null
                }
            </div>
        </nav>
    );
}

export default Navbar;
