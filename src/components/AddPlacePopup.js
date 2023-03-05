import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={"add-card"}
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      textButton={"Создать"}
    >
      <label className="form__field">
        <input
          className="form__input form__input_name_title"
          tabIndex="1"
          placeholder="Название"
          type="text"
          name="name"
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
          required
        />
        <span className="link-error form__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
