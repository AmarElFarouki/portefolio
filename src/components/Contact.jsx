import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "212663637242";
        const text = `*Nouveau message du Portfolio*%0A%0A*Nom:* ${formData.name}%0A*Email:* ${formData.email}%0A*Sujet:* ${formData.subject}%0A*Message:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">Contact</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Si vous êtes intéressé
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        n'hésitez pas à me laisser un message !
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-black rounded-xl p-8 text-white shadow-xl">
                        <h3 className="text-2xl font-bold mb-6">Mes Coordonnées</h3>
                        <p className="mb-8 text-gray-300">
                            Je suis joignable par email ou via LinkedIn. Je réponds généralement sous 24h.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <a href="mailto:elfarouki.dev@gmail.com" className="hover:underline text-lg">elfarouki.dev@gmail.com</a>
                            </div>

                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4 opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                <a href="https://www.linkedin.com/in/amar-el-farouki-998937265/" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">amar-elfarouki</a>
                            </div>

                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4 opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.307-.154-1.817-.897-2.098-.999-.281-.102-.486-.154-.691.154s-.795.999-.974 1.205-.359.231-.666.077c-.307-.154-1.298-.478-2.472-1.526-.913-.815-1.53-1.821-1.709-2.128-.179-.307-.019-.473.135-.627.139-.139.307-.359.461-.538.154-.179.205-.307.307-.513s.051-.385-.026-.538c-.077-.154-.691-1.667-.948-2.282-.25-.601-.506-.519-.691-.529-.179-.009-.385-.011-.59-.011s-.538.077-.82.385c-.282.308-1.077 1.051-1.077 2.564s1.103 2.974 1.256 3.179c.154.205 2.171 3.315 5.258 4.647.734.317 1.307.507 1.754.65.738.234 1.409.201 1.94.122.591-.088 1.817-.744 2.073-1.462.256-.718.256-1.333.179-1.461-.077-.128-.282-.205-.59-.359z" /></svg>
                                <a href="https://wa.me/212663637242" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">+212 663-637242</a>
                            </div>

                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4 opacity-80" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                <a href="https://github.com/AmarElFarouki" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">@AmarElFarouki</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-gray-50"
                                    placeholder="Votre nom"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-gray-50"
                                    placeholder="vous@exemple.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-gray-50"
                                placeholder="Objet de votre message..."
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-gray-50"
                                placeholder="Bonjour Amar..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full bg-black text-white font-bold py-3 px-4 rounded-md hover:bg-gray-800 transition duration-300 flex justify-center items-center">
                            Envoyer le message
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
