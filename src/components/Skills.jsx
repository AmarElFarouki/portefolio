import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML5 / CSS3", level: "Expert" },
            { name: "JavaScript (ES6+)", level: "Avancé" },
            { name: "React.js", level: "Avancé" },
            { name: "Angular", level: "Intermédiaire" },
            { name: "Tailwind CSS", level: "Avancé" },
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", level: "Avancé" },
            { name: "Express", level: "Avancé" },
            { name: "Spring Boot", level: "Intermédiaire" },
            { name: "Java", level: "Intermédiaire" },
        ]
    },
    {
        category: "Bases de Données",
        items: [
            { name: "MySQL / PostgreSQL", level: "Avancé" },
            { name: "MongoDB", level: "Intermédiaire" },
        ]
    },
    {
        category: "Outils & DevOps",
        items: [
            { name: "Git / GitHub", level: "Avancé" },
            { name: "Docker", level: "Basique" },
            { name: "Postman", level: "Avancé" },
            { name: "Figma", level: "Intermédiaire" },
        ]
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">Expertise</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Mes Compétences Techniques
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-200 hover:border-gray-400"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-indigo-200">
                                {skillGroup.category}
                            </h3>
                            <motion.ul
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="space-y-3"
                            >
                                {skillGroup.items.map((skill, idx) => (
                                    <motion.li key={idx} variants={item} className="flex justify-between items-center group">
                                        <span className="font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">{skill.name}</span>
                                        <span className="text-xs text-indigo-400 bg-indigo-50 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                            {skill.level}
                                        </span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
