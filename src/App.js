import ServiceList from "./components/ServiceList";
import SelectedServices from "./components/SelectedServices";
import ListOfYears from "./components/ListOfYears";
import CalculatePrice from "./components/CalculatePrice";

function App() {
    return (
        <div className="App">
            <ServiceList/>
            <ListOfYears/>
            <SelectedServices/>
            <CalculatePrice/>
        </div>
    );
}

export default App;
