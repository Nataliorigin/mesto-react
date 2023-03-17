import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useState, useContext, useEffect } from "react";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAbout = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  };
  return (
    <PopupWithForm
      name={"edit-profile"}
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onLoading={isLoading}
    >
      <label className="form__field">
        <input
          onChange={handleChangeName}
          value={name}
          className="form__input form__input_name_username"
          tabIndex="1"
          placeholder="Имя"
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="name-error form__input-error"></span>
      </label>
      <label className="form__field">
        <input
          onChange={handleChangeAbout}
          value={description}
          className="form__input form__input_name_activity"
          tabIndex="2"
          placeholder="О себе"
          type="text"
          name="about"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="about-error form__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
