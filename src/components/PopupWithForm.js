function PopupWithForm({ title, name, textButton, isOpen, onClose, children }) {
  return (
    <section
      className={isOpen ? "popup popup_opened" : `popup popup_content_${name}`}
      aria-label={`popup popup_content_${name}`}
    >
      <div className={"popup__container"}>
        <button
          className={"popup__button-close"}
          type={"button"}
          onClick={onClose}
          aria-label="Закрыть"
        ></button>
        <h2 className={"popup__title"}>{title}</h2>
        <form action="#" className={"popup_form form"} name={name}>
          {children}
          <button className={"form__button-save"} type={"submit"}>
            {textButton || "Сохранить"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
