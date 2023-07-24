import { Helmet } from "react-helmet";
import Search from "../components/search";
import SneakersList from "../components/sneakersList";

const Home = ({
    sneakers,
    cartSneakers,
    favoritedSneakers,
    searchValue,
    setSearchValue
}) => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Sneakers main page"
                />
                <title>Sneakers main page</title>
            </Helmet>
            <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue} />
            <SneakersList
                sneakers={sneakers}
                cartSneakers={cartSneakers}
                favoritedSneakers={favoritedSneakers}
                searchValue={searchValue}
            />
        </>

    )
}

export default Home;