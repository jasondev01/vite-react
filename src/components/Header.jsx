import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header" id="header ">
            <nav className="bg-dark-subtle">
                <div className="container-lg mx-auto py-3 d-flex justify-content-between align-items-center">
                    {/* <img src="" alt="" /> */}
                    <div>
                        <h1 className="logo fs-1 fw-bold text-info">
                            Rainmanga
                        </h1>
                    </div>
                    <ul className="d-flex m-0 gap-4 align-items-center">
                        <li className="">
                            <Link to="/" className="text-decoration-none text-black fw-semibold fs-6">
                                Home
                            </Link>
                        </li>
                        <li className="">
                            <Link to="#" className="text-decoration-none text-black fw-semibold fs-6">
                                Genres
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/register" className="text-decoration-none text-black fw-semibold fs-6">
                                Register
                            </Link>
                        </li>
                        <li className="">
                            <Link to="/login" className="text-decoration-none text-white fw-semibold fs-6 btn btn-primary rounded-pill ">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </header>
    )
}

export default Header
