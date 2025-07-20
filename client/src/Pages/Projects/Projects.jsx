import React from "react";
import { Link } from "react-router-dom";
import projects from "./projectsData";

const Projects = () => {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Проекты</h1>
            <div className="grid gap-6">
                {projects.map(project => (
                    <div key={project.id} className="p-6 bg-white rounded-xl shadow">
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <p className="mb-4">{project.summary}</p>
                        <Link to={`/projects/${project.id}`} className="text-blue-600 hover:underline">Подробнее</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects; 