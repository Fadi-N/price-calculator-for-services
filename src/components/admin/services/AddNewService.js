import {useDispatch} from "react-redux";
import {useState} from "react";
import {setNewService, setNewYear} from "../../../reducers/mainServicesSlice";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ListOfYears from "../../client/ListOfYears";

function AddNewService() {
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)
    const [service, setService] = useState()
    const handleAddNewYear = () => {
        setActive(!active)
    }

    const handleSubmit = () => {
        dispatch(setNewService(service));
        handleAddNewYear()
    }
    return (
        <div className="col-md-3">
            <p className="fs-3">Services</p>
            <button className="btn btn-sm w-100" onClick={handleAddNewYear}
                    style={{display: active ? 'none' : "block"}}>Add new service
            </button>
            {
                active &&
                <>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="service" value={service}
                               onChange={(e) => setService(e.target.value)}
                               placeholder="Service name"/>
                        <label htmlFor="service">Service name</label>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-sm w-100 me-1 btn-submit" onClick={handleSubmit}><FontAwesomeIcon icon={faCheck} /></button>
                        <button className="btn btn-sm w-100 btn-cancel" onClick={handleAddNewYear}><FontAwesomeIcon icon={faXmark}/></button>
                    </div>
                </>
            }
        </div>
    )
}

export default AddNewService