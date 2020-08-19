// MODULES
import { connect } from "react-redux";
import { getAnimations } from "../../../../store/reducers/indexPage/selector";
// Modules
import React from "react";

const CardIndexHeader = ({
  children,
  id,
  title,
  animations
}) => {
  return (
    <div id={`${id}`} className={`col-lg-2 col-md-3 col-sm-5 col-xs-12 text-center Card-index-header-col ${animations[`#${id}`] ? ("animationIndex") : ("")}`}>
      {/* Si el cliente ya ve este componente, se quita la animación */}
      <div className="Card-index-header-body">
        <header className="pt-4">
          {children}
        </header>
        <section className="Card-index-header-section">
          {title}
        </section>
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
export default connect(mapStateToProps)(CardIndexHeader);