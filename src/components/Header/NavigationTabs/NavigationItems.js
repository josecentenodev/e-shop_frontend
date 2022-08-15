import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function NavigationItem({ name, href }) {
    return (
        <Link key={name} to={href}>
            <Tab
                key={name}
                className={({ selected }) =>
                    classNames(
                        selected
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium outline-none"
                    )
                }
                aria-current={({ selected }) => (selected ? "page" : undefined)}
            >
                {name}
            </Tab>
        </Link>
    );
}
