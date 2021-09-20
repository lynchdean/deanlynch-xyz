import * as React from "react";
import TechInfo from "../components/TechInfo";
import data from "./data/tech";

function Tech() {
  return (
    <div className="container py-4 text-light">
      <h2 className="pb-2 mb-4 border-bottom">Technologies:</h2>
      <div className="row">
        {data.tech.map((category: any, index: number) => {
          return (
            <TechInfo
              title={category.title}
              items={category.items}
              icon={category.icon}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tech;
