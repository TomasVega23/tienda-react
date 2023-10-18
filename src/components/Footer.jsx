import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <Link to={"/"} className="me-3"><img src={facebook} alt={"Facebook"} width={"24"} /></Link>
                    <Link to={"/"} className="me-3"><img src={twitter} alt={"Twitter"} width={"24"} /></Link>
                    <Link to={"/"} className="me-3"><img src={instagram} alt={"Instagram"} width={"24"} /></Link>
                    <Link to={"/"}><img src={youtube} alt={"YouTube"} width={"24"} /></Link>
                </div>
                <div className="col text-end">
                <p> © TecnoFamily 2023</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-8">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Política de Privacidad</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Defensa del Consumidor</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Protección de datos personales</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default Footer