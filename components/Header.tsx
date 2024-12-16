"use client"
import { SignedIn, UserButton } from '@clerk/clerk-react';
import { SignedOut, SignInButton, useUser } from '@clerk/nextjs'
import React from 'react'
import Breadcrumbs from './Breadcrumbs';

export const Header = () => {
    const {user} = useUser();

  return (
    <div className='flex items-center justify-between p-5'>
        {user && <h1>{user?.firstName} Space </h1>}

        {/* breadscrumb - helps user to navigate the current location on website s  */}
        <Breadcrumbs/>
        <div>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </div>

  )
}
