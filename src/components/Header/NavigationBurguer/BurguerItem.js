import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function BurguerItem({ name, href }) {
    return (
        <Link key={name} to={href}>
            <Disclosure.Button
                key={name}
                className={({ selected }) =>
                    classNames(
                        selected
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium outline-none"
                    )
                }
                aria-current={({ selected }) => (selected ? "page" : undefined)}
            >
                {name}
            </Disclosure.Button>
        </Link>
    );
}
