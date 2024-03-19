import {Link, Outlet} from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My School</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/classes" className="nav-link active">Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/students" className="nav-link active">Students</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/reports" className="nav-link active">Reports</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}