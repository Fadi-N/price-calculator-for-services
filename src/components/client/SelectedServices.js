import {useSelector} from "react-redux";

function SelectedServices() {
    const selectedServices = useSelector((state) => state.services.selectedServices)
    return(
        <div>
            {selectedServices.map((service, index) => (
                <h2 key={index}>{service}</h2>
            ))}
        </div>
    )
}
export default SelectedServices