import React from "react";

const LegalTextBlock = ({ title, children }) => {
  return (
    <>
      <div className="privacy-policy-container-block">
        <div className="privacy-policy-container-block-title">{title}</div>
        <div className="privacy-policy-container-block-text">{children}</div>
      </div>
    </>
  );
};

const LegalText = () => {
  return (
    <>
      <div className="privacy-policy-container">
        <div className="privacy-policy-container-h1">
          Términos y Condiciones
        </div>
        <LegalTextBlock title="Acuerdo entre el Usuario y https://www.dogfinder.com.mx">
          Bienvenido a https://www.dogfinder.com.mx. El sitio web
          https://www.dogfinder.com.mx. El sitio es una plataforma web que usa
          tecnología para encontrar perros perdidos. El Sitio se le ofrece a
          usted condicionado a su aceptación sin modificación de los términos,
          condiciones y avisos aquí contenidos (los "Términos"). Lea estos
          términos detenidamente y guarde una copia de ellos para su referencia.
          Las compras son definitivas y no reembolsables.
        </LegalTextBlock>
        <LegalTextBlock title="Privacidad">
          Su uso del Sitio está sujeto a la Política de privacidad de DogFinder.
          Revise nuestra Política de privacidad, que también rige el Sitio e
          informa a los usuarios sobre nuestras prácticas de recopilación de
          datos.
        </LegalTextBlock>
        <LegalTextBlock title="Comunicaciones electronicas">
          Visitar el Sitio o enviar correos electrónicos a DogFinder constituye
          comunicaciones electrónicas. Usted acepta recibir comunicaciones
          electrónicas y acepta que todos los acuerdos, avisos, divulgaciones y
          otras comunicaciones que le proporcionamos electrónicamente, por
          correo electrónico y en el Sitio, satisfacen cualquier requisito legal
          de que dichas comunicaciones se realicen por escrito.
        </LegalTextBlock>
        <LegalTextBlock title="Su cuenta">
          Para los propósitos de estos Términos y Condiciones, a menos que se
          indique lo contrario, todas las referencias a "su cuenta" significan /
          incluyen su derecho de acceso y uso de este sitio y su uso de este
          sitio. Si usa este sitio, es responsable de mantener la
          confidencialidad de su cuenta y de restringir el acceso a su
          computadora, y acepta la responsabilidad de todas las actividades que
          ocurran en su cuenta. No puede ceder ni transferir su cuenta a ninguna
          otra persona o entidad, y no puede compartir una cuenta con otra
          persona. Usted reconoce que DogFinder no es responsable del acceso de
          terceros a su cuenta que resulte del robo o apropiación indebida de su
          cuenta. DogFinder se reserva el derecho de rechazar o cancelar el
          servicio, cancelar cuentas o eliminar o editar contenido.
        </LegalTextBlock>
        <LegalTextBlock title="Niños menores de trece">
          DogFinder no recopila a sabiendas información de identificación
          personal de niños menores de trece años.
        </LegalTextBlock>
        <LegalTextBlock title="Enlaces a sitios de terceros / servicios de terceros">
          El Sitio puede contener enlaces a otros sitios web ("Sitios
          vinculados"). Los Sitios Vinculados no están bajo el control de
          DogFinder y DogFinder no es responsable del contenido de ningún Sitio
          Vinculado, incluyendo, sin limitación, cualquier vínculo contenido en
          un Sitio Vinculado, o cualquier cambio o actualización de un Sitio
          Vinculado. DogFinder le proporciona estos vínculos solo para su
          conveniencia, y la inclusión de cualquier vínculo no implica
          aprobación por parte de DogFinder del sitio ni asociación con sus
          operadores. Ciertos servicios pueden estar disponibles a través del
          Sitio y ser entregados por sitios y organizaciones de terceros. Al
          utilizar cualquier funcionalidad que se origine en el dominio
          https://www.dogfinder.com.mx, usted reconoce y acepta que DogFinder
          puede compartir dicha información y datos con cualquier tercero con el
          que DogFinder tenga una relación contractual para proporcionar el
          producto, servicio o funcionalidad en nombre de los usuarios y
          clientes del Sitio.
        </LegalTextBlock>
        <LegalTextBlock title="Prohibición de uso / propiedad intelectual ilegal o prohibida">
          Se le otorga una licencia no exclusiva, intransferible y revocable
          para acceder y utilizar el Sitio estrictamente de acuerdo con estos
          términos de uso. Como condición de su uso del Sitio, usted garantiza a
          DogFinder que no utilizará el Sitio para ningún propósito que sea
          ilegal o prohibido por estos Términos. No puede usar el Sitio de
          ninguna manera que pueda dañar, deshabilitar, sobrecargar o deteriorar
          el Sitio o interferir con el uso y disfrute del Sitio por parte de
          terceros. No puede obtener ni intentar obtener ningún material o
          información a través de ningún medio que no esté disponible o
          proporcionado intencionalmente a través del Sitio. Todo el contenido
          incluido como parte del Servicio, como texto, gráficos, logotipos,
          imágenes, así como la compilación de los mismos, y cualquier software
          utilizado en el Sitio, es propiedad de DogFinder o sus proveedores y
          está protegido por derechos de autor y otras leyes que proteger la
          propiedad intelectual y los derechos de propiedad. Usted acepta
          observar y cumplir con todos los avisos de derechos de autor y otros
          avisos de propiedad, leyendas u otras restricciones contenidas en
          dicho contenido y no realizará ningún cambio al mismo. No modificará,
          publicará, transmitirá, aplicará ingeniería inversa, participará en la
          transferencia o venta, creará trabajos derivados ni explotará de
          ninguna manera el contenido, en su totalidad o en parte, que se
          encuentre en el Sitio. El contenido de DogFinder no se puede revender.
          Su uso del Sitio no le da derecho a hacer ningún uso no autorizado de
          ningún contenido protegido y, en particular, no eliminará ni alterará
          ningún derecho de propiedad o avisos de atribución en ningún
          contenido. Utilizará contenido protegido únicamente para su uso
          personal y no hará ningún otro uso del contenido sin el permiso
          expreso por escrito de DogFinder y el propietario de los derechos de
          autor. Usted acepta que no adquiere ningún derecho de propiedad sobre
          ningún contenido protegido. No le otorgamos ninguna licencia, expresa
          o implícita, sobre la propiedad intelectual de DogFinder o de nuestros
          licenciantes, excepto según lo autorizado expresamente por estos
          Términos.
        </LegalTextBlock>
        <LegalTextBlock title="Uso de servicios de comunicación">
          El Sitio puede contener páginas web personales, y medios para
          contactar a personas cuando se necesite por nuestro servicio. Usted
          acepta utilizar los Servicios de comunicación solo para enviar y
          recibir mensajes y material que sean adecuados y estén relacionados
          con el Servicio de comunicación en particular. A modo de ejemplo, y no
          como limitación, usted acepta que al utilizar un Servicio de
          comunicación, no: difamará, abusará, acosará, acechará, amenazará o
          violará de otra manera los derechos legales (como los derechos de
          privacidad y publicidad) de otros. ; publicar, publicar, cargar,
          distribuir o difundir cualquier tema, nombre, material o información
          inapropiado, profano, difamatorio, infractor, obsceno, indecente o
          ilegal; cargar archivos que contengan software u otro material
          protegido por las leyes de propiedad intelectual (o por los derechos
          de privacidad de la publicidad) a menos que usted sea el propietario o
          controle los derechos correspondientes o haya recibido todos los
          consentimientos necesarios; cargar archivos que contengan virus,
          archivos corruptos o cualquier otro software o programas similares que
          puedan dañar el funcionamiento de la computadora de otra persona;
          anunciar u ofrecer vender o comprar bienes o servicios para cualquier
          propósito comercial, a menos que dicho Servicio de comunicación
          permita específicamente dichos mensajes; realizar o enviar encuestas,
          concursos, esquemas piramidales o cartas en cadena; descargar
          cualquier archivo publicado por otro usuario de un Servicio de
          comunicación que sepa, o razonablemente debería saber, que no puede
          distribuirse legalmente de esa manera; falsificar o eliminar cualquier
          atribución de autor, avisos legales o de otro tipo o designaciones de
          propiedad o etiquetas del origen o fuente del software u otro material
          contenido en un archivo que se carga; restringir o inhibir a cualquier
          otro usuario de usar y disfrutar de los Servicios de comunicación;
          violar cualquier código de conducta u otras pautas que puedan ser
          aplicables para cualquier Servicio de comunicación en particular;
          recolectar o recopilar información sobre otros, incluidas las
          direcciones de correo electrónico, sin su consentimiento; violar las
          leyes o regulaciones aplicables. DogFinder no tiene la obligación de
          monitorear los Servicios de Comunicación. Sin embargo, DogFinder se
          reserva el derecho de revisar el material enviado a un Servicio de
          comunicación y de quitar cualquier material a su única discreción.
          DogFinder se reserva el derecho de cancelar su acceso a cualquiera o
          todos los Servicios de comunicación en cualquier momento sin previo
          aviso y por cualquier motivo. DogFinder se reserva el derecho en todo
          momento de divulgar cualquier información según sea necesario para
          satisfacer cualquier ley, regulación, proceso legal o solicitud
          gubernamental aplicable, o de editar, negarse a publicar o eliminar
          cualquier información o material, en su totalidad o en parte, en
          DogFinder. Siempre tenga cuidado al dar cualquier información de
          identificación personal sobre usted o sus hijos en cualquier Servicio
          de comunicación. DogFinder no controla ni respalda el contenido, los
          mensajes o la información que se encuentran en ningún Servicio de
          comunicación y, por lo tanto, DogFinder específicamente renuncia a
          cualquier responsabilidad con respecto a los Servicios de comunicación
          y cualquier acción que resulte de su participación en cualquier
          Servicio de comunicación.
        </LegalTextBlock>
        <LegalTextBlock title="Materiales proporcionados al sitio o publicados en DogFinder">
          DogFinder no reclama la propiedad de los materiales que usted
          proporciona al Sitio. Sin embargo, al publicar, cargar, ingresar,
          proporcionar o enviar contenido, está otorgando permiso a DogFinder
          para usar su contenido en relación con la operación de sus negocios en
          Internet, incluidos, entre otros, los derechos para: copiar,
          distribuir, transmitir, mostrar públicamente, realizar, reproducir,
          editar, traducir y reformatear públicamente su contenido; y publicar
          su nombre en relación con su contenido. No se pagará ninguna
          compensación con respecto al uso de su contenido, como se establece en
          este documento. DogFinder no tiene la obligación de publicar o usar
          ningún contenido que usted pueda proporcionar y puede eliminar
          cualquier contenido en cualquier momento a su entera discreción. Al
          publicar, cargar, ingresar, proporcionar o enviar su contenido, usted
          garantiza y declara que posee o controla todos los derechos de su
          contenido como se describe en esta sección, incluidos, entre otros,
          todos los derechos necesarios para que usted proporcione, publique,
          cargar, ingresar o enviar su contenido. Las imágenes, ubicaciones,
          nombres de mascota, color, edad, fechas, descripciones, páginas web,
          se usan solo para el bien de la plataforma.
        </LegalTextBlock>
        <LegalTextBlock title="Usuarios internacionales">
          El Servicio es controlado, operado y administrado por DogFinder desde
          México. Si accede al Servicio desde una ubicación fuera de México. Es
          responsable del cumplimiento de todas las leyes locales. Usted acepta
          que no utilizará el Contenido de DogFinder al que se accede a través
          del Sitio en ningún país o de ninguna manera prohibida por las leyes,
          restricciones o regulaciones aplicables.
        </LegalTextBlock>
        <LegalTextBlock title="Indemnización">
          Usted acepta indemnizar, defender y eximir de responsabilidad a
          DogFinder, sus funcionarios, directores, empleados, agentes y
          terceros, por cualquier pérdida, costo, responsabilidad y gasto
          (incluidos los honorarios razonables de abogado) relacionados con o
          que surjan de su uso o incapacidad para utilizar el Sitio o los
          servicios, cualquier publicación de usuario realizada por usted, su
          violación de cualquier término de este Acuerdo o su violación de
          cualquier derecho de un tercero, o su violación de las leyes, reglas o
          regulaciones aplicables. DogFinder se reserva el derecho, a su propio
          costo, de asumir la defensa y el control exclusivos de cualquier
          asunto sujeto a indemnización por su parte, en cuyo caso cooperará
          plenamente con DogFinder para hacer valer las defensas disponibles.
        </LegalTextBlock>
        <LegalTextBlock title="Descargo de responsabilidad">
          DOGFINDER, ES UNA EMPRESA INDEPENDIENTE. DOGFINDER NO REPRESENTA NI
          ESTÁ AFILIADO CON LOS EMPLEADORES DE SUS FUNDADORES NI CON CUALQUIER
          OTRA COMPAÑÍA, ORGANIZACIÓN O ASOCIACIÓN DE NINGÚN MODO. LA
          INFORMACIÓN, EL SOFTWARE, LOS SERVICIOS INCLUIDOS O DISPONIBLES A
          TRAVÉS DEL SITIO PUEDEN INCLUIR INEXACTITUDES O ERRORES TIPOGRÁFICOS.
          PERIÓDICAMENTE SE AGREGAN CAMBIOS A LA INFORMACIÓN CONTENIDA.
          DOGFINDER Y / O SUS PROVEEDORES PUEDEN REALIZAR MEJORAS Y / O CAMBIOS
          EN EL SITIO EN CUALQUIER MOMENTO. DOGFINDER, Y / O SUS PROVEEDORES NO
          HACEN DECLARACIONES SOBRE LA IDONEIDAD, FIABILIDAD, DISPONIBILIDAD,
          PUNTUALIDAD Y EXACTITUD DE LA INFORMACIÓN, SOFTWARE, SERVICIOS Y
          GRÁFICOS RELACIONADOS CONTENIDOS EN EL SITIO PARA CUALQUIER FIN. EN LA
          MEDIDA MÁXIMA PERMITIDA POR LA LEY APLICABLE, TODA DICHA INFORMACIÓN,
          SOFTWARE, SERVICIOS Y GRÁFICOS RELACIONADOS SE PROPORCIONAN "TAL CUAL"
          SIN GARANTÍA O CONDICIÓN DE NINGÚN TIPO. DOGFINDER Y / O SUS
          PROVEEDORES RENUNCIAN A TODAS LAS GARANTÍAS Y CONDICIONES CON RESPECTO
          A ESTA INFORMACIÓN, SOFTWARE, SERVICIOS Y GRÁFICOS RELACIONADOS,
          INCLUYENDO TODAS LAS GARANTÍAS O CONDICIONES IMPLÍCITAS DE
          COMERCIABILIDAD, ADECUACIÓN PARA UN PROPÓSITO PARTICULAR. EN LA MEDIDA
          MÁXIMA PERMITIDA POR LA LEY APLICABLE, EN NINGÚN CASO DOGFINDER Y / O
          SUS PROVEEDORES SERÁN RESPONSABLES DE NINGÚN DAÑO DIRECTO, INDIRECTO,
          PUNITIVO, INCIDENTAL, ESPECIAL, CONSECUENTE O CUALQUIER DAÑO QUE
          INCLUYA PÉRDIDA, SIN LIMITACIONES, USO, DATOS O BENEFICIOS, QUE SURJAN
          DE O DE CUALQUIER FORMA RELACIONADOS CON EL USO O EL RENDIMIENTO DEL
          SITIO, CON LA DEMORA O INCAPACIDAD PARA UTILIZAR EL SITIO O SERVICIOS
          RELACIONADOS, LA PROVISIÓN O FALTA DE PROPORCIONAR SERVICIOS, O PARA
          CUALQUIER INFORMACIÓN, SOFTWARE, Y GRÁFICOS RELACIONADOS OBTENIDOS A
          TRAVÉS DEL SITIO O QUE SURJAN DEL USO DEL SITIO, YA SEA BASADO EN
          CONTRATO, AGRAVIO, NEGLIGENCIA, RESPONSABILIDAD ESTRICTA O DE OTRO
          MODO, INCLUSO SI DOGFINDER O ALGUNO DE SUS PROVEEDORES INFORMADO DE LA
          POSIBILIDAD DE DAÑOS. SI NO ESTÁ SATISFECHO CON ALGUNA PARTE DEL
          SITIO, O CON ALGUNO DE ESTOS TÉRMINOS DE USO, SU ÚNICO Y EXCLUSIVO
          REMEDIO ES DEJAR DE USAR EL SITIO.
        </LegalTextBlock>
        <LegalTextBlock title="Restricción de rescisión / acceso">
          DogFinder se reserva el derecho, a su sola discreción, de cancelar su
          acceso al Sitio y los servicios relacionados o cualquier parte del
          mismo en cualquier momento, sin previo aviso.
        </LegalTextBlock>
        <LegalTextBlock title="Ley / jurisdicción aplicable y jurisdicción">
          En la medida máxima permitida por la ley, este acuerdo se rige por las
          leyes del estado de Querétaro y, por la presente, usted acepta la
          jurisdicción exclusiva y el lugar de los tribunales en Querétaro en
          todas las disputas que surjan o estén relacionadas con el uso del
          Sitio. El uso del Sitio no está autorizado en ninguna jurisdicción que
          no dé efecto a todas las disposiciones de estos Términos, incluida,
          entre otras, esta sección.
        </LegalTextBlock>
        <LegalTextBlock title="Otras provisiones">
          Usted acepta que no existe ninguna relación de empresa conjunta,
          sociedad, empleo o agencia entre usted y DogFinder como resultado de
          este acuerdo o uso del Sitio. El cumplimiento de este acuerdo por
          parte de DogFinder está sujeto a las leyes y procesos legales
          existentes, y nada de lo contenido en este acuerdo es una derogación
          del derecho de DogFinder de cumplir con las solicitudes o requisitos
          gubernamentales, judiciales y policiales relacionados con su uso del
          Sitio o la información proporcionada ao recopilados por DogFinder con
          respecto a dicho uso. Si se determina que alguna parte de este acuerdo
          no es válida o no se puede hacer cumplir de conformidad con la ley
          aplicable, incluidas, entre otras, las renuncias de garantía y las
          limitaciones de responsabilidad establecidas anteriormente, la
          disposición inválida o inaplicable se considerará reemplazada por una
          disposición válida y ejecutable. que más se acerque a la intención de
          la disposición original y el resto del acuerdo continuará en vigor. A
          menos que se especifique lo contrario en el presente, este acuerdo
          constituye el acuerdo completo entre el usuario y DogFinder con
          respecto al Sitio y reemplaza todas las comunicaciones y propuestas
          anteriores o contemporáneas, ya sean electrónicas, orales o escritas,
          entre el usuario y DogFinder con respecto al Sitio. Una versión
          impresa de este acuerdo y de cualquier notificación dada en forma
          electrónica será admisible en procedimientos judiciales o
          administrativos basados ​​en o relacionados con este acuerdo en la
          misma medida y sujeto a las mismas condiciones que otros documentos y
          registros comerciales originalmente generados y mantenidos en forma
          impresa.
        </LegalTextBlock>
        <LegalTextBlock title="Cambios en los términos">
          DogFinder se reserva el derecho, a su sola discreción, de cambiar los
          Términos bajo los cuales se ofrece el Sitio. La versión más actual de
          los Términos reemplazará a todas las versiones anteriores. DogFinder
          lo alienta a revisar periódicamente los Términos para mantenerse
          informado de nuestras actualizaciones.
        </LegalTextBlock>
        <LegalTextBlock title="Información del contacto">
          DogFinder agradece sus preguntas o comentarios con respecto a esta
          Declaración de privacidad. Si cree que DogFinder no se ha adherido a
          esta Declaración, comuníquese con el equipo de DogFinder enviando un
          mensaje a través del sitio web.
        </LegalTextBlock>
      </div>
    </>
  );
};
export default LegalText;
/**
 * dogfinder.com.mx
 * DogFinder
 * <LegalTextBlock title="Recopilación de su información personal">
          
  </LegalTextBlock>
 */
