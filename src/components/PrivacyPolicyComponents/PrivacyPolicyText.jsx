import React from "react";

const PrivacyPolicyTextBlock = ({ title, children }) => {
  return (
    <>
      <div className="privacy-policy-container-block">
        <div className="privacy-policy-container-block-title">{title}</div>
        <div className="privacy-policy-container-block-text">{children}</div>
      </div>
    </>
  );
};

const PrivacyPolicyText = () => {
  return (
    <>
      <div className="privacy-policy-container">
        <div className="privacy-policy-container-h1">
          Políticas de Privacidad
        </div>
        <PrivacyPolicyTextBlock title="Introducción">
          Proteger su información privada es nuestra prioridad. Esta Declaración
          de Privacidad se aplica a dogfinder.com.mx y rige la recopilación y el
          uso de datos. A los efectos de esta Política de privacidad, a menos
          que se indique lo contrario, todas las referencias a DogFinder
          incluyen a dogfinder.com.mx. El sitio web de DogFinder es una
          plataforma web que usa tecnología para encontrar perros perdidos. Al
          utilizar el sitio web de DogFinder, usted acepta las prácticas
          relacionadas con los datos que se describen en esta declaración.
        </PrivacyPolicyTextBlock>
        <PrivacyPolicyTextBlock title="Recopilación de su información personal">
          Si compra en DogFinder, recopilamos información de facturación y
          tarjeta de crédito. Esta información se utiliza para completar la
          transacción de compra.
        </PrivacyPolicyTextBlock>
        <PrivacyPolicyTextBlock title="Uso de su información personal">
          DogFinder recopila y utiliza su información personal para operar su
          sitio web y brindar los servicios que ha solicitado. DogFinder también
          puede comunicarse con usted a través de correo cuando se hace uso
          indebido en la plataforma. DogFinder no vende, alquila ni cede sus
          listas de clientes a terceros. DogFinder puede compartir datos con
          partes confiables para ayudar a realizar análisis estadísticos,
          enviarle correo electrónico, brindar soporte al cliente. Todos estos
          terceros tienen prohibido utilizar su información personal, excepto
          para proporcionar estos servicios a DogFinder, y están obligados a
          mantener la confidencialidad de su información. DogFinder divulgará su
          información personal, sin previo aviso, solo si así lo requiere la ley
          o si cree de buena fe que dicha acción es necesaria para: (a) cumplir
          con los edictos de la ley o cumplir con el proceso legal presentado a
          DogFinder; (b) proteger y defender los derechos o propiedad de
          DogFinder; y, (c) actuar bajo circunstancias exigentes para proteger
          la seguridad personal de los usuarios de DogFinder, o del público.
        </PrivacyPolicyTextBlock>
        <PrivacyPolicyTextBlock title="Cookies">
          DogFinder no utiliza cookies.
        </PrivacyPolicyTextBlock>
        <PrivacyPolicyTextBlock title="Seguridad de su información personal">
          DogFinder protege su información personal del acceso, uso o
          divulgación no autorizados. DogFinder utiliza el protocolo SSL para
          este propósito: cuando la información personal (como un número de
          tarjeta de crédito) se transmite a otros sitios web, está protegida
          mediante el uso de cifrado: el protocolo Secure Sockets Layer (SSL).
        </PrivacyPolicyTextBlock>
        <PrivacyPolicyTextBlock title="Niños menores de trece">
          DogFinder no recopila a sabiendas información de identificación
          personal de niños menores de trece años.
        </PrivacyPolicyTextBlock>
        <PrivacyPolicyTextBlock title="Cambios a esta declaración">
          DogFinder actualizará ocasionalmente esta Declaración de privacidad
          para reflejar los comentarios de la empresa y los clientes. En
          DogFinder lo alentamos a que revise periódicamente esta Declaración
          para estar informado de cómo DogFinder protege su información.
        </PrivacyPolicyTextBlock>
        <PrivacyPolicyTextBlock title="Información del contacto">
          DogFinder agradece sus preguntas o comentarios con respecto a esta
          Declaración de privacidad. Si cree que DogFinder no se ha adherido a
          esta Declaración, comuníquese con el equipo de DogFinder enviando un
          mensaje a través del sitio web.
        </PrivacyPolicyTextBlock>
      </div>
    </>
  );
};
export default PrivacyPolicyText;
/**
 * dogfinder.com.mx
 * DogFinder
 * <PrivacyPolicyTextBlock title="Recopilación de su información personal">
          
  </PrivacyPolicyTextBlock>
 */
