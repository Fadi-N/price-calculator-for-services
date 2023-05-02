import {useDispatch, useSelector} from "react-redux";


const YearSelection = ({setSelectedYear}) =>{
    const data = useSelector((state) => state.services.data)
    return (
        <>
            <p className="fs-5">Select year</p>
            <select class="form-select form-select-sm mb-2" onChange={(e)=>setSelectedYear(e.target.value)}>
                {Object.keys(data).map((year, index) => (
                    <option key={index} value={year.slice(5, 9)}>{year.slice(5, 9)}</option>
                ))}
            </select>
        </>
    )
}

export default YearSelection