import { useContext } from "react";
import AppContext from "../../contexts/appContext";
import { Helmet } from "react-helmet";
import PageInfo from "../../components/pageInfo";
import SneakerItem from "../../components/sneakerItem";
import "./favoritesSneakers.scss";

const FavoritesSneakers = ({ cartSneakers, favoritedSneakers }) => {
    const { isLoading, onHandleAddCart, onHandleAddFavorited, onHandleChangeSize } = useContext(AppContext);
    let favoritesSneakersWrapperClassName = "favorites-sneakers__wrapper";

    if (!favoritedSneakers.length) {
        favoritesSneakersWrapperClassName += " has-no-favorites-sneakers";
    }
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Sneakers favorites page"
                />
                <title>User favorites sneakers page </title>
            </Helmet>
            <section className="favorites-sneakers">
                <div className="container">
                    <div className={favoritesSneakersWrapperClassName}>
                        {

                            isLoading ? "Loading content...." :
                                favoritedSneakers.length > 0 ?
                                    <ul className="favorites-list">
                                        {
                                            favoritedSneakers.map(item => <SneakerItem
                                                key={item.id}
                                                isFavorited={true}
                                                isAdded={cartSneakers.some(sneaker => Number(sneaker.id) === Number(item.id))}
                                                onHandleAddCart={onHandleAddCart}
                                                onHandleAddFavorited={onHandleAddFavorited}
                                                onHandleChangeSize={onHandleChangeSize}
                                                selectedSize={cartSneakers.filter(sneaker => Number(sneaker.id) === Number(item.id))}
                                                {...item} />)
                                        }
                                    </ul> :
                                    <PageInfo
                                        imageSrc="/img/cry-face.jpg"
                                        imageAlt="/img/Cry face image"
                                        title="Закладок нет :("
                                        subtitle="Вы ничего не добавляли в закладки"
                                    />
                        }
                    </div>
                </div>
            </section>
        </>

    )
}

export default FavoritesSneakers;