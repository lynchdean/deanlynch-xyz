import * as React from "react";
import Image from "react-bootstrap/Image";

import DLLogo from "../components/img/DLLogo.png";
import data from "./data/about";

function About() {
  return (
    <div className="bg-primary mb-5">
      <div className="container p-4">
        <div className="row m-4 pb-4">
          <div className="col-lg-8">
            <div className="text-light">
              <h1 className="display-4 pb-4">{data.heading}</h1>
              {data.lines.map((line, index) => {
                return (
                  <p key={index} className="lead">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <Image
              src={DLLogo}
              className="img-fluid my-auto"
              alt={"DL Logo"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;