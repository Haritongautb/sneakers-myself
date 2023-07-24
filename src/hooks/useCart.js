import { useContext } from "react";
import AppContext from "../contexts/appContext";

const useCart = () => {
    const { cartSneakers, setCartSneakers } = useContext(AppContext);
    const totalValue = Math.floor(cartSneakers.reduce((next, current) => next + Number(current.price), 0));
    const totalTax = Math.floor(totalValue / 100 * 5);
    return {
        cartSneakers,
        totalValue,
        totalTax,
        setCartSneakers
    }
}

export default useCart;
