import Header from  './Header.js'
import Main from "./Main";
import Footer from "./Footer";
import React from 'react';
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import PopupWithForm from "./PopupWithForm";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({})

    const handleCardClick = (selectedCard) => {
        setSelectedCard(selectedCard)
    }
    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(!isAddPlacePopupOpen);
    }
    function closeAllPopups() {
        setEditAvatarPopupOpen(false)
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setSelectedCard({})
    }
    return (
      <div className="page__body">
        <Header/>
        <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}/>
       <Footer/>
          <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
          />
          <AddPlacePopup isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          />
          <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
          <PopupWithForm name="delete-card" title="Вы уверены?" textButton={"Да"}/>
      </div>
  );
}

export default App;
