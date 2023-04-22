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
            <div className="col-md-2">
                <p className="fs-3">Years:</p>
                <button className="btn  btn-sm" onClick={handleAddNewYear} style={{display: active ? 'none' : "block"}}>Add new year</button>
                {
                    active &&
                    <>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="year" value={year} onChange={(e)=>setYear(e.target.value)}
                                   placeholder="New year"/>
                            <label htmlFor="year">New year</label>
                        </div>
                        <button className="btn btn-sm btn-submit w-100 mb-2" onClick={handleSubmit}><FontAwesomeIcon icon={faCheck} /></button>
                        <button className="btn btn-sm btn-cancel w-100" onClick={handleAddNewYear}><FontAwesomeIcon icon={faXmark} /></button>
                    </>
                }

            </div>
        </>
    )
}
export default AddNewYear