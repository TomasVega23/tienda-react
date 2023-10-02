import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link className="navbar-brand link-light" as={"active"} to={"/"}>
    TecnoFamily
  </Link>
  )
}

export default Brand;