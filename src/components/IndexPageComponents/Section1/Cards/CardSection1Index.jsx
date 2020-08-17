// MODULES
import { connect } from "react-redux";
import { getAnimations } from "../../../../store/reducers/indexPage/selector";

const CardSection1Index = ({
  animations,
  title,
  id,
  description,
  children
}) => {
  return (
    <div className={`col-lg-4 col-md-6 col-xs-12 card-section-1-index-col ${animations[`#${id}`] ? ("animationCard-section-1-index") : ("")}`} id={`${id}`}>
      <div className="card-section-1-index">
        <div className="text-center">
          <header className="px-1">
            {children}
            <h3 style={{
              fontSize: "1.15rem",
              fontWeight: "bold"
            }}
            >
              {title}
            </h3>
          </header>
          <section className="description-card-section-1-index px-2">
            {description}
          </section>
        </div>
      </div>
    </div>
  );
};
// Las animaciones de REDUX
const mapStateToProps = (state) => {
  return {
    animations: getAnimations(state),
  };
};
export default connect(mapStateToProps)(CardSection1Index);
