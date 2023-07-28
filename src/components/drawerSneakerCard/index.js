import { useContext } from "react";
import AppContext from "../../contexts/appContext";
import "./drawerSneakerCard.scss";

const DrawerSneakerCard = ({ id, name, price, src, size }) => {
    console.log(size);
    const { onHandleAddCart } = useContext(AppContext);
    return (
        <li className="drawer-sneaker-item">
            <div className="drawer-sneaker-item__content">
                <div className="drawer-sneaker-item__photo">
                    <img className="drawer-sneaker-item__img" src={src} alt={name} />
                </div>

                <div className="drawer-sneaker-item__titles">
                    <div className="drawer-sneaker-item__name">
                        {name}
                    </div>
                    <div className="drawer-sneaker-item__size">
                        <span className="drawer-sneaker-item__size-span">Размер -</span>
                        {size}
                    </div>
                    <div className="drawer-sneaker-item__price">{price} руб.</div>
                </div>

                <button className="remove-button" type="button" onClick={() => onHandleAddCart({ id, name, price, src })}>
                    <img className="remove-button__img" width={32} height={32} src="/img/button-remove.svg"
                        alt="Close icon" />
                </button>
            </div>
        </li>
    )
}

export default DrawerSneakerCard;