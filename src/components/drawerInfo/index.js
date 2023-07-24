import { useContext } from "react";
import AppContext from "../../contexts/appContext";
import "./drawerInfo.scss";

const DrawerInfo = ({ isOrderCompleted = false, title, subtitle, imgSrc, imgAlt }) => {
    const { onHandleCloseDrawer } = useContext(AppContext);
    let drawerInfoTitleClassName = "drawer-info__title";
    if (isOrderCompleted) {
        drawerInfoTitleClassName += " order-is-completed"
    }
    return (
        <div className="drawer-info">
            <div className="drawer-info__photo">
                <img className="drawer-info__img" src={imgSrc} alt={imgAlt} />
            </div>

            <div className="drawer-info__titles">
                <h3 className={drawerInfoTitleClassName}>{title}</h3>
                <div className="drawer-info__subtitle">{subtitle}</div>
            </div>

            <button className="button-total exit" type="button" onClick={onHandleCloseDrawer}>
                <span className="button-total__content">Вернуться назад</span>
                <div className="button-total__photo">
                    <img className="button-total__img-arrow" width={14} height={12} src="/img/arrow-left.svg"
                        alt="Arrow right" />
                </div>
            </button>
        </div>
    )
}

export default DrawerInfo;