import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedServices} from "../reducers/selectedServicesSlice";

function ServiceList() {
   const dispatch = useDispatch()

    const [availableServices, setAvailableServices] = useState(['Internet', 'TV', 'Phone subscription', '4K decoder', 'Internet + TV', 'Internet + phone subscription'])

    return (
        <>
            <div>
                <h1>Service List</h1>
                {availableServices.map((availableService, index) => (
                    <section key={index}>
                        <p>{availableService}</p>
                        <button onClick={() => dispatch(setSelectedServices(availableService))}>+</button>
                    </section>
                ))}
            </div>
        </>
    )
}

export default ServiceList