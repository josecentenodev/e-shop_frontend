import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Tab } from "@headlessui/react";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ListOfCategories({ categories }) {

    return (
        <>
            <Tab.Group>
                <Tab.List className='mt-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-center sm:justify-start items-center flex-wrap'>
                    {categories.map(({ id, name}) => (
                        <>
                            <Link to={`${id}`}>
                                <Tab
                                    key={name}
                                    className={({ selected }) =>
                                        classNames(
                                            selected
                                                ? "bg-indigo-500 text-white"
                                                : "text-gray-400 hover:bg-indigo-300 hover:text-white",
                                            "mx-4 px-4 py-3 rounded-md text-sm font-medium outline-none"
                                        )
                                    }
                                    aria-current={({ selected }) =>
                                        selected ? "page" : undefined
                                    }
                                >
                                    {name}
                                </Tab>
                            </Link>
                        </>
                    ))}
                </Tab.List>
            </Tab.Group>
            <Outlet />
        </>
    );
}
