import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppContext from '../../contexts/appContext';
import axios from 'axios';
import Header from '../header';
import Drawer from '../drawer';
import Home from '../../pages/Home';
import Orders from '../../pages/orders/Orders';
import FavoritesSneakers from '../../pages/favoritesSneakers/FavoritesSneakers';
import './app.scss';

function App() {
    const [drawerIsOpened, setDrawerIsOpened] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [sneakers, setSneakers] = useState([]);
    const [cartSneakers, setCartSneakers] = useState([]);
    const [favoritedSneakers, setFavoritedSneakers] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(isLoading => true);
                const [cartSneakersResponse, favoritedSneakersResponse, sneakersResponse, ordersResponse] = await Promise.all([
                    axios.get("http://localhost:3001/cartSneakers"),
                    axios.get("http://localhost:3001/favoritesSneakers"),
                    axios.get("http://localhost:3001/sneakers"),
                    axios.get("http://localhost:3001/orders")
                ])

                setCartSneakers(cartSneakers => [...cartSneakers, ...cartSneakersResponse.data])
                setFavoritedSneakers(favoritedSneakers => [...favoritedSneakers, ...favoritedSneakersResponse.data])
                setSneakers(sneakers => [...sneakers, ...sneakersResponse.data]);
                setOrders(orders => [...orders, ...ordersResponse.data])
                setIsLoading(isLoading => false);
            } catch (error) {
                throw error;
            }
        })();

    }, [])

    const onHandleOpenDrawer = () => {
        setDrawerIsOpened(drawerIsOpened => true);
    }

    const onHandleCloseDrawer = (event) => {
        if (event.target.classList.contains("drawer") || event.target.closest(".button-close-drawer") || event.target.closest(".button-total")) {
            setDrawerIsOpened(drawerIsOpened => false);
        }
    }


    const onHandleAddFavorited = async (sneaker) => {
        try {
            if (favoritedSneakers.find(item => Number(item.id) === Number(sneaker.id))) {
                const result = await axios.delete(`http://localhost:3001/favoritesSneakers/${sneaker.id}`);
                if (result.statusText === "OK") {
                    return setFavoritedSneakers(favoritedSneakers => favoritedSneakers.filter(item => Number(item.id) !== Number(sneaker.id)))
                }
            }
            const result = await axios.post("http://localhost:3001/favoritesSneakers", sneaker);
            if (result.statusText === "Created") {
                return setFavoritedSneakers(favoritedSneakers => [...favoritedSneakers, result.data])
            }
        } catch (error) {
            throw error;
        }
    }

    const onHandleAddCart = async (sneaker) => {

        try {
            if (sneaker.sizes) {
                if (cartSneakers.find(item => Number(item.id) === Number(sneaker.id))) {
                    const result = await axios.delete(`http://localhost:3001/cartSneakers/${sneaker.id}`);
                    if (result.statusText === "OK") {
                        return setCartSneakers(sneakers => sneakers.filter(item => Number(item.id) !== Number(sneaker.id)))
                    }
                }
            }
            const result = await axios.post("http://localhost:3001/cartSneakers", sneaker);
            if (result.statusText === "Created") {
                return setCartSneakers(sneakers => [...sneakers, result.data])
            }
        } catch (error) {
            throw error;
        }
    }
    return (
        <Router>
            <AppContext.Provider value={{
                cartSneakers,
                setCartSneakers,
                onHandleCloseDrawer,
                onHandleOpenDrawer,
                isLoading,
                onHandleAddCart,
                onHandleAddFavorited
            }}>
                <div className="wrapper">
                    <Header />
                    <Drawer
                        drawerIsOpened={drawerIsOpened}
                        onHandleCloseDrawer={onHandleCloseDrawer}
                        orders={orders}
                        setOrders={setOrders}
                    />
                    <div className="wrapper-inner">

                        <main className="main">
                            <Routes>
                                <Route exact path="/" element={<Home
                                    sneakers={sneakers}
                                    cartSneakers={cartSneakers}
                                    favoritedSneakers={favoritedSneakers}
                                    searchValue={searchValue}
                                    setSearchValue={setSearchValue} />} />
                                <Route exact path="/favorites" element={<FavoritesSneakers
                                    sneakers={sneakers}
                                    favoritedSneakers={favoritedSneakers}
                                    cartSneakers={cartSneakers}
                                />} />

                                <Route exact path="/orders" element={<Orders
                                    orders={orders}
                                />} />
                            </Routes>
                        </main>
                    </div>
                </div>
            </AppContext.Provider>
        </Router>
    );
}

export default App;