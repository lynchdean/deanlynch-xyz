import * as React from "react";
import Image from "react-bootstrap/Image";

import "./css/workExp.css";
import data from "./data/work";

import JobInfo from "../components/JobInfo";

function WorkExp() {
  return (
    <div className="container py-5 text-light">
      <h2 className="pb-2 mb-4 border-bottom">Work Experience:</h2>
      <div className="row">
        <div className="col-sm-2">
          <div className="list-group" id="list-tab" role="tablist">
            {data.jobs.map((job: any, index: number) => {
              return (
                <a
                  className={`item-width list-group-item list-group-item-action rounded-circle mx-auto m-1 p-1 ${
                    index === 0 ? "active" : ""
                  }`}
                  id={`list-${index}-list`}
                  data-toggle="list"
                  href={`#list-${index}`}
                  role="tab"
                  aria-controls={job.company}
                  key={index}
                >
                  <Image
                    src={job.image}
                    className="img-fluid d-block mx-auto"
                    alt={job.company + " Logo"}
                    roundedCircle
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="col-sm-10">
          <div className="card-body tab-content" id="nav-tabContent">
            {data.jobs.map((job: any, index: number) => {
              return (
                <div
                  className={`tab-pane fade ${
                    index === 0 ? "show active" : ""
                  }`}
                  id={`list-${index}`}
                  role="tabpanel"
                  aria-labelledby={`list-${index}-list`}
                  key={index}
                >
                  <JobInfo
                    position={job.position}
                    company={job.company}
                    duration={job.duration}
                    details={job.details}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExp;
