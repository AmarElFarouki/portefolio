import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Amar El Farouki. Tous droits réservés.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        Mentions Légales
                    </a>
                    <a href="https://github.com/amar-elfarouki" className="text-gray-400 hover:text-white transition-colors">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/amar-elfarouki" className="text-gray-400 hover:text-white transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
