// COMPONENTS
import CardHeaderSection2Index from "./Cards/CardHeaderSection2Index";
// Modules
import React from "react";

const HeaderSection2Index = () => {
  return (
    <div className="container text-center container-header-section-2-index mbComponentsIndex">
      <svg className="icon-header-section-1-index" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z" /></svg>
      <h3 style={{
        fontSize: "2rem",
        fontWeight: "bold"
      }}>
        ¿CÓMO AYUDAMOS A ENCONTRAR A CIENTOS DE MASCOTAS EXTRAVIADAS?
        </h3>
      <div className="row justify-content-center">
        <CardHeaderSection2Index id="card-index-section-2-1"></CardHeaderSection2Index>
        <CardHeaderSection2Index id="card-index-section-2-2"></CardHeaderSection2Index>
        <CardHeaderSection2Index id="card-index-section-2-3"></CardHeaderSection2Index>
      </div>
    </div>
  );
};
export default HeaderSection2Index;