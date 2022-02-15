import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="bg-blue-500 w-full h-16 flex flex-row justify-between items-center px-12">
            <div className="bg-blue-600 h-full flex items-center">
                <Link replace to="/"><img src="" alt="projekt bild" /></Link>
            </div>
            <div className="bg-green-500 h-full px-10 flex flex-row items-center gap-10">
                <div className="bg-red-400 py-2 px-3 rounded-sm">
                    {/* <a href="/login">Login</a> */}
                    <Link to="/login">Login</Link>
                </div>
                <div className="bg-teal-300 py-2 px-3 rounded-sm">
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </nav>
    );
}





