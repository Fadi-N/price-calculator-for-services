import {useSelector} from "react-redux";

function AvailableServices() {
    const data = useSelector((state) => state.services.data)
    return (
        <div className="col-md-10">
            <p>Available:</p>
            <div>
                {Object.entries(data).map(([year, items]) => (
                    <div key={year}>
                        <h2>{year.slice(5, 9)}</h2>
                        {items.map((item, index) => (
                            <p key={index}>
                                {Object.entries(item).map(([key, value]) => (
                                    <p key={key}>{key} - {value}</p>
                                ))}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AvailableServices