import ServiceList from "./ServiceList";
import ListOfYears from "./ListOfYears";
import SelectedServices from "./SelectedServices";
import CalculatePrice from "./CalculatePrice";
import Navbar from "../navbar/Navbar";

function ClientView(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <ListOfYears/>
                    </div>
                    <div className="col-md-10">
                        <ServiceList/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientView