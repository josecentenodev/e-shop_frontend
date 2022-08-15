import React from 'react'
import NavigationItem from './NavigationItems';
import { Tab } from '@headlessui/react'

export default function NavigationTabs() {
  return (
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
    <div className="hidden sm:block sm:ml-6">
    <Tab.Group>
      <Tab.List className="flex space-x-4">
        <NavigationItem name={'Home'} href={'/'} />
        <NavigationItem name={'Categories'} href={'/categories'} />
        <NavigationItem name={'Orders'} href={'/orders'} />
      </Tab.List>
    </Tab.Group>            
    </div>
  </div>
  )
}
