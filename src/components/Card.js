function Card(props) {
  function handleClick() {
    props.onCardClick(props);
  }

  return (
    <li className="item">
      <button className="item__delete" type="button"></button>
      <img
        onClick={handleClick}
        className="item__image"
        src={props.link}
        alt={props.title}
      />
      <div className="item__container">
        <h2 className="item__title">{props.title}</h2>
        <div className="item__like">
          <button className=" item__like-button" type="button"></button>
          <span className="item__like-count">{props.likes}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
