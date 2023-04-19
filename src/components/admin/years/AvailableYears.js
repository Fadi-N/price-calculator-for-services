import {useSelector} from "react-redux";

function AvailableYears(){
    const data = useSelector((state) => state.services.data)
    return(
        <div className="col-md-10">
            <p>Available:</p>
            <div>
                {Object.keys(data).map((year, index) => (
                    <p key={index} value={year.slice(5, 9)}>{year.slice(5, 9)}</p>
                ))}
            </div>
        </div>
    )
}
export default AvailableYears