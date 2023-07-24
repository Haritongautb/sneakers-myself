import { useContext } from "react";
import AppContext from "../../contexts/appContext";
import SneakerItem from "../sneakerItem";
import "./sneakersList.scss";

const SneakersList = ({ sneakers, cartSneakers, favoritedSneakers, searchValue }) => {
    const { isLoading, onHandleAddCart, onHandleAddFavorited } = useContext(AppContext);
    const renderSneakersCard = isLoading || sneakers.length <= 0 ? [...Array(8)].map((item, index) => <SneakerItem key={`skeleton_${index + 1}`} isLoading={true} />) :
        searchValue ?
            sneakers.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map(item => <SneakerItem
                    key={item.id}
                    isFavorited={favoritedSneakers.some(sneaker => Number(sneaker.id) === Number(item.id))}
                    isAdded={cartSneakers.some(sneaker => Number(sneaker.id) === Number(item.id))}
                    onHandleAddCart={onHandleAddCart}
                    onHandleAddFavorited={onHandleAddFavorited}
                    {...item}
                />) :
            sneakers.map(item => <SneakerItem
                key={item.id}
                isFavorited={favoritedSneakers.some(sneaker => Number(sneaker.id) === Number(item.id))}
                isAdded={cartSneakers.some(sneaker => Number(sneaker.id) === Number(item.id))}
                onHandleAddCart={onHandleAddCart}
                onHandleAddFavorited={onHandleAddFavorited}
                {...item}
            />)
    return (
        <section className="sneakers-cards">
            <div className="container">
                <ul className="sneakers-list">
                    {
                        renderSneakersCard
                    }
                </ul>
            </div>
        </section>
    )
}

export default SneakersList;