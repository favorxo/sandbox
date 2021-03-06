const Nav = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        name=""
        id="navi-toggle"
        className="navigation__checkbox"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon"></span>
      </label>
      <div className="navigation__background"> </div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>01</span>About Natous
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>02</span>Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>03</span>Popular tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>04</span>Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>05</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
