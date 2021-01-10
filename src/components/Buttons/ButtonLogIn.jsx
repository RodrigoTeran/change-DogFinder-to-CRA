// Modules
import React from "react";

// Routes
import { authGoogle, authFacebook } from "../../routes/index";
const ButtonLogIn = ({ click, name, color, children }) => {
  return (
    <div className="button-log-in" onClick={click}>
      <a
        href={`${name === "Google" ? authGoogle : authFacebook}`}
        title={`Iniciar Sesión con ${name}`}
        style={{ backgroundColor: color }}
      >
        <div className="row">
          <div
            className="col-3 d-flex align-items-center justify-content-center"
            style={{ marginLeft: "10px" }}
          >
            {children}
          </div>
          <div className="col-7" style={{ fontWeight: "bold" }}>
            {name === "Google" ? (
              <>
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
              </>
            ) : (
              <>
                <span
                  style={{
                    color: "#FFFFFF",
                  }}
                >
                  Facebook
                </span>
              </>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};
export default ButtonLogIn;
