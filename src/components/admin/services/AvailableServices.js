import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faTrash} from "@fortawesome/free-solid-svg-icons";
import {deleteService, deleteYear, disableService} from "../../../reducers/mainServicesSlice";
import {useState} from "react";

function AvailableServices() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.services.data);
    const [hoveredIndex, setHoveredIndex] = useState({year: "", key: ""});

    return (
        <div className="col-md-9">
            <div className="row available-service-container">
                {Object.entries(data).map(([year, items]) => (
                    <div className="col-md-4" key={year} style={{opacity: data[year].disabled ? '0.5' : '1'}}>
                        <p className="fs-3">{year.slice(5, 9)}</p>
                        {items.services.map((item, index) => (
                            <ul className="list-unstyled">
                                {Object.entries(item).map(([key, value]) => (
                                    <li className="d-flex mb-2 py-1 service"
                                        onMouseEnter={() => setHoveredIndex({year, key})}
                                        onMouseLeave={() => setHoveredIndex({year: "", key: ""})} key={key}>
                                        <span className="ps-3 text-color"
                                              style={{opacity: value.disabled ? '0.5' : '1'}}>{key.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`)} - {value.price}</span>
                                        <button className="btn btn-sm me-1 ms-auto btn-disable" onClick={() => {
                                            dispatch(disableService({
                                                year: year,
                                                key: key,
                                                status: value.disabled
                                            }));
                                        }}
                                                style={{visibility: hoveredIndex.year === year && hoveredIndex.key === key ? "visible" : "hidden"}}>
                                            <FontAwesomeIcon icon={faBan}/>
                                        </button>
                                        <button className="btn btn-sm btn-delete" onClick={() => {
                                            dispatch(deleteService({year: year, key: key}));
                                        }}
                                                style={{visibility: hoveredIndex.year === year && hoveredIndex.key === key ? "visible" : "hidden"}}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </button>

                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AvailableServices;
