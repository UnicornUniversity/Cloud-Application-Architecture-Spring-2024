import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Classes from "./components/classes/Classes";
import Reports from "./components/reports/Reports";
import Students from "./components/students/Students";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {path: "/", element: <Classes/>},
                {path: "/classes", element: <Classes/>},
                {path: "/students/:idClass", element: <Students/>},
                {path: "/students", element: <Students/>},
                {path: "/reports", element: <Reports/>},
            ]
        }
    ]
);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
