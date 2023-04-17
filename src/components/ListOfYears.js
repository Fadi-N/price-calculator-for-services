import {useDispatch, useSelector} from "react-redux";
import {setSelectedYear} from "../reducers/mainServicesSlice";

function ListOfYears() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.services.data)
    return (
        <>
            <h1>List of years:</h1>
            <select onChange={(e) => dispatch(setSelectedYear(e.target.value))}>
                {/*{
                    data.map(objectData=>{
                        return Object.keys(objectData).map((year, index) => (
                            <option key={index} value="">{year.slice(5,9)}</option>
                        ))
                    })
                }*/}
                {Object.keys(data).map((year, index) => (
                    <option key={index} value={year.slice(5, 9)}>{year.slice(5, 9)}</option>
                ))}
            </select>
        </>
    )
}

export default ListOfYears