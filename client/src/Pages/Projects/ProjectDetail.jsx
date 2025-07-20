import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "./projectsData";

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <div className="p-8 text-center text-xl">Проект не найден</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-3xl mx-auto py-8">
                <button onClick={() => navigate(-1)} className="mb-4 text-blue-600 hover:underline">Назад</button>
                <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                <div className="prose max-w-none">{project.description}</div>
            </div>
        </div>
    );
};

export default ProjectDetail; 