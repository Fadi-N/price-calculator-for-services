import {useDispatch} from "react-redux";
import {useState} from "react";
import {setNewService, setNewYear} from "../../../reducers/mainServicesSlice";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
        <div className="col-md-2">
            <p className="fs-3">Services</p>
            <button className="btn  btn-sm" onClick={handleAddNewYear}
                    style={{display: active ? 'none' : "block"}}>Add new service
            </button>
            {
                active &&
                <>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="service" value={service}
                               onChange={(e) => setService(e.target.value)}
                               placeholder="New service"/>
                        <label htmlFor="service">New service</label>
                    </div>
                    <button className="btn btn-sm btn-submit w-100 mb-2" onClick={handleSubmit}><FontAwesomeIcon icon={faCheck} /></button>
                    <button className="btn btn-sm btn-cancel w-100" onClick={handleAddNewYear}><FontAwesomeIcon icon={faXmark}/></button>
                </>
            }
        </div>
    )
}

export default AddNewService