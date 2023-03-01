import Header from  './Header.js'
import Main from "./Main";
import Footer from "./Footer";
function App() {
  return (
      <div className="page__body">
        <Header/>
        <Main/>
       <Footer/>
        <section
            className="popup popup_content_edit-profile"
            aria-label="popup_content_edit-profile"
        >
          <div className="popup__container">
            <button className="popup__button-close" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form
                className="popup__form form"
                action="src/index#"
                id="form1"
                name="profile-edit"
                noValidate
            >
              <label className="form__field">
                <input
                    className="form__input form__input_name_username"
                    tabIndex="1"
                    placeholder="Имя"
                    type="text"
                    name="name"
                    value=""
                    minLength="2"
                    maxLength="40"
                    required
                />
                  <span className="name-error form__input-error"></span>
              </label>
              <label className="form__field">
                <input
                    className="form__input form__input_name_activity"
                    tabIndex="2"
                    placeholder="О себе"
                    type="text"
                    name="about"
                    value=""
                    minLength="2"
                    maxLength="200"
                    required
                />
                  <span className="about-error form__input-error"></span>
              </label>
              <button className="form__button-save" type="submit">Сохранить</button>
            </form>
          </div>
        </section>
        <section
            className="popup popup_content_add-item"
            aria-label="popup_content_add-item"
        >
          <div className="popup__container">
            <button className="popup__button-close" type="button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form
                className="popup__form form"
                action="src/index#"
                id="form2"
                name="add-card"
                noValidate
            >
              <label className="form__field">
                <input
                    className="form__input form__input_name_title"
                    tabIndex="1"
                    placeholder="Название"
                    type="text"
                    name="name"
                    value=""
                    minLength="2"
                    maxLength="30"
                    required
                />
                  <span className="name-error form__input-error"></span>
              </label>
              <label className="form__field">
                <input
                    className="form__input form__input_name_link"
                    tabIndex="2"
                    placeholder="Ссылка на картинку"
                    type="url"
                    name="link"
                    value=""
                    required
                />
                  <span className="link-error form__input-error"></span>
              </label>
              <button className="form__button-save" type="submit" disabled>
                Создать
              </button>
            </form>
          </div>
        </section>
        <section
            className="popup popup_content_open-image"
            aria-label="popup_content_open-image"
        >
          <div className="popup__img-container">
            <button type="button" className="popup__button-close"></button>
            <figure className="popup__figure-wrapper">
              <img src="src/index#" alt="Описание изображения" className="popup__img"/>
                <figcaption className="popup__img-caption"></figcaption>
            </figure>
          </div>
        </section>
        <section
            className="popup popup_content_delete-card"
            aria-label="popup_content_delete-card"
        >
          <div className="popup__container">
            <button className="popup__button-close" type="button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form form"
                  action="src/index#"
                  id="form3"
                  name="delete-card"
                  noValidate>
              <button className="form__button-save" type="submit">Да</button>
            </form>
          </div>
        </section>
        <section
            className="popup popup_content_edit-avatar"
            aria-label="popup_content_edit-avatar"
        >
          <div className="popup__container">
            <button className="popup__button-close" type="button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form form"
                  action="src/index#"
                  id="form4"
                  name="edit-avatar"
                  noValidate>
              <label className="form__field">
                <input
                    className="form__input form__input_name_linkAvatar"
                    tabIndex="3"
                    placeholder="Ссылка на картинку"
                    type="url"
                    name="avatar"
                    value=""
                    required
                />
                  <span className="avatar-error form__input-error"></span>
              </label>
              <button className="form__button-save" type="submit">Сохранить</button>
            </form>
          </div>
        </section>
        <template id="item-template">
          <li className="item">
            <button className="item__delete" type="button"></button>
            <img className="item__image" src="src/index#" alt="описание изображения"/>
              <div className="item__container">
                <h2 className="item__title"></h2>
                <div className="item__like">
                  <button className=" item__like-button" type="button"></button>
                  <span className="item__like-count">0</span></div>
              </div>
          </li>
        </template>
      </div>
  );
}

export default App;
