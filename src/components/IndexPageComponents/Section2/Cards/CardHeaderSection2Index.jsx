// MODULES
import { connect } from "react-redux";
import { getAnimations } from "../../../../store/reducers/indexPage/selector";
// Modules
import React from "react";

import { getWebp } from "../../../../store/reducers/user/selector";

const CardHeaderSection2Index = ({
  animations,
  webp,
  id,
  title,
  text
}) => {
  return (
    <div id={`${id}`} className={`col-lg-4 col-md-6 col-sm-10 mt-4 cardHeaderSection2Index ${animations[`#${id}`] ? ("animationCard-header-section-2-index") : ("")}`}>
      {webp ?  (
        /*WEBP*/
        <img src="/Images/image-header-index-page-7.webp" alt="Sección de la App"></img>
      ) : (
          /*PNG*/
          <img src="/Images/image-header-index-page-7.png" alt="Sección de la App"></img>
        )}
      <section className="container-header-section-2-index-info">
        <div className="container-header-section-2-index-title">
          {title}
          </div>
          {text}
        </section>
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
export default connect(mapStateToProps)(CardHeaderSection2Index);
