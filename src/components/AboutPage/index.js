import React from "react";

import "./index.scss";

const AboutPage = () => (
  <div className="about-page-wrapper page-wrapper">
    <div className="about">
      <h3 className="about__name about__item ">React Boilerplate</h3>
      <p className="about__desc about__item">
        <b>minimal features add on to Create-React-App</b>
      </p>
      <p className="about__desc about__item">
        <b>React version 16.4.2</b>
      </p>
      <p className="about__desc">
        <b>cross-env</b>
        <br /> adopt environment variables across platforms without changing
        settings
        <br /> <b>dotenv</b>
        <br /> allow .env file to storing environment variables
        <br />
        <b>
          eslint-plugin-prettier ∙ eslint-config-prettier ∙
          eslint-config-airbnb-base
        </b>
        <br /> integrate linting style guide with airbnb-base and prettier
        instead of react-app
        <br />
        <b>
          babel-plugin-module-resolver ∙ eslint-import-resolver-webpack ∙
          eslint-plugin-import
        </b>
        <br /> allow alias "@/" as global import
        <br /> <b>react-router-dom</b>
        <br /> setup Single Page Application
        <br /> <b>node-sass</b>
        <br /> enable scss, setup basic styling layout with flexbox in BEM
        naming convention
      </p>
    </div>
  </div>
);

export default AboutPage;
