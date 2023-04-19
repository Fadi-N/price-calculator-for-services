import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedServices} from "../../reducers/mainServicesSlice";
import {countSelectedServices} from "../../reducers/mainServicesSlice";

function ServiceList() {
    const dispatch = useDispatch()

    const [availableServices, setAvailableServices] = useState(['Internet', 'TV', 'Phone subscription', '4K decoder', 'Internet + TV', 'Internet + phone subscription'])

    const handleOnClick = (availableService) =>{
        dispatch(setSelectedServices(availableService));
        dispatch(countSelectedServices());
    }

    return (
        <>
            <>
                <h1>Our services</h1>
                <div className="row row-cols-1 row-cols-md-3 g-2">
                    {availableServices.map((availableService, index) => (
                        <div className="col">
                            <div className="card">
                                <div className="card-body" key={index}>
                                    <p>{availableService}</p>
                                    <button className="btn btn-primary"
                                            onClick={() => handleOnClick(availableService)}>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        </>
    )
}

export default ServiceList