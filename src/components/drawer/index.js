import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom"
import "./drawer.scss";

const Drawer = ({ onHandleCloseDrawer, drawerIsOpened }) => {

    const body = useMemo(() => document.body, [])

    useEffect(() => {
        if (drawerIsOpened) {
            body.classList = "drawer-is-opened";
        } else {
            body.classList = "";
        }
    }, [drawerIsOpened]);


    if (drawerIsOpened) {
        return createPortal(
            <div className="drawer" onClick={onHandleCloseDrawer}>
                <div className="drawer__window">
                    <div className="drawer__content">

                        <div className="drawer__content-top">
                            <h3 className="drawer__title">Корзина</h3>

                            <button className="remove-button button-close-drawer" type="button">
                                <img className="remove-button__img" width={32} height={32} src="/img/button-remove.svg" alt="Close icon" />
                            </button>
                        </div>

                        <div className="drawer__content-middle">
                            <ul className="drawer-sneakers-list">
                                <li className="drawer-sneaker-item">
                                    <div className="drawer-sneaker-item__content">
                                        <div className="drawer-sneaker-item__photo">
                                            <img className="drawer-sneaker-item__img" src="/img/sneakers/2.jpg" alt="Sneaker" />
                                        </div>

                                        <div className="drawer-sneaker-item__titles">
                                            <div className="drawer-sneaker-item__name">
                                                Мужские Кроссовки Nike Air Max 270
                                            </div>
                                            <div className="drawer-sneaker-item__price">12 999 руб.</div>
                                        </div>

                                        <button className="remove-button" type="button">
                                            <img className="remove-button__img" width={32} height={32} src="/img/button-remove.svg"
                                                alt="Close icon" />
                                        </button>
                                    </div>
                                </li>

                                <li className="drawer-sneaker-item">
                                    <div className="drawer-sneaker-item__content">
                                        <div className="drawer-sneaker-item__photo">
                                            <img className="drawer-sneaker-item__img" src="/img/sneakers/4.jpg" alt="Sneaker" />
                                        </div>

                                        <div className="drawer-sneaker-item__titles">
                                            <div className="drawer-sneaker-item__name">
                                                Мужские Кроссовки Nike Air Max 270
                                            </div>
                                            <div className="drawer-sneaker-item__price">12 999 руб.</div>
                                        </div>

                                        <button className="remove-button" type="button">
                                            <img className="remove-button__img" width={32} height={32} src="/img/button-remove.svg"
                                                alt="Close icon" />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="drawer__content-bottom">
                            <div className="drawer-total">
                                <div className="drawer-total__title">Итого: </div>
                                <span className="drawer-total__border-dashed"></span>
                                <div className="drawer-total__value">21 498 руб.</div>
                            </div>

                            <div className="drawer-total">
                                <div className="drawer-total__title">Налог 5%: </div>
                                <span className="drawer-total__border-dashed"></span>
                                <div className="drawer-total__value">1074 руб.</div>
                            </div>

                            <button className="button-total" type="button">
                                <span className="button-total__content">Оформить заказ</span>
                                <div className="button-total__photo">
                                    <img className="button-total__img-arrow no-left" width={14} height={12} src="/img/arrow-left.svg"
                                        alt="Arrow right" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
            body
        )
    }

    return null;

}

export default Drawer;