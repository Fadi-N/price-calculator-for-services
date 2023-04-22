import React, { useState } from 'react';
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import '../../scss/navbar.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const selectedServices = useSelector((state) => state.services.selectedServices)
    const totalPrice = useSelector((state) => state.services.totalPrice)

    const location = useLocation()

    const handleCartClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand ms-3">{location.pathname === '/' ? 'CLIENT VIEW' : 'ADMIN VIEW'}</a>
                {
                    location.pathname === '/' ? (
                        <div className="dropdown">
                            <button type="button" className="btn total-price-btn me-3 dropdown-toggle" onClick={handleCartClick}>
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span className="total-price">{totalPrice}</span>
                            </button>
                            <ul className={`dropdown-menu w-100 ${isOpen ? 'show' : ''}`}>
                                {selectedServices.length > 0 ? (
                                    selectedServices.map((selectedService, index) => (
                                        <li key={index}>
                                    <span className="dropdown-item" href="#">
                                        {selectedService}
                                    </span>
                                        </li>
                                    ))
                                ) : (
                                    <li>
                                <span className="dropdown-item" href="#">
                                    Your basket is empty!
                                </span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    ): null
                }
            </div>
        </nav>
    );
}

export default Navbar;
