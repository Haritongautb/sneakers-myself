import { Link } from "react-router-dom";
import "./pageInfo.scss";

const PageInfo = ({
    imageSrc = "/img/sad-face.jpg",
    imageAlt = "Sad face image",
    title = "Ничего нет",
    subtitle = "Добавьте что-нибудь или купите хотя одну пару обуви" }) => {
    return (
        <div className="page-info">
            <div className="page-info__photo">
                <img className="page-info__img" src={imageSrc} alt={imageAlt} />
            </div>

            <div className="page-info__titles">
                <h3 className="page-info__title">{title}</h3>
                <div className="page-info__subtitle">{subtitle}</div>
            </div>

            <Link to="/">
                <button className="button-total exit" type="button">
                    <span className="button-total__content">Вернуться назад</span>
                    <div className="button-total__photo">
                        <img className="button-total__img-arrow" width={14} height={12} src="/img/arrow-left.svg"
                            alt="Arrow right" />
                    </div>
                </button>
            </Link>

        </div>
    )
}

export default PageInfo;