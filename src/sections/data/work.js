import anamLogo from "../img/anam-logo.png";
import bplLogo from "../img/BPL.png";
import lcLogo from "../img/Life-Cycle-ltd.png";
import hibLogo from "../img/Hibernia.png";

const data = {
  jobs: [
    {
      company: "ANAM Technologies",
      image: anamLogo,
      position: "Software Test Engineer",
      duration: "Mar 2021 - Present",
      details: [
        "Conducting automation testing using Jenkins for latest product candidates",
        "Conducting performance/load testing using internal test tool for latest product candidates",
        "Monitoring, troubleshooting and reporting of bugs and defects to Bugzilla",
        "Carried out testing of AWS hosted implementation for troubleshooting and to assess viability",
        " Optimisation of established testing processes and scripts",
      ],
    },
    {
      company: "Bloomberg PolarLake",
      image: bplLogo,
      position: "Software Engineering Internship",
      duration: "Apr 2018 - Sep 2018",
      details: [
        "Carried out service performance testing",
        "Bug fixing and improvements to business logic",
        "Generating graphs and reports from JSON input",
        "Developed a query service controller & UI using Java & Angular 6",
        "Investigated Apache Cassandra implementation with existing file store",
      ],
    },
    {
      company: "Life-Cycle Ltd.",
      image: lcLogo,
      position: "Warehouse Operative",
      duration: "Summer of 2015, 2016, 2017",
      details: [
        "Inventory Management (In/Out)",
        "Reorganised Warehouse for maximum efficiency",
        "Sales for promotional sporting events",
      ],
    },
    {
      company: "Hibernia Networks",
      image: hibLogo,
      position: "2 Week Internship",
      duration: "July 2016",
      details: [
        "Built a fibre network with Add-drop Multiplexers",
        "Built and troubleshooted a peer to peer fibre network with trunk and access ports",
        "Observed the techniques used when looking for problems in a large fibre network",
      ],
    },
  ],
};

export default data;
