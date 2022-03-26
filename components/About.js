const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You{`'`}re going fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            similique voluptatum voluptate accusantium minima, dolorum,
            inventore repudiandae corrupti quibusdam aliquid aspernatur nostrum
            earum consequatur, ipsum quo nam tempore maiores
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptas esse omnis iusto impedit, necessitatibus in laborum aut
            minima, nisi rem porro saepe labore eos ratione modi explicabo
          </p>
          <a href="#" className="btn-text">
            Learn More ➞
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="/img/nat-1-large.jpg"
              alt=""
              className="composition__photo composition__photo--p1"
            />
            <img
              src="/img/nat-2-large.jpg"
              alt=""
              className="composition__photo composition__photo--p2"
            />
            <img
              src="/img/nat-3-large.jpg"
              alt=""
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
