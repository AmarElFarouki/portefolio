import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePhoto from '../assets/profile-photo.png';

const Hero = () => {
    return (
        <section id="hero" className="relative bg-white overflow-hidden min-h-screen flex items-center justify-center lg:justify-start">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Image (Desktop) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative block order-first lg:order-none mb-12 lg:mb-0"
                >
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-full lg:h-auto mx-auto">
                        <div className="absolute top-0 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        <div className="relative">
                            {/* User Photo */}
                            <img
                                src={profilePhoto}
                                alt="Amar El Farouki"
                                className="w-full h-auto object-contain relative z-10 transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-left"
                >
                    <div className="text-sm font-semibold text-gray-800 tracking-wide uppercase mb-2">
                        Bonjour, je suis
                    </div>
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-4">
                        <span className="block xl:inline">Amar El Farouki</span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl text-gray-700 font-bold mb-6 h-20 sm:h-auto">
                        <TypeAnimation
                            sequence={[
                                'Développeur Web',
                                1000,
                                'Ingénieur Informatique',
                                1000,
                                'Passionné de Tech',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-gray-900 block"
                            repeat={Infinity}
                        />
                    </h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-4 text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
                    >
                        Passionné par le développement d'applications performantes et intuitives.
                        Je combine expertise technique et design moderne pour transformer des idées complexes en solutions logicielles élégantes.
                    </motion.p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:text-lg md:px-10 shadow-lg"
                        >
                            Voir mes projets
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white md:text-lg md:px-10 hover:text-black hover:border-black"
                        >
                            Me contacter
                        </motion.a>
                    </div>
                </motion.div>

            </div>

            {/* Background decoration - Moved to Left now? No, probably keep on right or flip?
                If image is on left, maybe background decoration on left behind it?
                Actually, let's flip the background decoration to the left to sit behind the image, 
                or keep it right to sit behind the text. 
                Usually "decoration" balances the empty space. 
                If image is left and has blobs, right side (text) might need background.
                I'll allow the gradient to be on the right (behind text) as before.
            */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-gray-100 via-white to-white opacity-50 hidden lg:block"></div>
        </section>
    );
};

export default Hero;
