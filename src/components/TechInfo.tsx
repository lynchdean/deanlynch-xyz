import * as React from "react";
import "./css/techInfo.css"

interface Props {
  title: string;
  items: string[];
  icon: string;
}

function TechInfo({title, items, icon}: Props) {
  return (
    <div className="col d-flex align-items-start mb-3">
      <i className={`bi ${icon} icon mx-3`}/>
      <div className="w-100">
        <h4>{title}:</h4>
        <ul className="list-group list-group-flush">
          {items.map((item: string, index: number) => {
            return (
              <li className="list-group-item text-light bg-transparent p-2" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TechInfo;
