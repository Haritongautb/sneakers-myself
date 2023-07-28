import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppContext from '../../contexts/appContext';
import axios from 'axios';
import useSneakersRequests from '../../hooks/useSneakersRequests';
import Header from '../header';
import Drawer from '../drawer';
import Home from '../../pages/Home';
import Orders from '../../pages/orders/Orders';
import FavoritesSneakers from '../../pages/favoritesSneakers/FavoritesSneakers';
import './app.scss';

function App() {
    const [drawerIsOpened, setDrawerIsOpened] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [sneakers, setSneakers] = useState([]);
    const [cartSneakers, setCartSneakers] = useState([]);
    const [favoritedSneakers, setFavoritedSneakers] = useState([]);
    const [orders, setOrders] = useState([]);
    const { isLoading, request } = useSneakersRequests();
    useEffect(() => {
        (async () => {
            try {
                const [cartSneakersResponse, favoritedSneakersResponse, sneakersResponse, ordersResponse] = await request();

                setCartSneakers(cartSneakers => [...cartSneakers, ...cartSneakersResponse.data])
                setFavoritedSneakers(favoritedSneakers => [...favoritedSneakers, ...favoritedSneakersResponse.data])
                setSneakers(sneakers => [...sneakers, ...sneakersResponse.data]);
                setOrders(orders => [...orders, ...ordersResponse.data])
            } catch (error) {
                alert(error.message);
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

    const onHandleChangeSize = async (sneaker) => {
        try {
            if (cartSneakers.find(item => Number(item.id) === Number(sneaker.id))) {
                const result = await axios.put(`http://localhost:3001/cartSneakers/${sneaker.id}`, sneaker);
                console.log(result);
                if (result.statusText === "OK") {
                    return setCartSneakers(sneakers => sneakers.map(item => {
                        if (Number(item.id) === Number(sneaker.id)) {
                            return { ...item, size: sneaker.size }
                        }
                        return item;
                    }))
                }
            }
        } catch (error) {
            alert(error);
        }

        return;
    }

    const onHandleAddCart = async (sneaker) => {
        try {
            if (cartSneakers.find(item => Number(item.id) === Number(sneaker.id))) {
                const result = await axios.delete(`http://localhost:3001/cartSneakers/${sneaker.id}`);
                if (result.statusText === "OK") {
                    return setCartSneakers(sneakers => sneakers.filter(item => Number(item.id) !== Number(sneaker.id)))
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
                onHandleAddFavorited,
                onHandleChangeSize
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