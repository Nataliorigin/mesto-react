import avatar from "../images/avatar.png";
import api from "../utils/api"
import React from "react";
import Card from "./Card";

function Main({onAddPlaceClick, onEditProfileClick, onEditAvatarClick, onCardClick}) {
    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState(avatar)
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        Promise.all([api.getInfoUser(), api.getCards()])
            .then(([resUserInfo, resCards]) => {
                setUserName(resUserInfo.name)
                setUserDescription(resUserInfo.about)
                setUserAvatar(resUserInfo.avatar)
                setCards(resCards)
            })
            .catch((error) => console.log(error))
    }, [])
    return (        <main className="container">
        <section className="profile">
            <div className="profile__avatar-container" onClick= {onEditAvatarClick}>
                <img
                    className="profile__avatar"
                    src={userAvatar}
                    alt="Аватар"
                />
            </div>
            <div className="profile__info">
                <div className="profile__title-container">
                    <h1 className="profile__title">{userName}</h1>
                    <button  onClick={onEditProfileClick} className="profile__edit-button" type="button"></button>
                </div>
                <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button onClick= {onAddPlaceClick} className="profile__add-button" type="button"></button>
        </section>
        <section className="cards" aria-label="Изображения">
            <ul className="cards__container">
                {cards.map((card) => (
                    <Card
                        title={card.name}
                        likes={card.likes.length}
                        link={card.link}
                        key={card._id}
                        onCardClick={onCardClick}
                    />
                ))}
            </ul>
        </section>
    </main>)
}

export default Main;