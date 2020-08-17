// MODULES
import { connect } from "react-redux";
import { getAnimations } from "../../../../store/reducers/indexPage/selector";
import { getWebp } from "../../../../store/reducers/user/selector";

// Components
import ButtonWhite from "../../../Buttons/ButtonWhite";
const CardSection2Section1Index = ({
  animations,
  webp,
  id,
  number,
  children,
  title,
  description,
  button
}) => {
  return (
    <div id={`${id}`} className={`col-lg-4 col-md-6 col-xs-12 text-center card-section2-section1 ${animations[`#${id}`] ? ("animationCard-section-2-section-1-index") : ("")}`}>
      <div className={`container card-section2-section1-image-${number}${webp ? ("") : ("-png")}`}>
        <header>
          <div className="icon-card-section2-section1-container">
            {children}
          </div>
          <h3 className="title-card-section2-section1">
            {title}
          </h3>
        </header>
        <section className="section-card-section2-section1">
          {description}
        </section>
        <footer>
          <ButtonWhite text={`${button}`} width="250px" height="60px">
            <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z" /></svg>
          </ButtonWhite>
        </footer>
      </div>
    </div>
  );
};
// Las animaciones de REDUX
const mapStateToProps = (state) => {
  return {
    animations: getAnimations(state),
    webp: getWebp(state)
  };
};
export default connect(mapStateToProps)(CardSection2Section1Index);
