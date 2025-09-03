// projects.tsx
import React from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    status: 'completed' | 'in-progress';
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: 'ML-Powered Stock Prediction Portal',
            description: 'Django + React ML-powered web portal that allows users to register new accounts and log in securely using JWT authentication.',
            status: 'completed',
            technologies: ['Django', 'React', 'DRF', 'Keras'],
            githubUrl: 'https://github.com/micahondiwa/stock-prediction-portal',
            demoUrl: 'https://micahondiwa/stock-prediction-portal'
        },
        {
            id: 2,
            title: 'Learning Management System',
            description: 'Django + React comprehensive Learning Management System equipped with essential features for both learners and instructors.',
            status: 'in-progress',
            technologies: ['Python', 'PostreSQL', 'React', 'Django', 'Stripe'],
            githubUrl: 'https://github.com/micahondiwa/learning-management-system'
        }
    ];

    return (
        <section className="projects-section">
            <h2 className="projects-title">Sample Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className={`project-card ${project.status}`}>
                        <div className="project-status">{project.status === 'completed' ? '✅ Complete' : '🚧 In Progress'}</div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-technologies">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                    GitHub
                                </a>
                            )}
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
