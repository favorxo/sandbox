const Stories = () => {
  return (
    <section className="section-stories ">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="img/video.webm" type="video/webm" />
          <source src="img/video.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="img/nat-8.jpg"
              alt="person on the tour"
              className="story__img"
            />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              cum quos sed assumenda, laborum repellendus temporibus minus saepe
              recusandae enim?Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Natus cum quos sed assumenda, laborum
              repellendus temporibus minus saepe recusandae enim?
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="img/nat-9.jpg"
              alt="person on the tour"
              className="story__img"
            />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              cum quos sed assumenda, laborum repellendus temporibus minus saepe
              recusandae enim?Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Natus cum quos sed assumenda, laborum
              repellendus temporibus minus saepe recusandae enim?
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">
          Read all stories ➞
        </a>
      </div>
    </section>
  );
};

export default Stories;
