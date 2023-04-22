import {useSelector} from "react-redux";

function AvailableServices() {
    const data = useSelector((state) => state.services.data)
    return (
        <div className="col-md-10">
            <div className="row pt-1 available-service-container">
                {Object.entries(data).map(([year, items]) => (
                    <div className="col-md-4" key={year}>
                        <h2>{year.slice(5, 9)}</h2>
                        {items.map((item, index) => (
                            <div key={index}>
                                {Object.entries(item).map(([key, value]) => (
                                    <p className="service" key={key}>{key} - {value}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AvailableServices