import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">À Propos</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Qui suis-je ?
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Étudiant ingénieur curieux et rigoureux, prêt à relever de nouveaux défis.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900">Mon Parcours</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Actuellement en dernière année de cycle d'ingénieur en informatique, j'ai acquis une solide formation théorique et pratique.
                            Mon cursus m'a permis de maîtriser les fondamentaux du génie logiciel, des bases de données et de l'architecture système.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Au-delà du code, je m'intéresse à la conception de produits centrés sur l'utilisateur et aux méthodologies agiles.
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gray-900 mt-6 hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-lg text-gray-900 mb-2">🎓 Formation Actuelle</h4>
                            <p className="text-gray-700">École d'Ingénieur (EMSI)</p>
                            <p className="text-gray-500 text-sm">Spécialité Génie Informatique et réseaux</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-gray-300 transition-colors"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Mes Aspirations</h3>
                        <p className="text-gray-600 mb-6">
                            Je suis passionné par la création de produits innovants et performants. Mon objectif est de contribuer à des projets ambitieux au sein d'équipes dynamiques.
                        </p>

                        <h4 className="font-bold text-gray-900 mb-4">Ce qui me motive :</h4>
                        <ul className="space-y-3">
                            {['Développement Fullstack ou Frontend avancé', 'Environnement technique stimulant (React, Node.js, Cloud)', 'Équipe bienveillante et mentorat'].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + (index * 0.1) }}
                                    viewport={{ once: true }}
                                    className="flex items-start"
                                >
                                    <svg className="h-6 w-6 text-gray-800 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
