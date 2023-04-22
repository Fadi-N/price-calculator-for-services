import ServiceList from "./components/client/ServiceList";
import SelectedServices from "./components/client/SelectedServices";
import ListOfYears from "./components/client/ListOfYears";
import CalculatePrice from "./components/client/CalculatePrice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientView from "./components/client/ClientView";
import AdminView from "./components/admin/AdminView";
import "./scss/bootstrap.scss"
import "./scss/main.scss"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ClientView/>}/>
                <Route path="/admin" element={<AdminView/>}/>
            </Routes>
        </Router>
    );
}

export default App;
