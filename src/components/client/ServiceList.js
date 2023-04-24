import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedServices} from "../../reducers/mainServicesSlice";
import {countSelectedServices} from "../../reducers/mainServicesSlice";

function ServiceList() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.services.data)
    const selectedYear = useSelector((state) => state.services.selectedYear)
    const selectedServices = useSelector((state) => state.services.selectedServices)
    const [availableServices, setAvailableServices] = useState(['Internet', 'TV', 'Phone subscription', '4K decoder', 'Internet + TV', 'Internet + phone subscription'])

    const handleOnClick = (availableService) => {
        dispatch(setSelectedServices(availableService));
        dispatch(countSelectedServices());
    }

    return (
        <>
            <p className="fs-3">Services</p>
            <div className="row row-cols-1 row-cols-md-3 g-3">
                {availableServices.map((availableService, index) => (
                    <div className="col">
                        <div className="card">
                            <div className="card-body" key={index}>
                                <p>{availableService}</p>
                                <button className="btn add-to-cart-btn"
                                        onClick={() => handleOnClick(availableService)}
                                        disabled={
                                            availableService.indexOf("decoder") >= 0 &&
                                            !selectedServices.includes("TV")
                                        }
                                >Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ServiceList