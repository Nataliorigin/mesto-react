import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={"edit-avatar"}
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="form__field">
        <input
          className="form__input form__input_name_linkAvatar"
          tabIndex="3"
          placeholder="Ссылка на картинку"
          type="url"
          name="avatar"
          required
        />
        <span className="avatar-error form__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
