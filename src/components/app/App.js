import { useState } from 'react';
import Drawer from '../drawer';
import './app.scss';

function App() {
  const [drawerIsOpened, setDrawerIsOpened] = useState(false);

  const onHandleOpenDrawer = () => {
    setDrawerIsOpened(drawerIsOpened => true);
  }

  const onHandleCloseDrawer = (event) => {
    if (event.target.classList.contains("drawer") || event.target.closest(".button-close-drawer")) {
      setDrawerIsOpened(drawerIsOpened => false);
    }
  }

  return (
    <div className="wrapper">
      <Drawer onHandleCloseDrawer={onHandleCloseDrawer} drawerIsOpened={drawerIsOpened} />
      <div className="wrapper-inner">
        <header className="header">
          <div className="container">
            <nav className="navbar">
              <div className="navbar__left">
                <div className="navbar__photo-logo">
                  <img className="navbar__img-logo" src="/img/logo.png" alt="Sneakers Logo" />
                </div>

                <div className="navbar__logo-titles">
                  <h1 className="navbar__logo-title">react sneakers</h1>
                  <div className="navbar__logo-subtitle">Магазин лучших кроссовок</div>
                </div>
              </div>

              <ul className="navbar__right">

                <li className="navbar__cart-block" onClick={onHandleOpenDrawer}>
                  <div className="navbar__photo-cart">
                    <img width={18} height={18} className="navbar-icon navbar__cart-icon" src="/img/cart.svg" alt="Cart icon" />
                  </div>
                  <div className="navbar__cart-total-value">1205 руб.</div>
                </li>

                <li className="navbar__cart-favorites-icon">
                  <img width={21} height={19} className="navbar-icon navbar__like-icon" src="/img/favorite.svg" alt="Favorites icon" />
                </li>

                <li className="navbar__cart-favorites-icon">
                  <img width={20} height={20} className="navbar-icon navbar__user-icon" src="/img/user.svg" alt="User icon" />
                </li>

              </ul>
            </nav>
          </div>
        </header>

        <main className="main">
          <section className="search">
            <div className="container">

              <div className="search__wrapper">
                <h2 className="search__title">Все кроссовки</h2>

                <form className="search__form" action="#">
                  <label className="search__label" htmlFor="search">
                    <img className="search__icon" width={15} height={15} src="/img/button-search.svg" alt="Search icon" />
                  </label>

                  <input className="search__form-input" type="text" id="search" placeholder="Поиск" />
                  <button className="remove-button search__button" type="button">
                    <img className="remove-button__img search__remove-icon" width={32} height={32} src="/img/button-remove.svg" alt="Remove icon" />
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section className="sneakers-cards">
            <div className="container">
              <ul className="sneakers-list">

                <li className="sneakers-card">
                  <div className="sneakers-card__wrapper">
                    <div className="sneakers-card__photo-sneaker">
                      <div className="sneakers-card__photo-like-icon">
                        <img width={32} height={32} className="sneakers-card_img-like" src="/img/heart-unliked.svg" alt="Like heaert icon" />
                      </div>
                      <img className="sneakers-card__img-sneaker" src="/img/sneakers/1.jpg" alt="Sneakers image" />
                    </div>

                    <div className="sneakers-card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>

                    <div className="sneakers-card__bottom-block">
                      <div className="sneakers-card__bottom-left-block">
                        <div className="sneakers-card__price">Цена: </div>
                        <div className="sneakers-card__price-value">12 999 руб.</div>
                      </div>

                      <div className="sneakers-card__button-add">
                        <button className="sneakers-card__button" type="button">
                          <img width={32} height={32} className="sneakers-card__img-plus" src="/img/button-plus.svg" alt="Button add" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="sneakers-card">
                  <div className="sneakers-card__wrapper">
                    <div className="sneakers-card__photo-sneaker">
                      <div className="sneakers-card__photo-like-icon">
                        <img width={32} height={32} className="sneakers-card_img-like" src="/img/heart-unliked.svg" alt="Like heaert icon" />
                      </div>
                      <img className="sneakers-card__img-sneaker" src="/img/sneakers/2.jpg" alt="Sneakers image" />
                    </div>

                    <div className="sneakers-card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>

                    <div className="sneakers-card__bottom-block">
                      <div className="sneakers-card__bottom-left-block">
                        <div className="sneakers-card__price">Цена: </div>
                        <div className="sneakers-card__price-value">12 999 руб.</div>
                      </div>

                      <div className="sneakers-card__button-add">
                        <button className="sneakers-card__button" type="button">
                          <img width={32} height={32} className="sneakers-card__img-plus" src="/img/button-plus.svg" alt="Button add" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="sneakers-card">
                  <div className="sneakers-card__wrapper">
                    <div className="sneakers-card__photo-sneaker">
                      <div className="sneakers-card__photo-like-icon">
                        <img width={32} height={32} className="sneakers-card_img-like" src="/img/heart-unliked.svg" alt="Like heaert icon" />
                      </div>
                      <img className="sneakers-card__img-sneaker" src="/img/sneakers/2.jpg" alt="Sneakers image" />
                    </div>

                    <div className="sneakers-card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>

                    <div className="sneakers-card__bottom-block">
                      <div className="sneakers-card__bottom-left-block">
                        <div className="sneakers-card__price">Цена: </div>
                        <div className="sneakers-card__price-value">12 999 руб.</div>
                      </div>

                      <div className="sneakers-card__button-add">
                        <button className="sneakers-card__button" type="button">
                          <img width={32} height={32} className="sneakers-card__img-plus" src="/img/button-plus.svg" alt="Button add" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="sneakers-card">
                  <div className="sneakers-card__wrapper">
                    <div className="sneakers-card__photo-sneaker">
                      <div className="sneakers-card__photo-like-icon">
                        <img width={32} height={32} className="sneakers-card_img-like" src="/img/heart-unliked.svg" alt="Like heaert icon" />
                      </div>
                      <img className="sneakers-card__img-sneaker" src="/img/sneakers/2.jpg" alt="Sneakers image" />
                    </div>

                    <div className="sneakers-card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>

                    <div className="sneakers-card__bottom-block">
                      <div className="sneakers-card__bottom-left-block">
                        <div className="sneakers-card__price">Цена: </div>
                        <div className="sneakers-card__price-value">12 999 руб.</div>
                      </div>

                      <div className="sneakers-card__button-add">
                        <button className="sneakers-card__button" type="button">
                          <img width={32} height={32} className="sneakers-card__img-plus" src="/img/button-plus.svg" alt="Button add" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="sneakers-card">
                  <div className="sneakers-card__wrapper">
                    <div className="sneakers-card__photo-sneaker">
                      <div className="sneakers-card__photo-like-icon">
                        <img width={32} height={32} className="sneakers-card_img-like" src="/img/heart-unliked.svg" alt="Like heaert icon" />
                      </div>
                      <img className="sneakers-card__img-sneaker" src="/img/sneakers/2.jpg" alt="Sneakers image" />
                    </div>

                    <div className="sneakers-card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>

                    <div className="sneakers-card__bottom-block">
                      <div className="sneakers-card__bottom-left-block">
                        <div className="sneakers-card__price">Цена: </div>
                        <div className="sneakers-card__price-value">12 999 руб.</div>
                      </div>

                      <div className="sneakers-card__button-add">
                        <button className="sneakers-card__button" type="button">
                          <img width={32} height={32} className="sneakers-card__img-plus" src="/img/button-plus.svg" alt="Button add" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="sneakers-card">
                  <div className="sneakers-card__wrapper">
                    <div className="sneakers-card__photo-sneaker">
                      <div className="sneakers-card__photo-like-icon">
                        <img width={32} height={32} className="sneakers-card_img-like" src="/img/heart-unliked.svg" alt="Like heaert icon" />
                      </div>
                      <img className="sneakers-card__img-sneaker" src="/img/sneakers/2.jpg" alt="Sneakers image" />
                    </div>

                    <div className="sneakers-card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>

                    <div className="sneakers-card__bottom-block">
                      <div className="sneakers-card__bottom-left-block">
                        <div className="sneakers-card__price">Цена: </div>
                        <div className="sneakers-card__price-value">12 999 руб.</div>
                      </div>

                      <div className="sneakers-card__button-add">
                        <button className="sneakers-card__button" type="button">
                          <img width={32} height={32} className="sneakers-card__img-plus" src="/img/button-plus.svg" alt="Button add" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="sneakers-card">
                  <div className="sneakers-card__wrapper">
                    <div className="sneakers-card__photo-sneaker">
                      <div className="sneakers-card__photo-like-icon">
                        <img width={32} height={32} className="sneakers-card_img-like" src="/img/heart-unliked.svg" alt="Like heaert icon" />
                      </div>
                      <img className="sneakers-card__img-sneaker" src="/img/sneakers/2.jpg" alt="Sneakers image" />
                    </div>

                    <div className="sneakers-card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>

                    <div className="sneakers-card__bottom-block">
                      <div className="sneakers-card__bottom-left-block">
                        <div className="sneakers-card__price">Цена: </div>
                        <div className="sneakers-card__price-value">12 999 руб.</div>
                      </div>

                      <div className="sneakers-card__button-add">
                        <button className="sneakers-card__button" type="button">
                          <img width={32} height={32} className="sneakers-card__img-plus" src="/img/button-plus.svg" alt="Button add" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="sneakers-card">
                  <div className="sneakers-card__wrapper">
                    <div className="sneakers-card__photo-sneaker">
                      <div className="sneakers-card__photo-like-icon">
                        <img width={32} height={32} className="sneakers-card_img-like" src="/img/heart-unliked.svg" alt="Like heaert icon" />
                      </div>
                      <img className="sneakers-card__img-sneaker" src="/img/sneakers/2.jpg" alt="Sneakers image" />
                    </div>

                    <div className="sneakers-card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>

                    <div className="sneakers-card__bottom-block">
                      <div className="sneakers-card__bottom-left-block">
                        <div className="sneakers-card__price">Цена: </div>
                        <div className="sneakers-card__price-value">12 999 руб.</div>
                      </div>

                      <div className="sneakers-card__button-add">
                        <button className="sneakers-card__button" type="button">
                          <img width={32} height={32} className="sneakers-card__img-plus" src="/img/button-plus.svg" alt="Button add" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="sneakers-card">
                  <div className="sneakers-card__wrapper">
                    <div className="sneakers-card__photo-sneaker">
                      <div className="sneakers-card__photo-like-icon">
                        <img width={32} height={32} className="sneakers-card_img-like" src="/img/heart-unliked.svg" alt="Like heaert icon" />
                      </div>
                      <img className="sneakers-card__img-sneaker" src="/img/sneakers/2.jpg" alt="Sneakers image" />
                    </div>

                    <div className="sneakers-card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>

                    <div className="sneakers-card__bottom-block">
                      <div className="sneakers-card__bottom-left-block">
                        <div className="sneakers-card__price">Цена: </div>
                        <div className="sneakers-card__price-value">12 999 руб.</div>
                      </div>

                      <div className="sneakers-card__button-add">
                        <button className="sneakers-card__button" type="button">
                          <img width={32} height={32} className="sneakers-card__img-plus" src="/img/button-plus.svg" alt="Button add" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="sneakers-card">
                  <div className="sneakers-card__wrapper">
                    <div className="sneakers-card__photo-sneaker">
                      <div className="sneakers-card__photo-like-icon">
                        <img width={32} height={32} className="sneakers-card_img-like" src="/img/heart-unliked.svg" alt="Like heaert icon" />
                      </div>
                      <img className="sneakers-card__img-sneaker" src="/img/sneakers/2.jpg" alt="Sneakers image" />
                    </div>

                    <div className="sneakers-card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>

                    <div className="sneakers-card__bottom-block">
                      <div className="sneakers-card__bottom-left-block">
                        <div className="sneakers-card__price">Цена: </div>
                        <div className="sneakers-card__price-value">12 999 руб.</div>
                      </div>

                      <div className="sneakers-card__button-add">
                        <button className="sneakers-card__button" type="button">
                          <img width={32} height={32} className="sneakers-card__img-plus" src="/img/button-plus.svg" alt="Button add" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="sneakers-card">
                  <div className="sneakers-card__wrapper">
                    <div className="sneakers-card__photo-sneaker">
                      <div className="sneakers-card__photo-like-icon">
                        <img width={32} height={32} className="sneakers-card_img-like" src="/img/heart-unliked.svg" alt="Like heaert icon" />
                      </div>
                      <img className="sneakers-card__img-sneaker" src="/img/sneakers/2.jpg" alt="Sneakers image" />
                    </div>

                    <div className="sneakers-card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>

                    <div className="sneakers-card__bottom-block">
                      <div className="sneakers-card__bottom-left-block">
                        <div className="sneakers-card__price">Цена: </div>
                        <div className="sneakers-card__price-value">12 999 руб.</div>
                      </div>

                      <div className="sneakers-card__button-add">
                        <button className="sneakers-card__button" type="button">
                          <img width={32} height={32} className="sneakers-card__img-plus" src="/img/button-plus.svg" alt="Button add" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
