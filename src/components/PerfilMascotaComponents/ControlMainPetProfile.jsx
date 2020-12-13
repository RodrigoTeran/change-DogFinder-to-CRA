import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PetIsLostController from "./PetIsLostController";
import Calendar from "react-calendar";

import {
  updateFailureMessagesComponentAction,
  updateSuccessMessagesComponentAction
} from "../../store/reducers/layout/actions";

import {
  updatePetProfileAction
} from "../../store/reducers/user/actions";

import {
  editPetProfileDogFoundedWhenIsLost
} from "../../routes/indexDogFounded";

import {
  getPetProfile
} from "../../store/reducers/user/selector";

const ControlMainPetProfile = ({
  isMobile,
  petProfile,
  updateSuccessMessagesComponent,
  updateFailureMessagesComponent,
  updatePetProfile
}) => {
  const [heightCalendar, setHeightCalendar] = useState(0);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [firstAnimCalendar, setFirstAnimCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setHeightCalendar(parseInt(document.querySelector(".calendar").clientHeight) + (window.innerWidth < 1121 ? (75) : (45)));
    if (heightCalendar > 0) {
      setFirstAnimCalendar(true);
    };
  }, [heightCalendar]);
  const editWhenIsLost = newDate => {
    setIsLoading(true);
    const body = {
      newDate
    };
    fetch(`${editPetProfileDogFoundedWhenIsLost}/${petProfile.name}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "token": localStorage.getItem("token"),
        "isPetFromCompany": petProfile.isPetFromCompany ? (true) : (false)
      },
      body: JSON.stringify(body)
    }).then(res => {
      return res.json();
    }).then(data => {
      setIsLoading(false);
      if (data.status === "true") {
        updateSuccessMessagesComponent({
          state: true,
          title: "Se cambió la fecha",
          description: "Se cambió la fecha con éxito"
        });
        updatePetProfile({
          selectedState: "whenIsLost",
          state: newDate
        });
      } else if (data.status === "noPosible") {
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "La fecha no es posible. Debe de ser una fecha actual o pasada."
        });
      } else {
        updateFailureMessagesComponent({
          state: true,
          title: "Error",
          description: "No se pudo cambiar la fecha"
        });
      };
    });
  }
  return (
    <>
      {petProfile.isPetProfile ? (
        <div className="control-pet-profile">
          <PetIsLostController isMobile={isMobile}></PetIsLostController>
        </div>
      ) : (
          <>
            <div className={`calendar-title div-calendar-pet-founded`}>
              <span>¿Cuándo encontraste a esta mascota?</span>
              <div
                title={`Cambiar fecha`}
                style={{
                  display: "grid",
                  placeContent: "center"
                }}
                onClick={() => {
                  setIsCalendarOpen(!isCalendarOpen)
                }}>
                <svg className="pet-profile-page-header-h1-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" /></svg>
              </div>
            </div>
            <div className={`calendar-container div-calendar-pet-founded-2 ${firstAnimCalendar ? ("yes") : ("")} `}
              style={{
                height: isCalendarOpen ? (`${heightCalendar - parseInt(window.innerWidth <= 1120 ? (50) : (25))}px`) : ("0px"),
                marginTop: isCalendarOpen ? (`${window.innerWidth <= 1120 ? ("20px") : ("0px")}`) : ("0px"),
                marginBottom: isCalendarOpen ? ("20px") : ("0px"),
              }}>
              <div className={`calendar-animation ${isCalendarOpen ? ("open") : ("")}`}>
                <Calendar
                  className={`calendar`}
                  onChange={(date) => {
                    setHeightCalendar(parseInt(document.querySelector(".calendar").clientHeight) + (window.innerWidth < 1121 ? (75) : (45)));
                    if (!isLoading) {
                      editWhenIsLost(date);
                    };
                  }}
                  onViewChange={() => {
                    setHeightCalendar(parseInt(document.querySelector(".calendar").clientHeight) + (window.innerWidth < 1121 ? (75) : (45)))
                  }}
                  onActiveStartDateChange={() => {
                    setHeightCalendar(parseInt(document.querySelector(".calendar").clientHeight) + (window.innerWidth < 1121 ? (75) : (45)))
                  }}
                  value={new Date(petProfile.whenIsLost)}
                ></Calendar>
              </div>
            </div>
            {isLoading ? (
              <div className="loader-block" style={{
                paddingTop: "20px"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" /></svg>
              </div>
            ) : (<></>)}
          </>
        )
      }
    </>
  );
};

// Clases de REDUX
const mapStateToProps = (state) => {
  return {
    petProfile: getPetProfile(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSuccessMessagesComponent: (data) => { dispatch(updateSuccessMessagesComponentAction(data)) },
    updateFailureMessagesComponent: (data) => { dispatch(updateFailureMessagesComponentAction(data)) },
    updatePetProfile: (data) => { dispatch(updatePetProfileAction(data)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlMainPetProfile);