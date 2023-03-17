import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const refInputName = useRef();
  const refInputLink = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace({
      name: refInputName.current.value,
      link: refInputLink.current.value,
    });
  };
  return (
    <PopupWithForm
      name={"add-card"}
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      textButton={"Создать"}
      textLoading={"Создание..."}
      onSubmit={handleSubmit}
      onLoading={isLoading}
    >
      <label className="form__field">
        <input
          ref={refInputName}
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
          ref={refInputLink}
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
