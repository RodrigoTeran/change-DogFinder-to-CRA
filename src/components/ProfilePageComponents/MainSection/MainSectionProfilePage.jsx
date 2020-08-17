// Components
import CardMainSectionProfile from "./Cards/CardMainSectionProfile";
const MainSectionProfilePage = () => {
  return (
    <div className="main-section-profile-page">
      <div className="main-section-profile-page-title">
        PERFILES
      </div>
      <div className="row main-section-profile-page-cards-section">
        <CardMainSectionProfile></CardMainSectionProfile>
      </div>
    </div>
  );
};
export default MainSectionProfilePage;