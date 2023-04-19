import {useDispatch, useSelector} from "react-redux";

function CalculatePrice() {
    const dispatch = useDispatch()

    const data = useSelector((state) => state.services.data)
    const selectedYear = useSelector((state) => state.services.selectedYear)
    const totalPrice = useSelector((state) => state.services.totalPrice)
    const selectedServices = useSelector((state) => state.services.selectedServices)

    return (
        <>
            {totalPrice}
        </>
    )
}

export default CalculatePrice