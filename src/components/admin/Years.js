import {useSelector} from "react-redux";

function Years(){
    const data = useSelector((state) => state.services.data)
    return(
        <div>
            {Object.keys(data).map((year, index) => (
                <p key={index} value={year.slice(5, 9)}>{year.slice(5, 9)}</p>
            ))}
        </div>
    )
}
export default Years