import React from "react";

const MainSectionNotificacionesPage = ({ isManual }) => {
  return (
    <div className="main-section-notificaciones-page">
      {isManual ? (
        <div className="main-section-notificaciones-page-users">users</div>
      ) : (
        <div className="main-section-notificaciones-page-ia">IA</div>
      )}
    </div>
  );
};
export default MainSectionNotificacionesPage;
