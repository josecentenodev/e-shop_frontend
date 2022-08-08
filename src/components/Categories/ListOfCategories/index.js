import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function ListOfCategories({ categories }) {

    return (
        <>
        <div className=" flex flex-row w-full justify-evenly mt-10 flex-wrap">
            {categories.map(({ id, name, color, icon }) => (
                        <NavLink style={({isActive}) => isActive ? {backgroundColor: color} : undefined } to={`${id}`} key={id} className=" mb-3 p-3 rounded-md text-white text-center text-lg bg-slate-600 w-44">
                            {name}
                        </NavLink>
            ))}
        </div>
        <Outlet />
        </>
    );
}
