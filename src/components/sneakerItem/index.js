import { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import "./sneakerItem.scss";

const SneakerItem = ({
    id,
    name,
    price,
    src,
    isLoading = false,
    isFavorited = false,
    isAdded = false,
    onHandleAddCart,
    onHandleAddFavorited,
    onHandleChangeSize
}) => {
    const [size, setSize] = useState("X");

    useEffect(() => {
        onHandleChangeSize({ id, name, price, src, size });
    }, [size])
    const onHandleInput = (event) => {
        setSize(size => event.target.value);
        // setState работает асинхронно, поэтому сначала будет вызван методы не относящиеся к React, и только потом сработает setState()
        // поэтому я не пишу         onHandleChangeSize({ id, name, price, src, size });
        // onHandleChangeSize({ id, name, price, src, size: event.target.value });
    }

    const addToCart = () => {
        onHandleAddCart({ id, name, price, src, size })
    }

    const addToFavorited = () => {
        onHandleAddFavorited({ id, name, price, src })
    }

    return (
        <>
            {
                isLoading ?
                    <ContentLoader
                        speed={2}
                        width={155}
                        height={265}
                        viewBox="0 0 155 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb">
                        <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                        <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                        <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                        <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                    </ContentLoader> :
                    <li className="sneakers-card">
                        <div className="sneakers-card__wrapper" >
                            <div className="sneakers-cart__top-block">

                                <div className="sneakers-card__photo-sneaker">
                                    {
                                        onHandleAddFavorited && <div className="sneakers-card__photo-like-icon"
                                            onClick={addToFavorited}>
                                            <img width={32} height={32} className="sneakers-card_img-like" src={isFavorited ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt={isFavorited ? "Like heart icon" : "Unliked heart icon"} />
                                        </div>
                                    }
                                    <img className="sneakers-card__img-sneaker" src={src} alt={name} />
                                </div>

                                <select className="sneakers-card__select-size" onChange={onHandleInput} value={size}>
                                    <option value="X">X</option>
                                    <option value="M">M</option>
                                    <option value="S">S</option>
                                    <option value="XL">XL</option>
                                </select>
                            </div>

                            <div className="sneakers-card__name">{name}</div>

                            <div className="sneakers-card__bottom-block">

                                <div className="sneakers-card__bottom-left-block">
                                    <div className="sneakers-card__price">Цена: </div>
                                    <div className="sneakers-card__price-value">{price} руб.</div>
                                </div>

                                {
                                    onHandleAddCart && <div className="sneakers-card__button-add"
                                        onClick={addToCart}>
                                        <button className="sneakers-card__button" type="button">
                                            <img width={32} height={32} className="sneakers-card__img-plus" src={isAdded ? "/img/button-checked.svg" : "/img/button-plus.svg"} alt={isAdded ? "Checked icon" : "Button add"} />
                                        </button>
                                    </div>
                                }

                            </div>
                        </div>
                    </li>
            }
        </>
    )
}

export default SneakerItem;