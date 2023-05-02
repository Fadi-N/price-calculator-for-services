import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteService, disableService, setSelectedServices} from "../../reducers/mainServicesSlice";
import {countSelectedServices} from "../../reducers/mainServicesSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faTrash} from "@fortawesome/free-solid-svg-icons";

function ServiceList() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.services.data)
    const selectedYear = useSelector((state) => state.services.selectedYear)
    const selectedServices = useSelector((state) => state.services.selectedServices)

    const handleOnClick = (service, price) => {
        dispatch(setSelectedServices({service: service, price: price}));
        dispatch(countSelectedServices());
    }

    return (
        <>
            <p className="fs-3">Services</p>
            <div className="row row-cols-1 row-cols-md-3 g-3">
                {Object.entries(data).map(([year, items]) => (
                    <>
                        {
                            year.slice(5, 9) === selectedYear && items.services.map((item, index) => (
                                <>
                                    {Object.entries(item).map(([key, value]) => (
                                        <>
                                            <div className="col">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <p>{key.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`)}</p>
                                                        <p>{value.price}</p>
                                                        <button className="btn add-to-cart-btn"
                                                                onClick={() => handleOnClick(key, value.price)}
                                                                disabled={
                                                                    key.indexOf("decoder") >= 0 &&
                                                                    !key.includes("tv")
                                                                }
                                                        >Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </>
                            ))
                        }
                    </>
                ))}
            </div>
        </>
    )
}

export default ServiceList