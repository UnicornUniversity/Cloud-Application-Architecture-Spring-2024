import './App.css';
import CustomerData from "./components/CustomerData";

function App() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">
                        <CustomerData/>
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
