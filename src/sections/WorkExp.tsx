import * as React from 'react';
import data from "./data/work"
import WorkExpCard from "../components/WorkExpCard";
import Card from "react-bootstrap/Card";

function WorkExp() {
    return (
        <Card id="work-exp" className="mb-4">
            <Card.Title className="text-monospace m-3">Work Experience</Card.Title>
            {data.jobs.map((job: any, index: number) => {
                return (
                    <WorkExpCard key={index}
                        company={job.company}
                        img={job.image}
                        position={job.position}
                        duration={job.duration}
                        details={job.details}
                    />
                )
            })}
        </Card>
    )
}

export default WorkExp
