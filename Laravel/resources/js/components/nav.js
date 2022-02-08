import React from "react"

export default function Navbar() {
    return (
        <nav className="bg-blue-500 w-full h-16 flex flex-row justify-between items-center px-12">
            <div className="bg-blue-600 h-full flex items-center">
                <img src="" alt="projekt bild" />
            </div>
            <div className="bg-green-500 h-full px-10 flex flex-row items-center gap-10">
                <div className="bg-red-400 py-2 px-3 rounded-sm">
                    <a href="/login">Login</a>
                </div>
                <div className="bg-teal-300 py-2 px-3 rounded-sm">
                    <a href="/register">register</a>
                </div>
            </div>
        </nav>
    );
}