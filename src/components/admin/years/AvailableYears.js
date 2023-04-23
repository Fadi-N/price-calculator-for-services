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
                    {Object.keys(data).map((year, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(-1)}
                        >
                            <p
                                className="year"
                                value={year.slice(5, 9)}
                                style={{opacity: data[year].disabled ? "0.5" : "1"}}
                            >
                                {year.slice(5, 9)}
                            </p>
                            {hoveredIndex === index && (
                                <>
                                    <button
                                        className="btn btn-sm me-1 btn-disable"
                                        onClick={() => {
                                            dispatch(
                                                disableYear({year: year, status: data[year].disabled})
                                            );
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faBan}/>
                                    </button>
                                    <button
                                        className="btn btn-sm btn-delete"
                                        onClick={() => {
                                            dispatch(deleteYear(year));
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AvailableYears;
