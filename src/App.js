import ServiceList from "./components/ServiceList";
import SelectedServices from "./components/SelectedServices";
import ListOfYears from "./components/ListOfYears";

function App() {
    return (
        <div className="App">
            <ServiceList/>
            <ListOfYears/>
            <SelectedServices/>
        </div>
    );
}

export default App;
