import React, { useState } from 'react';
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const selectedServices = useSelector((state) => state.services.selectedServices)
    const totalPrice = useSelector((state) => state.services.totalPrice)

    const location = useLocation()

    const handleCartClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">{location.pathname === '/' ? 'CLIENT VIEW' : 'ADMIN VIEW'}</a>
                {
                    location.pathname === '/' ? (
                        <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" onClick={handleCartClick}>
                                Basket - cost: {totalPrice} zł
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
