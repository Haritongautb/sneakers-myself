import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import uniqid from "uniqid";
import useCart from "../../hooks/useCart";
import DrawerInfo from "../drawerInfo";
import DrawerSneakerCard from "../drawerSneakerCard";
import "./drawer.scss";

const body = document.body;
const deletePause = (timer) => new Promise(resolve => setTimeout(resolve, timer));

const Drawer = ({ setOrders, onHandleCloseDrawer, drawerIsOpened, onHandleAddCart }) => {
    const [orderID, setOrderID] = useState(null);
    const [isOrderCompleted, setIsOrderCompleted] = useState(false);
    const { cartSneakers, setCartSneakers, totalValue, totalTax } = useCart();

    useEffect(() => {
        if (drawerIsOpened) {
            body.classList = "drawer-is-opened";
        } else {
            body.classList = "";
        }

        if (isOrderCompleted) {
            const timerID = setTimeout(() => {
                setIsOrderCompleted(isOrderCompleted => false);
            }, 4000)

            return () => {
                clearTimeout(timerID);
            }
        }
    }, [drawerIsOpened, isOrderCompleted]);


    const payOrder = async (event) => {
        event.stopPropagation();
        try {
            const orderID = uniqid();
            const clientsBillData = {
                clientsSneakers: cartSneakers,
                clientsBillID: orderID,
                purchaseAmount: totalValue,
                taxAmount: totalTax
            }
            const result = await axios.post("http://localhost:3001/orders", clientsBillData);
            if (result.statusText === "Created") {
                setOrderID(orderID)
                setIsOrderCompleted(isOrderCompleted => true);
                setCartSneakers(cartSneakers => []);
                setOrders(orders => [...orders, result.data]);
            }

            for (let i = 0; i < cartSneakers.length; i++) {
                await axios.delete(`http://localhost:3001/cartSneakers/${cartSneakers[i].id}`);
                await deletePause(1000);
            }
        } catch (error) {
            throw error;
        }
    }

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

                        {
                            cartSneakers.length > 0 ?
                                <>
                                    <div className="drawer__content-middle">
                                        <ul className="drawer-sneakers-list">
                                            {
                                                cartSneakers.map((item => <DrawerSneakerCard
                                                    key={item.id}
                                                    {...item} />))
                                            }
                                        </ul>
                                    </div>

                                    <div className="drawer__content-bottom">
                                        <div className="drawer-total">
                                            <div className="drawer-total__title">Итого: </div>
                                            <span className="drawer-total__border-dashed"></span>
                                            <div className="drawer-total__value">{totalValue} руб.</div>
                                        </div>

                                        <div className="drawer-total">
                                            <div className="drawer-total__title">Налог 5%: </div>
                                            <span className="drawer-total__border-dashed"></span>
                                            <div className="drawer-total__value">{totalTax} руб.</div>
                                        </div>

                                        <button className="button-total" type="button" onClick={payOrder}>
                                            <span className="button-total__content">Оформить заказ</span>
                                            <div className="button-total__photo">
                                                <img className="button-total__img-arrow no-left" width={14} height={12} src="/img/arrow-left.svg"
                                                    alt="Arrow right" />
                                            </div>
                                        </button>
                                    </div>
                                </> :

                                <DrawerInfo
                                    isOrderCompleted={isOrderCompleted}
                                    title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
                                    subtitle={isOrderCompleted ? `Ваш заказ #${orderID} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                                    imgSrc={isOrderCompleted ? "/img/complete-order.jpg" : "/img/cart-empty.jpg"}
                                    imgAlt={isOrderCompleted ? "Order is completed image" : "Empty cart image"} />

                        }
                    </div>
                </div>
            </div>,
            body
        )
    }

    return null;

}

export default Drawer;