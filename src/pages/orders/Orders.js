import { useContext } from "react";
import { Helmet } from "react-helmet";
import AppContext from "../../contexts/appContext";
import PageInfo from "../../components/pageInfo";
import SneakerItem from "../../components/sneakerItem";
import "./orders.scss";
const Orders = ({ orders }) => {
    const { isLoading } = useContext(AppContext);

    let ordersWrapperClassName = "orders__wrapper";

    if (!orders) {
        ordersWrapperClassName += " has-no-orders"
    }
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="User sneakers order page"
                />
                <title>Sneakers order page</title>
            </Helmet>
            <section className="orders">
                <div className="container">
                    <div className={ordersWrapperClassName}>
                        {
                            isLoading ? "Loading contents..." :
                                orders.length > 0 ?
                                    <div className="orders-list">
                                        {
                                            orders.map(item =>
                                                <div key={item.clientsBillID} className="orders-list__block" >
                                                    <h3 className="orders-list__title">Order
                                                        <span className="orders-list__bill-id"> #{item.clientsBillID}</span>
                                                    </h3>
                                                    <ul className="orders-list__items-list">
                                                        {
                                                            item.clientsSneakers.map(sneaker => <SneakerItem
                                                                key={sneaker.id}
                                                                name={sneaker.name}
                                                                price={sneaker.price}
                                                                src={sneaker.src}
                                                            />)
                                                        }
                                                    </ul>

                                                    <div className="orders-list__prices">
                                                        <div className="orders-list__amount">
                                                            <div className="orders-list__amount-name">Order amount</div>
                                                            <div className="orders-list__amount-numbers">
                                                                {item.purchaseAmount} $
                                                            </div>
                                                        </div>
                                                        <div className="orders-list__tax">
                                                            <div className="orders-list__amount-name">Tax amount</div>
                                                            <div className="orders-list__amount-numbers">
                                                                {item.taxAmount} $
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div> :
                                    <PageInfo
                                        imageSrc="/img/sad-face.jpg"
                                        imageAlt="Sad face image"
                                        title="у вас нет заказов"
                                        subtitle="Оформите хотя бы один заказ" />
                        }
                    </div>
                </div>
            </section >
        </>
    )
}

export default Orders;