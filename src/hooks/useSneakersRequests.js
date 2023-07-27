import { useState } from "react";
import axios from "axios";
const useSneakersRequests = () => {
    const [isLoading, setIsLoading] = useState(false);
    const request = async (url, method, data = {}) => {
        try {
            setIsLoading(true);
            const result = await Promise.all([
                axios.get("http://localhost:3001/cartSneakers"),
                axios.get("http://localhost:3001/favoritesSneakers"),
                axios.get("http://localhost:3001/sneakers"),
                axios.get("http://localhost:3001/orders")
            ])
            setIsLoading(false);
            return result;
        } catch (error) {
            throw error;
        }
    }

    return {
        isLoading,
        setIsLoading,
        request
    }

}

export default useSneakersRequests;