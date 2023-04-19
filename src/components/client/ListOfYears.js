import {useDispatch, useSelector} from "react-redux";
import {setSelectedYear} from "../../reducers/mainServicesSlice";

function ListOfYears() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.services.data)
    return (
        <>
            <h1>Filters</h1>
            <select class="form-select form-select-sm" onChange={(e) => dispatch(setSelectedYear(e.target.value))}>
                {Object.keys(data).map((year, index) => (
                    <option key={index} value={year.slice(5, 9)}>{year.slice(5, 9)}</option>
                ))}
            </select>
        </>
    )
}

export default ListOfYears