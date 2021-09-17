import * as React from "react";
import TechInfo from "../components/TechInfo";
import data from "./data/tech";

function TechExp() {
  return (
    <div className="container pt-5 pb-4 text-light">
      <h2 className="pb-2 mb-4 border-bottom">Technologies:</h2>
      <div className="row">
        {data.tech.map((category: any, index: number) => {
          return (
            <TechInfo
              title={category.title}
              items={category.items}
              icon={category.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TechExp;
