import React from "react";

const TextComponent = ({ title, text }) => {
  return (
    <>
      <div className="contact-us-page-main-section-text-title">{title}</div>
      <div className="contact-us-page-main-section-text-subtitle">{text}</div>
    </>
  );
};

const MainSectionContactPage = () => {
  return (
    <div className="contact-us-page-main-section">
      <div className="contact-us-page-main-section-text">
        <TextComponent
          title="¿De dónde nace la idea?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae quidem necessitatibus sed modi et nisi omnis ducimus minus repudiandae, commodi accusantium asperiores molestias praesentium incidunt vitae cupiditate officia. Ducimus cumque iste impedit doloremque eius at, unde sed delectus minima atque quam in dolorum doloribus fugit reprehenderit odit! Dolores, quaerat."
        ></TextComponent>
        <TextComponent
          title="¿Cuál es nuestra misión como plataforma web?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae quidem necessitatibus sed modi et nisi omnis ducimus minus repudiandae, commodi accusantium asperiores molestias praesentium incidunt vitae cupiditate officia. Ducimus cumque iste impedit doloremque eius at, unde sed delectus minima atque quam in dolorum doloribus fugit reprehenderit odit! Dolores, quaerat."
        ></TextComponent>
        <TextComponent
          title="¿Qué otras funcionalidades se agregarán posteriormente a la plataforma?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae quidem necessitatibus sed modi et nisi omnis ducimus minus repudiandae, commodi accusantium asperiores molestias praesentium incidunt vitae cupiditate officia. Ducimus cumque iste impedit doloremque eius at, unde sed delectus minima atque quam in dolorum doloribus fugit reprehenderit odit! Dolores, quaerat."
        ></TextComponent>
      </div>
    </div>
  );
};

export default MainSectionContactPage;
