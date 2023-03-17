import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, onClose, onDeleteCard, isLoading, card }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onDeleteCard(card);
  };
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="delete-card"
      title="Вы уверены?"
      textButton={"Да"}
      textLoading={"Удаление..."}
      onLoading={isLoading}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default DeleteCardPopup;
