function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="item">
      <button className="item__delete" type="button"></button>
      <img
        onClick={handleClick}
        className="item__image"
        src={card.link}
        alt={card.title}
      />
      <div className="item__container">
        <h2 className="item__title">{card.title}</h2>
        <div className="item__like">
          <button className=" item__like-button" type="button"></button>
          <span className="item__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
