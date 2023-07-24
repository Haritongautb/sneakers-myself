import "./search.scss";

const Search = ({ searchValue, setSearchValue }) => {
    return (
        <section className="search">
            <div className="container">

                <div className="search__wrapper">
                    <h2 className="search__title">{searchValue ? `Все найденное: ${searchValue}` : "Все кроссовки"}</h2>

                    <form className="search__form" action="#">
                        <label className="search__label" htmlFor="search">
                            <img className="search__icon" width={15} height={15} src="/img/button-search.svg" alt="Search icon" />
                        </label>

                        <input className="search__form-input"
                            type="text" id="search"
                            placeholder="Поиск" value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)} />
                        {
                            searchValue ?
                                <button className="remove-button search__button" type="button" onClick={() => setSearchValue("")}>
                                    <img className="remove-button__img search__remove-icon" width={32} height={32} src="/img/button-remove.svg" alt="Remove icon" />
                                </button> :
                                null
                        }
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Search;