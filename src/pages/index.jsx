// Modulos
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import React from "react";
import { connect } from "react-redux";

// Selectores
import { getResponsiveMenuBarBody } from "../store/reducers/layout/selector";

// Configuraciones
import { APP_NAME } from "../utils/config";

// Acciones
import {
	updateTopMenuBarActivatedAction,
} from "../store/reducers/layout/actions";
import {
	updateBackgroundPagesImagePositionClassAction,
	updateIndexAnimationsAction
} from "../store/reducers/indexPage/actions";

// ------------------------Componentes-----------------------
// Seccion 1
import IndexHeader from "../components/IndexPageComponents/Headers/IndexHeader";
import HeaderSection1Index from "../components/IndexPageComponents/Section1/HeaderSection1Index";
import BackgroundImage from "../components/IndexPageComponents/BackgroundImage";

// Seccion 2
import HeaderSection2Index from "../components/IndexPageComponents/Section2/HeaderSection2Index";
import Section2IndexSection1 from "../components/IndexPageComponents/Section2/Section2Index_section1";

// Seccion 3
import HeaderSection3Index from "../components/IndexPageComponents/Section3/HeaderSection3Index";

// El Footer
import FooterLayout from "../components/FooterLayout";

const Index = ({
	responsiveMenuBarBodyClasses,
	updateTopMenuBarActivated,
	updateBackgroundPagesImagePositionClass,
	updateIndexAnimations,
}) => {
	// -----------------------Estado-----------------------
	/*
		El estado se constituye de las animaciones y de los "tops" de las secciones del Index,
		las animaciones cuentan con su ID, su status, para que ya no active la función de aparecer con su animación,
		y su det, que es cuanto se mueve en eje de las Y, para que siempre se active cuando el usuario vea exactamente la mitad de ese componente,
		y asi pueda ver la animación
	*/
	const componentesConAnimacion = {
		"#card-index-header-1": {
			status: false,
			det: 1.5
		},
		"#card-index-header-2": {
			status: false,
			det: 1.5
		},
		"#card-index-header-3": {
			status: false,
			det: 1.5
		},
		"#card-index-header-4": {
			status: false,
			det: 1.5
		},
		"#card-index-header-5": {
			status: false,
			det: 1.5
		},
		"#card-index-section-1-1": {
			status: false,
			det: .1
		},
		"#card-index-section-1-2": {
			status: false,
			det: .1
		},
		"#card-index-section-1-3": {
			status: false,
			det: .1
		},
		"#card-index-section-1-4": {
			status: false,
			det: .1
		},
		"#card-index-section-1-5": {
			status: false,
			det: .1
		},
		"#card-index-section-1-6": {
			status: false,
			det: .1
		},
		"#card-index-section-2-1": {
			status: false,
			det: .5
		},
		"#card-index-section-2-2": {
			status: false,
			det: .5
		},
		"#card-index-section-2-3": {
			status: false,
			det: .5
		},
		"#card-index-section-2-section-1-1": {
			status: false,
			det: .1
		},
		"#card-index-section-2-section-1-2": {
			status: false,
			det: .1
		},
		"#card-index-section-2-section-1-3": {
			status: false,
			det: .1
		},
		"#card-header-section-3-index-1": {
			status: false,
			det: .001
		},
		"#card-header-section-3-index-2": {
			status: false,
			det: .001
		},
		"#card-header-section-3-index-3": {
			status: false,
			det: .001
		},
	};
	const topsDeLasSecciones = {
		topL1: 1000, // para que no se vea al principio en la carga
		topL2: 2300, // para que no se vea al principio en la carga
		topL3: 5300 // para que no se vea al principio en la carga
	};

	const [animaciones, setAnimaciones] = useState(componentesConAnimacion);
	const [tops, setTops] = useState(topsDeLasSecciones);
	const [firstScroll, setFirstScroll] = useState(false);

	// -----------------------Hooks-----------------------
	useEffect(() => {
		if (!firstScroll) {
			window.scroll({ top: 1, left: 0, behavior: 'smooth' }); // Movemos el scroll tantito para que el TopMenuBar se actualize
			setFirstScroll(true);
		};
		// poner estado... 
		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	});

	// -----------------------Funciones-----------------------
	const handleResize = () => {
		checkIfBodyContactWithMenuBar(); // Checar si el Menu choca con alguna sección del Index
		checkIfClientIsInWhatSection();  // Checar si ya estamos en la segunda sección
	};
	const handleScroll = () => {
		checkIfBodyContactWithMenuBar(); // Cada vez que el usuario interactua con la ventana
		handleWindowAnimations(); // Hace animaciones de entrada de los componentes
		checkIfClientIsInWhatSection();  // Checar si ya estamos en la segunda sección
	};
	const getTop = (component) => {	// Función que calcula la distancia que existe de un componente y hasta arriba de la página
		return (parseInt(document.querySelector(component).getBoundingClientRect().top + document.scrollingElement.scrollTop));
	};
	const checkIfBodyContactWithMenuBar = () => {  // Cada vez que el usuario interactua con la ventana
		// Posicionarlo correctamente
		setTops({	// Acomodar los tops al cambiar ventana
			topL1: window.innerHeight,
			topL2: window.innerHeight * 2.3,
			topL3: window.innerHeight * 3.6,
		});
		var clientPosition = parseInt(document.querySelector(".Top-menu-bar").clientHeight) + document.scrollingElement.scrollTop;
		// ---------------------------------------Sección 1---------------------------------------
		var endLayout_body_container = getTop(".index-page-body-container") + parseInt(document.querySelector(".index-page-body-container").clientHeight);
		if (clientPosition >= getTop(".index-page-body-container")) { // esta en la sección 1
			if (document.scrollingElement.scrollTop <= endLayout_body_container) {  // Hasta donde termina la sección 1
				// Si esta abierto el responsive menu bar body
				checkIfResponsiveMenuBarIsOpen();
			} else { // Ya se pasó la sección 1
				// ---------------------------------------Segunda Sección---------------------------------------
				var endLayout_body_container_2 = getTop(".index-page-body-container-2") + parseInt(document.querySelector(".index-page-body-container-2").clientHeight);
				if (clientPosition >= getTop(".index-page-body-container-2")) {  // esta en la sección 2
					if (document.scrollingElement.scrollTop <= endLayout_body_container_2) {  // Hasta donde termina la sección 2
						// Si esta abierto el responsive menu bar body
						checkIfResponsiveMenuBarIsOpen();
					} else {  // Ya se pasó la sección 2
						// ---------------------------------------Tercera Sección---------------------------------------
						if (clientPosition >= getTop(".index-page-body-container-3")) {
							// Si esta abierto el responsive menu bar body
							checkIfResponsiveMenuBarIsOpen();
						} else {
							updateTopMenuBarActivated(false); //es porque esta en una imagen sección 3
						};
					};
				} else {
					updateTopMenuBarActivated(false); // es porque esta en una imagen sección 2
				};
			};
		} else {
			updateTopMenuBarActivated(false); // es porque esta en una imagen sección 1
		};
	};
	const checkIfResponsiveMenuBarIsOpen = () => {
		if (responsiveMenuBarBodyClasses.open) { // Si esta abierto el responsive menu bar body
			updateTopMenuBarActivated(false); // Quita el Top
		} else {
			updateTopMenuBarActivated(true); // Si esta cerrado el responsive menu bar body, entonces pone el Top
		};
	};
	const checkIfClientIsInWhatSection = () => {
		var endLayout_body_container = getTop(".index-page-body-container") + parseInt(document.querySelector(".index-page-body-container").clientHeight);
		var endLayout_body_container_2 = getTop(".index-page-body-container-2") + parseInt(document.querySelector(".index-page-body-container-2").clientHeight);
		if (endLayout_body_container_2 <= document.scrollingElement.scrollTop + window.innerHeight) { // Está en la tercera sección
			updateBackgroundPagesImagePositionClass({ // Está en la tercera sección
				state_1: false,
				state_2: false,
				state_3: true,
			});
			document.querySelector(".text-back-h1").innerHTML = "ANTES TENÍAS QUE TENER SUERTE PARA QUE LA <span class='span-text-back-h1'>PERSONA CORRECTA</span> VIERA LA PUBLICACIÓN CORRECTA";
		}
		else if (endLayout_body_container <= document.scrollingElement.scrollTop + window.innerHeight) {
			updateBackgroundPagesImagePositionClass({ // Está en la segunda sección
				state_1: false,
				state_2: true,
				state_3: false,
			});
			document.querySelector(".text-back-h1").innerHTML = "CADA AÑO SE PIERDEN MÁS DE <span class='span-text-back-h1'>3.8 MILLONES</span> DE MASCOTAS EN MÉXICO";
		} else {
			updateBackgroundPagesImagePositionClass({ // Está en la primera sección
				state_1: true,
				state_2: false,
				state_3: false,
			});
			document.querySelector(".text-back-h1").innerHTML = "CUANDO UN PERRO SE PIERDE, TIENE UN 80% DE POSIBILIDAD DE <span class='span-text-back-h1'>NUNCA</span> VOLVER A CASA...";
		};
	};
	const handleWindowAnimations = () => {
		for (const component in animaciones) { // Checa las animaciones
			if (document.scrollingElement.scrollTop + parseInt(document.querySelector(component).clientHeight) * animaciones[component].det >=
				getDistanceComponentToDoAnimation(component)) { // Es porque ya aparece en el lugar correcto
				if (!animaciones[component].status) { // Si no ha pasado esto otra vez
					updateIndexAnimations({  // Actualiza Redux
						state: false,
						animName: component
					});
					setAnimaciones({	// Actualiza el propio estado de Index
						...animaciones,
						[component]: {
							status: true,
							det: animaciones[component].det
						}
					});
				};
			};
		};
	};
	const getDistanceComponentToDoAnimation = (component) => {
		// Manda cual es el top necesario para las animaciones de Index
		return (getTop(component) - window.innerHeight + parseInt(document.querySelector(component).clientHeight) / 2);
	};

	// -----------------------Estado para usarlo en el jsx-----------------------
	const { topL1, topL2, topL3 } = tops; // Para poder usarlos de manera mas sencilla
	return (
		<>
			<Helmet>
				<title>{APP_NAME}</title>
				<meta name="description" content={`${APP_NAME} es una aplicación que ayuda a rescatar tu perro en caso de extravío.`} />
			</Helmet>
			<BackgroundImage /> {/* El Background de Index */}
			{/* Primera Seccion */}
			<div className="index-page-body-container" style={{ backgroundColor: "rgba(25, 25, 25, 1)", "top": `${topL1}px` }}>
				<header><IndexHeader /></header>
				<section style={{ paddingBottom: "30px" }} className="section-1-index"><HeaderSection1Index /></section>
			</div>
			{/* Segunda Seccion */}
			<div className="index-page-body-container-2" style={{ backgroundColor: "rgba(25, 25, 25, 1)", "top": `${topL2}px` }}>
				<header><HeaderSection2Index /></header>
				<section><Section2IndexSection1 /></section>
			</div>
			{/* Tercera Seccion */}
			<div className="index-page-body-container-3" style={{ backgroundColor: "rgba(25, 25, 25, 1)", "top": `${topL3}px` }}>
				<header><HeaderSection3Index /></header>
				<FooterLayout styleForm="without-absolute"></FooterLayout>
			</div>
		</>
	);
};

// Clases de REDUX
const mapStateToProps = (state) => {
	return {
		responsiveMenuBarBodyClasses: getResponsiveMenuBarBody(state)
	};
};

// Acciones de REDUX
const mapDispatchToProps = (dispatch) => {
	return {
		updateTopMenuBarActivated: (data) => { dispatch(updateTopMenuBarActivatedAction(data)) },
		updateBackgroundPagesImagePositionClass: (data) => { dispatch(updateBackgroundPagesImagePositionClassAction(data)) },
		updateIndexAnimations: (data) => { dispatch(updateIndexAnimationsAction(data)) }
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);