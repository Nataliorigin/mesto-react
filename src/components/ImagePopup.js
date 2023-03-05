function ImagePopup({ card, onClose }) {
  return (
    <section
      className={
        card.link
          ? "popup popup_content_open-image popup_opened"
          : "popup popup_content_open-image"
      }
      aria-label={"popup_content_open-image"}
    >
      <div className="popup__img-container">
        <button
          className="popup__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <figure className="popup__figure-wrapper">
          <img className="popup__img" src={card.link} alt={card.title} />
          <figcaption className="popup__img-caption">{card.title}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
