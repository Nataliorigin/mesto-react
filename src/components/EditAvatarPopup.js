import PopupWithForm from "./PopupWithForm";
import { useEffect, useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const refInputLink = useRef();

  useEffect(() => {
    refInputLink.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: refInputLink.current.value,
    });
  }

  return (
    <PopupWithForm
      name={"edit-avatar"}
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onLoading={isLoading}
    >
      <label className="form__field">
        <input
          ref={refInputLink}
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
