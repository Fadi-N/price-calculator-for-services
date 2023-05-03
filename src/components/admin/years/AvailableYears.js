import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faTrash} from "@fortawesome/free-solid-svg-icons";
import {deleteYear, disableYear} from "../../../reducers/mainServicesSlice";
import {useState} from "react";

function AvailableYears() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.services.data);
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    return (
        <div className="col-md-9">
            <div className="row">
                <div className="col-md-12 pt-2 available-year-container">
                    <ul className="d-flex list-unstyled">
                        {Object.keys(data).map((year, index) => (
                            <li key={index}
                                className="me-2 py-1 year"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(-1)}
                            >
                                <span
                                    className="px-3 text-color"
                                    value={year.slice(5, 9)}
                                    style={{opacity: data[year].disabled ? "0.5" : "1"}}
                                >
                                    {year.slice(5, 9)}
                                </span>

                                <button
                                    className="btn btn-sm me-1 ms-auto btn-disable"
                                    onClick={() => {
                                        dispatch(
                                            disableYear({year: year, status: data[year].disabled})
                                        );
                                    }}
                                    style={{visibility: hoveredIndex === index ? "visible" : "hidden"}}
                                >
                                    <FontAwesomeIcon icon={faBan}/>
                                </button>
                                <button
                                    className="btn btn-sm btn-delete"
                                    onClick={() => {
                                        dispatch(deleteYear(year));
                                    }}
                                    style={{visibility: hoveredIndex === index ? "visible" : "hidden"}}
                                >
                                    <FontAwesomeIcon icon={faTrash}/>
                                </button>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AvailableYears;
