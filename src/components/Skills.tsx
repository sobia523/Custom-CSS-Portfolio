import React from 'react';

const Skills = () => {
    return(
        <div id="skills" className="container pt-32">
            <div className="grid md:grid-cols-2 gap-20 items-center">
                <div data-aos="zoom-in-up">
                    <h2 className="text-4xl md:text-5xl">Technologies I Work With</h2>
                    <p className="text-gray-400 pt-2">I have a soild foundation in web development specializing in HTML CSS and Javascript My experience extends to using framworks like React and Next.js to create dynamic and user-friendly applications I am also proficient in Tailwind CSS for efficient styling and design, with a person for learning  I stay updated to the latest technologies to enhance my skills set and contribute effectively to projects</p>
                </div>
                <div>
                    <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
                        <div className="space-y-2">
                            <h2 data-aos="zoom-in-up">Typescript</h2>
                            <h2 data-aos="zoom-in-up">React.js</h2>
                            <h2 data-aos="zoom-in-up">Next.js</h2>
                        </div>
                        <div className="space-y-2">
                            <h2 data-aos="zoom-in-up">Node.js</h2>
                            <h2 data-aos="zoom-in-up">CSS</h2>
                            <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;