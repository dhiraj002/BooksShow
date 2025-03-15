import React from "react";
import FloatingPartical from "./FloatingPartical";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { Github, Instagram, MessageSquare, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-2xl border-t border-gray-800">
            {/* Floating Particle */}\
            <FloatingPartical />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-6 text-center sm:text-left">
                        <div className="flex justify-center sm:justify-start items-center space-x-2">
                            <BookOpenIcon className="h-8 w-8 text-cyan-400" />

                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">BOOKSHOW</span>
                        </div>
                        <p className="text-gray-400 text-sm">Your gateway to infinite worlds. Discover, read, and escape into stories that matter.</p>
                    </div>
                    {/* Quick Links Section */}
                    <div className="space-y-4 text-center sm:text-left">
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Explore</h3>
                        <ul className="space-y-3">
                            {["Trending", "New Release", "Genres", "Author"].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm flex items-center justify-center sm:justify-start group">
                                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"> </span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Teck sTack */}

                    <div className="space-y-4 text-center sm:text-left">
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Powered By</h3>
                        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                            {["React", "TailWind", "Vite", "GoogleApi"].map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 cursor-pointer rounded-full bg-gray-800/50 text-gray-300 text-sm backdrop-blur-sm hover:bg-cyan-400/10 hover:text-cyan-300 transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4 text-center sm:text-left">
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Connect</h3>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            {[
                                ["GitHub", "hover:text-purple-300", Github],
                                ["Twitter", "hover:text-purple-300", Twitter],
                                ["Discord", "hover:text-purple-300", MessageSquare],
                                ["Instagram", "hover:text-purple-300", Instagram],
                            ].map(([paltform, className, Icon]) => (
                                <a href="#" className={`text-gray-400 ${className} transition-colors hover:scale-110`} key={paltform}>
                                    <span className="sr-only">{paltform}</span>
                                    <Icon className="h-6 w-6 md:h-8 md:w-8" stroke="currentColor" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
