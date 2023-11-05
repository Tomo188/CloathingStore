import "./header-styles.scss"
import { Link } from "react-router-dom";
import { ReactComponent as Logo }  from "../../assets/crown.svg"
const Header=()=>{
    return(
        <div className="header">
            <h1><Logo /> Crown Clothing Shop</h1>
            <nav className="navigation_header">
               
                <Link to="/">
                    Home
                </Link>
                <Link to="/shop">
                    Shop
                </Link>
                <Link to="sign-in">
                    Sign In
                </Link>
            </nav>
        </div>
    )
}
export default Header;