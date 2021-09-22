import * as React from "react";

import DLLogo from "../components/img/DLLogo.png";
import data from "./data/about";

function About() {
  return (
    <div className="bg-primary">
      <div className="container p-4 mb-4">
        <div className="text-light pb-5">
          <div className="d-flex justify-content-between">
            <div className="pt-3">
              <h1 className="display-4">{data.heading}</h1>
              <h2 className="display-5 pb-4">{data.subheading}</h2>
            </div>
            <img
              src={DLLogo}
              alt={"DL Logo"}
              width={150}
            />
          </div>

          {data.lines.map((line, index) => {
            return (
              <p key={index} className="lead">
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </div>

  )

}

export default About;
