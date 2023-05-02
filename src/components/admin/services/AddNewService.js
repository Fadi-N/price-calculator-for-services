import {useDispatch} from "react-redux";
import {useState} from "react";
import {setNewService, setNewYear} from "../../../reducers/mainServicesSlice";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ListOfYears from "../../client/ListOfYears";
import YearSelection from "./YearSelection";
import ServiceName from "./ServiceName";
import ServicePrice from "./ServicePrice";

function AddNewService() {
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)
    const [service, setService] = useState()
    const [price, setPrice] = useState()
    const [selectedYear, setSelectedYear] = useState('2023')
    const handleCancel = () => {
        setActive(!active)
    }

    const handleSubmit = (year, service, price) => {
        dispatch(setNewService({year: year, service:service, price:price}));
        handleCancel()
    }
    return (
        <div className="col-md-3">
            <p className="fs-3">Services</p>
            <button className="btn btn-sm w-100" onClick={handleCancel}
                    style={{display: active ? 'none' : "block"}}>Add new service
            </button>
            {
                active &&
                <>
                    <YearSelection setSelectedYear={setSelectedYear}/>
                    <ServiceName service={service} setService={setService}/>
                    <ServicePrice price={price} setPrice={setPrice}/>
                    <div className="d-flex">
                        <button className="btn btn-sm w-100 me-1 btn-submit" onClick={()=>handleSubmit(selectedYear, service, price)}><FontAwesomeIcon icon={faCheck} /></button>
                        <button className="btn btn-sm w-100 btn-cancel" onClick={handleCancel}><FontAwesomeIcon icon={faXmark}/></button>
                    </div>
                </>
            }
        </div>
    )
}

export default AddNewService