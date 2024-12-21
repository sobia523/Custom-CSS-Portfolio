import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
    {
        id: 0,
        title: "Currency Converter Project",
        desc: "A simple HTML & TypeScript powered tool for converting currencies with real-time rates",
        img: "/img3.jpg",
        tags: ["HTML", "CSS", "Node", "Javascript"],
    },
    {
        id: 3,
        title: "Building Game Project",
        desc: "a fun game built with HTML, CSS, and JavaScript. Players choose Rock, Paper, or Scissors, and the computer randomly picks one.",
        img: "/img2.jpg",
        tags: ["HTML", "CSS", "Javascript", "Node"],
    },
    {
        id: 2,
        title: "Shareable Resume Project",
        desc: "A Typescript based static resume build with HTML and CSS, allowing users to showcase their skills dynamically",
        img: "/img1.jpg",
        tags: ["Next.js", "Node", "Typescript", "React"],
    },
    {
        id: 1,
        title: "Static Resume Builder",
        desc: "A Typescript based static resume build with HTML and CSS, to shows thier skills and experience",
        img: "/img0.jpg",
        tags: ["Next.js", "CSS", "Typescript", "Node"],
    },
]

const Projects = () => {
    return(
        <div id="projects" className="container pt-32">
            <Heading title='My Projects' />
            <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {data.map((el) =>(<Card 
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags}
                />))}
            </div>
        </div>
    );
};

export default Projects;