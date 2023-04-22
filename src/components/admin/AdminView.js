import Navbar from "../navbar/Navbar";
import AvailableYears from "./years/AvailableYears";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setNewYear} from "../../reducers/mainServicesSlice";
import AddNewYear from "./years/AddNewYear";
import AddNewService from "./services/AddNewService";
import AvailableServices from "./services/AvailableServices";

import "../../scss/admin.scss"
function AdminView() {

    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row pb-3 my-3 year-edit-container">
                    <AddNewYear/>
                    <AvailableYears/>
                </div>
                <div className="row service-edit-container">
                    <AddNewService/>
                    <AvailableServices/>
                </div>
            </div>
        </>
    )
}

export default AdminView