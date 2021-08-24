import React from "react";

const Logo = ({ alwaysDown }) => {
  return (
    <div
      className={`google ${alwaysDown ? "down" : ""}`}
      onClick={() => {
        window.open(
          "https://cloud.google.com/apis?utm_source=google&utm_medium=cpc&utm_campaign=latam-MX-all-es-dr-SKWS-all-all-trial-p-dr-1009897-LUAC0015747&utm_content=text-ad-none-any-DEV_c-CRE_534662489238-ADGP_Hybrid%20%7C%20SKWS%20-%20PHR%20%7C%20Txt%20~%20API-Management_General-KWID_43700065166766011-kwd-152051905&utm_term=KW_api-ST_API&gclid=Cj0KCQjwsZKJBhC0ARIsAJ96n3VEjuW6RBRYvL2aTSeQvBb9noOBWC40oZjzghrNfCDSjWmXXCoeRiUaAiwSEALw_wcB&gclsrc=aw.ds"
        );
      }}
    >
      <div className="row">
        <div className="col-7" style={{ fontWeight: "bold" }}>
          <span
            style={{
              color: "#0069F6",
            }}
          >
            G
          </span>
          <span
            style={{
              color: "#EA4335",
            }}
          >
            o
          </span>
          <span
            style={{
              color: "#FBBC05",
            }}
          >
            o
          </span>
          <span
            style={{
              color: "#0069F6",
            }}
          >
            g
          </span>
          <span
            style={{
              color: "#34A853",
            }}
          >
            l
          </span>
          <span
            style={{
              color: "#EA4335",
            }}
          >
            e
          </span>
        </div>
      </div>
    </div>
  );
};
export default Logo;
