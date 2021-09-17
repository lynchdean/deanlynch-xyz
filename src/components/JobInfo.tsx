import * as React from "react";

interface Props {
  position: string;
  company: string;
  duration: string;
  details: string[];
}

function JobInfo({ position, company, duration,  details }: Props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <h4 className="mr-auto">
            {position}
            <span className="text-muted"> @ {company}</span>
          </h4>
          <p className="lead"> {duration}</p>
        </div>
      </div>

      <ul className="list-group list-group-flush text-light">
        {details.map((line: any, index: number) => (
          <li className="list-group-item bg-transparent pl-0" key={index}>
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobInfo;
