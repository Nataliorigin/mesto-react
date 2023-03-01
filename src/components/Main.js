import avatar from "../images/avatar.png";

function Main() {

const handleEditProfileClick = () => {
    document.querySelector('.popup_content_edit-profile').classList.add("popup_opened");
}
const handleEditAvatarClick = () => {
        document.querySelector('.popup_content_edit-avatar').classList.add("popup_opened");
    }
    const handleAddPlaceClick = () => {
        document.querySelector('.popup_content_add-item').classList.add("popup_opened");
    }

    return (        <main className="container">
        <section className="profile">
            <div className="profile__avatar-container" onClick= {handleEditAvatarClick}>
                <img
                    className="profile__avatar"
                    src={avatar}
                    alt="Аватар"
                />
            </div>
            <div className="profile__info">
                <div className="profile__title-container">
                    <h1 className="profile__title">Имя</h1>
                    <button  onClick= {handleEditProfileClick} className="profile__edit-button" type="button"></button>
                </div>
                <p className="profile__subtitle">О себе</p>
            </div>
            <button onClick= {handleAddPlaceClick} className="profile__add-button" type="button"></button>
        </section>
        <section className="cards" aria-label="Изображения">
            <ul className="cards__container"></ul>
        </section>
    </main>)
}

export default Main;