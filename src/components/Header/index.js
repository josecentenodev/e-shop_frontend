import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className=' bg-slate-600 p-10 flex justify-between items-center'>
            <div className=' flex justify-evenly items-center text-center w-72'>
                <Link
                    to='/'
                    className=' py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 shadow-sm'
                >
                    Home
                </Link>
                <Link
                    to='/categories'
                    className=' py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 shadow-sm'
                >
                    Categories
                </Link>
            </div>
            <div className='flex justify-evenly items-center text-center w-48'>
                <Link
                    to='/login'
                    className=' py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 shadow-sm'
                >
                    Login
                </Link>
                <Link
                    to='/signup'
                    className=' py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 shadow-sm'
                >
                    Sign Up
                </Link>
            </div>
        </header>
    );
}
