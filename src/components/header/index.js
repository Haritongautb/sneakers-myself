import { useContext } from "react";
import AppContext from "../../contexts/appContext";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import "./header.scss";

const Header = () => {
    const { totalValue } = useCart();
    const { onHandleOpenDrawer } = useContext(AppContext);

    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar__left">
                        <Link to="/">
                            <div className="navbar__photo-logo">
                                <img className="navbar__img-logo" src="/img/logo.png" alt="Sneakers Logo" />
                            </div>
                        </Link>

                        <div className="navbar__logo-titles">
                            <h1 className="navbar__logo-title">react sneakers</h1>
                            <div className="navbar__logo-subtitle">Магазин лучших кроссовок</div>
                        </div>
                    </div>

                    <ul className="navbar__right">

                        <li className="navbar__cart-block" onClick={onHandleOpenDrawer}>
                            <div className="navbar__photo-cart">
                                <img width={18} height={18} className="navbar-icon navbar__cart-icon" src="/img/cart.svg" alt="Cart icon" />
                            </div>
                            <div className="navbar__cart-total-value">{totalValue} руб.</div>
                        </li>

                        <Link to="/favorites">
                            <li className="navbar__cart-favorites-icon">
                                <img width={21} height={19} className="navbar-icon navbar__like-icon" src="/img/favorite.svg" alt="Favorites icon" />
                            </li>
                        </Link>

                        <Link to="/orders">
                            <li className="navbar__cart-favorites-icon">
                                <img width={20} height={20} className="navbar-icon navbar__user-icon" src="/img/user.svg" alt="User icon" />
                            </li>
                        </Link>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;