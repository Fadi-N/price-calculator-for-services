import Navbar from "../navbar/Navbar";
import AvailableYears from "./years/AvailableYears";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setNewYear} from "../../reducers/mainServicesSlice";
import AddNewYear from "./years/AddNewYear";
import AddNewService from "./services/AddNewService";
import AvailableServices from "./services/AvailableServices";

function AdminView() {

    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <AddNewYear/>
                    <AvailableYears/>
                </div>
                <div className="row">
                    <AddNewService/>
                    <AvailableServices/>
                </div>
            </div>
        </>
    )
}

export default AdminView