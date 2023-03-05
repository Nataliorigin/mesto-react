import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name={"edit-profile"}
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      textButton={"Сохранить"}
    >
      <label className="form__field">
        <input
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
