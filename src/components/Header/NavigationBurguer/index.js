import React from "react";
import { Disclosure } from "@headlessui/react";
import BurguerItem from "./BurguerItem";

export default function NavigationBurguer() {
    return (
        <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
                <BurguerItem name={'Home'} href={'/'} />
                <BurguerItem name={'Categories'} href={'/categories'} />
                <BurguerItem name={'Orders'} href={'/orders'} />
            </div>
        </Disclosure.Panel>
    );
}
