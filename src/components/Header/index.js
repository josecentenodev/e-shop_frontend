import React from "react";
import { Disclosure} from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import NavigationTabs from "./NavigationTabs";
import NavigationUserMenu from "./NavigationUserMenu";
import NavigationBurguer from "./NavigationBurguer";


export default function Header() {
    return (
        <Disclosure as='nav' className='bg-gray-800'>
            {({ open }) => (
                <>
                    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-between h-16'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                {/* Mobile menu button*/}
                                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    ) : (
                                        <MenuIcon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <NavigationTabs />
                            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                                <button
                                    type='button'
                                    className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                                >
                                    <span className='sr-only'>
                                        View notifications
                                    </span>
                                    <BellIcon
                                        className='h-6 w-6'
                                        aria-hidden='true'
                                    />
                                </button>

                                <NavigationUserMenu />
                            </div>
                        </div>
                    </div>

                    <NavigationBurguer />
                </>
            )}
        </Disclosure>
    );
}
