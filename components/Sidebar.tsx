'use client'
import React, { useEffect, useState } from 'react'
import NewDocumentButton from './NewDocumentButton'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'


import { useCollection } from 'react-firebase-hooks/firestore'
import { DocumentData, getFirestore } from 'firebase-admin/firestore'
import { adminApp } from '@/firebase-admin'
import { collection, collectionGroup, query, where } from 'firebase/firestore'
import { useUser } from '@clerk/nextjs'
import { db } from '@/firebase'
import SidebarOption from './SidebarOption'


interface RoomDocument extends DocumentData {
    createdAt: string;
    role: `owner` | `editor`;
    roomId: string;
    userId: string;
}
const Sidebar = () => {

    const { user } = useUser();
    const [groupedData, setGropedData] = useState<{
        owner: RoomDocument[];
        editor: RoomDocument[];
    }>({
        owner: [],
        editor: []
    });


    const [data, loading, error] = useCollection(
        user &&
        query(collectionGroup(db, `rooms`),
            where('userId', '==', user?.emailAddresses[0].toString())
        )


    );

    useEffect(() => {
        if (!data) {
            return;
        }
        // this reduce will iterate all over the docs in data and will segregate on basis of owner and editor 

        const grouped = data.docs.reduce<{
            owner: RoomDocument[];
            editor: RoomDocument[];
        }>(
            (acc, curr) => {
                // if(curr.data().role === 'owner'){
                //     acc.owner.push(curr.data());
                // }

                const roomData = curr.data() as RoomDocument;
                if (roomData.role === `owner`) {
                    acc.owner.push({
                        id: curr.id,
                        ...roomData
                    });

                } else {
                    acc.editor.push({
                        id: curr.id,
                        ...roomData
                    });
                }
                return acc;

            }, {
            // these are the initial  parameters in accumulater 
            owner: [],
            editor: []
        }

        )
        setGropedData(grouped);


    }, [data]);


    const menuOptions = (
        <>
            <NewDocumentButton />
            {/* My Docs */}
            <div className='flex py-4 flex-col space-y-4 md:max-w-36'>


                {
                    groupedData.owner.length === 0 ?
                        (
                            <h2 className='text-gray-500 font-semibold text-sm'>
                                No Document Found
                            </h2>
                        ) : (
                            <>
                                <h2 className='text-gray-500 font-semibold text-sm'>
                                    My Documents
                                </h2>
                                {
                                    groupedData.owner.map((doc) => (
                                        // <p key={doc.roomId} >{doc.roomId}</p>
                                        <SidebarOption key={doc.id} id= {doc.id}  href={`/doc/${doc.id}`}/>
                                    ))

                                }
                            </>

                        )

                }
            </div>
            {/* Lists... */}



            {/* Shared with me  */}
            {groupedData.editor.length>0 && (
                <>
                    <h2 className='text-gray-500 font-semibold text-sm'>
                        Shared with me 
                    </h2>
                    {groupedData.editor.map((doc)=>{
                        <SidebarOption key={doc.id} id= {doc.id}  href={`/doc/${doc.id}`}/>
                    })}
                </>
            )}
            {/* Lists */}
        </>

    );
    return (
        <div className='p-2 md:p-5 bg-gray-200 relative'>
            {/* <Sheet>
                <SheetTrigger >
                    <Button>sidebar</Button>
                    <SheetContent>
                        <NewDocumentButton/>
                    </SheetContent>
                </SheetTrigger>
            </Sheet> */}
            <div className='md:hidden'>
                <Sheet>
                    <SheetTrigger>
                        <MenuIcon className='p-2 hover:opacity-30 rounded-lg' size={40} />
                    </SheetTrigger>
                    <SheetContent side={'left'}>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <div>
                                {menuOptions}

                            </div>

                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            <div className='hidden md:inline'>
                {menuOptions}

            </div>
        </div>
    )
}

export default Sidebar