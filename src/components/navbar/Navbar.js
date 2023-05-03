import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import '../../scss/navbar.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faTrash} from "@fortawesome/free-solid-svg-icons";
import {countSelectedServices, removeFromBasket} from "../../reducers/mainServicesSlice";
import BeneficialSolution from "../client/BeneficialSolution";

function Navbar() {
    const dispatch = useDispatch()
    const selectedServices = useSelector((state) => state.services.selectedServices)
    const totalPrice = useSelector((state) => state.services.totalPrice)
    const location = useLocation()
    const [indexEntered, setIndexEntered] = useState()

    const handleDeleteButton = (index) => {
        dispatch(removeFromBasket(index))
        dispatch(countSelectedServices())
    }

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
                                                        <>
                                                            <li key={index} className="d-flex py-1 service"
                                                                onMouseEnter={() => setIndexEntered(index)}
                                                                onMouseLeave={() => setIndexEntered(null)}>
                                                                <span
                                                                    className="ps-3">{selectedService.service.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`)}
                                                                </span>
                                                                <span
                                                                    className="service-price">{selectedService.price} zł</span>
                                                                <button className="btn btn-sm ms-2 ms-auto btn-delete"
                                                                        onClick={() => handleDeleteButton(index)}
                                                                        style={{display: indexEntered === index ? "block" : "none"}}>
                                                                    <FontAwesomeIcon icon={faTrash}/></button>
                                                            </li>
                                                        </>
                                                    ))
                                                }
                                                <hr/>
                                                <p className="fs-4">Total price: <span
                                                    className="float-end">{totalPrice} zł</span></p>
                                                <div>
                                                    <BeneficialSolution selectedServices={selectedServices}/>
                                                </div>
                                            </>
                                        ) : (
                                            <li>
                                                <span
                                                    className="d-flex justify-content-center">Your basket is empty!</span>
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
