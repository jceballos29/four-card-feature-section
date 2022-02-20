import supervisor from "../images/icon-supervisor.svg";
import teamBuilder from "../images/icon-team-builder.svg";
import karma from "../images/icon-karma.svg";
import calculator from "../images/icon-calculator.svg"


const features = [
    {
        id: 0,
        title: "Supervisor",
        description: "Monitors activity to identify project roadblocks",
        image: supervisor,
        color: "var(--Cyan)",
    },
    {
        id: 1,
        title: "Team Builder",
        description: "Scan our talent network to create th optimal team for your project" ,
        image: teamBuilder,
        color: "var(--Red)",
    },
    {
        id: 2,
        title: "Karma",
        description: "Regularly evaluates our talent to ensure quality",
        image: karma,
        color: "var(--Orange)",
    },
    {
        id: 3,
        title: "Calculator",
        description: "Uses data form past projects to provide better delivery estimates",
        image: calculator,
        color: "var(--Blue)",
    },
];

export default features;