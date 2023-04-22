import ServiceList from "./ServiceList";
import ListOfYears from "./ListOfYears";
import SelectedServices from "./SelectedServices";
import CalculatePrice from "./CalculatePrice";
import Navbar from "../navbar/Navbar";
import "../../scss/client.scss"
function ClientView(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="row pt-3">
                    <div className="col-md-2 p-3 pt-1 filters">
                        <ListOfYears/>
                    </div>
                    <div className="col-md-10 p-3 pt-1 service-list">
                        <ServiceList/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientView