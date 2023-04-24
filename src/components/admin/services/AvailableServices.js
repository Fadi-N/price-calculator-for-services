import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteService, deleteYear, disableService } from "../../../reducers/mainServicesSlice";
import { useState } from "react";

function AvailableServices() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.services.data);
    const [hoveredIndex, setHoveredIndex] = useState({ year: "", key: "" });

    return (
        <div className="col-md-9">
            <div className="row available-service-container">
                {Object.entries(data).map(([year, items]) => (
                    <div className="col-md-4" key={year} style={{ opacity: data[year].disabled ? '0.5' : '1' }}>
                        <p className="fs-3">{year.slice(5, 9)}</p>
                        {items.services.map((item, index) => (
                            <div key={index}>
                                {Object.entries(item).map(([key, value]) => (
                                    <div className="service-container" onMouseEnter={() => setHoveredIndex({ year, key })} onMouseLeave={() => setHoveredIndex({ year: "", key: "" })} key={key}>
                                        <span className="d-flex w-100 mb-2 service" style={{ opacity: value.disabled ? '0.5' : '1' }}>{key} - {value.price}</span>
                                        {hoveredIndex.year === year && hoveredIndex.key === key ? (
                                            <div className="d-flex justify-content-end btn-service-tool-container">
                                                <button className="btn btn-sm me-1 btn-disable" onClick={() => {
                                                    dispatch(disableService({
                                                        year: year,
                                                        key: key,
                                                        status: value.disabled
                                                    }));
                                                }}>
                                                    <FontAwesomeIcon icon={faBan} />
                                                </button>
                                                <button className="btn btn-sm btn-delete" onClick={() => {
                                                    dispatch(deleteService({ year: year, key: key }));
                                                }}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AvailableServices;
