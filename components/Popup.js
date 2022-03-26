const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="img/nat-8.jpg" alt="" className="popup__img" />
          <img src="img/nat-9.jpg" alt="" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-medium">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important! Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            repellendus, facere maxime consequuntur eaque magni illo vero dolore
            quam voluptates placeat doloremque modi a esse praesentium dolor,
            eius culpa quibusdam. Ut tempore amet illo provident quam tenetur
            soluta deserunt exercitationem magnam. Sequi, molestias quo.
            Adipisci, rerum sed? Facere hic debitis, ut modi corporis fugit
            animi quam, harum magnam, natus rem. Corporis voluptas praesentium
            neque, accusantium quis blanditiis explicabo quia, nemo qui
            cupiditate quisquam dolores minus amet aspernatur numquam quod,
            consectetur earum ut cum distinctio sint alias quasi. Rem pariatur
            consequuntur minus aut modi omnis corrupti fuga dolor repudiandae,
            fugiat cumque!
          </p>
          <a href="#" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
