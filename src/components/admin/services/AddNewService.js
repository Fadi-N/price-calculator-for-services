import {useDispatch} from "react-redux";
import {useState} from "react";
import {setNewService, setNewYear} from "../../../reducers/mainServicesSlice";

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
            <p>Services</p>
            <button className="btn btn-primary btn-sm" onClick={handleAddNewYear}
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
                    <button className="btn btn-success btn-sm" onClick={handleSubmit}>Add</button>
                    <button className="btn btn-danger btn-sm" onClick={handleAddNewYear}>Cancel</button>
                </>
            }
        </div>
    )
}

export default AddNewService