import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faTrash} from "@fortawesome/free-solid-svg-icons";
import {deleteService, deleteYear, disableService} from "../../../reducers/mainServicesSlice";

function AvailableServices() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.services.data)
    return (
        <div className="col-md-9">
            <div className="row pt-1 available-service-container">
                {Object.entries(data).map(([year, items]) => (
                    <div className="col-md-4" key={year} style={{opacity: data[year].disabled ? '0.5' : '1'}}>
                        <h2>{year.slice(5, 9)}</h2>
                        {items.services.map((item, index) => (
                            <div key={index}>
                                {Object.entries(item).map(([key, value]) => (
                                    <>
                                        <p className="service" key={key} style={{opacity: value.disabled ? '0.5' : '1'}}>{key} - {value.price}</p>
                                        <button className="btn btn-sm me-1 btn-disable" onClick={()=>{dispatch(disableService({year:year, key:key, status:value.disabled}))}}><FontAwesomeIcon icon={faBan} /></button>
                                        <button className="btn btn-sm btn-delete" onClick={()=>{dispatch(deleteService({year:year, key:key}))}}><FontAwesomeIcon icon={faTrash} /></button>
                                    </>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AvailableServices