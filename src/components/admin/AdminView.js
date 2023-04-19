import Navbar from "../navbar/Navbar";
import Years from "./Years";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setNewYear} from "../../reducers/mainServicesSlice";

function AdminView() {
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

    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <p>Years:</p>
                    <div className="col-md-2">
                        <button className="btn btn-primary btn-sm" onClick={handleAddNewYear} style={{display: active ? 'none' : "block"}}>Add new year</button>
                        {
                            active &&
                            <>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="year" value={year} onChange={(e)=>setYear(e.target.value)}
                                           placeholder="New year"/>
                                    <label htmlFor="year">New year</label>
                                </div>
                                <button className="btn btn-success btn-sm" onClick={handleSubmit}>Add</button>
                                <button className="btn btn-danger btn-sm" onClick={handleAddNewYear}>Cancel</button>
                            </>
                        }

                    </div>
                    <div className="col-md-10">
                        <p>Available:</p>
                        <Years/>
                    </div>
                </div>
                <div className="row">
                    <p>Services</p>
                    <div className="col-md-2">
                        <button className="btn btn-primary btn-small">Add new Service</button>
                    </div>
                    <div className="col-md-10">
                        <p>Available:</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminView