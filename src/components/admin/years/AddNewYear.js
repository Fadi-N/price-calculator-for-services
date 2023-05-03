import {useState} from "react";
import {setNewYear} from "../../../reducers/mainServicesSlice";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

function AddNewYear(){
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)
    const [year, setYear] = useState()
    const handleAddNewYear = () => {
        setActive(!active)
    }

    const handleSubmit = () => {
        dispatch(setNewYear(year));
        handleAddNewYear()
    }
    return(
        <>
            <div className="col-md-3">
                <p className="fs-3">Years:</p>
                <button className="btn btn-sm w-100" onClick={handleAddNewYear} style={{display: active ? 'none' : "block"}}>Add new year</button>
                {
                    active &&
                    <div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="year" value={year} onChange={(e)=>setYear(e.target.value)}
                                   placeholder="New year"/>
                            <label htmlFor="year">New year</label>
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-sm w-100 me-1 btn-submit" onClick={handleSubmit}><FontAwesomeIcon icon={faCheck} /></button>
                            <button className="btn btn-sm w-100 btn-cancel" onClick={handleAddNewYear}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
export default AddNewYear