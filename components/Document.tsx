'use client'
import React, { FormEvent, useEffect, useState, useTransition } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'

const Document = ({id} : {id : string }) => {

    const [data,loading,error] = useDocumentData(doc(db,`documents`,id));
    const [input , setInput]= useState(``);
    const [isUpdating , startTransition ]= useTransition();
    // const isOwner = useOwner();// custom hook s


    useEffect(()=>{
        if(data) {
            setInput(data.title);
        }
    },[data])


    const updateTitle = (e : FormEvent) =>{
        e.preventDefault();
        
        if(input.trim() ) {
            startTransition(
                async () =>{
                    await updateDoc(doc(db,`documents`,id),{
                        title : input
                    });
                }
            )
        }
    }
  return (
    <div>

        <div className='flex max-w-6xl mx-auto justify-between pb-5'>
            <form action="" onSubmit={updateTitle} className='flex flex-1 space-x-2'>
                {/* update title .... */}

                <Input 
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}}
                />
                <Button disabled={isUpdating} type='submit'>
                    {isUpdating ? 'Updating...' : 'Update'}
                </Button>


                {/* if  */}


            </form>
        </div>
        <div>
            {/* managers user  */}


            {/* Avatars */}
        </div>
        {/* collaborative editor */}
    </div>
  )
}

export default Document

// secret key : sk_prod_Yqp462AW2UgsK6Y062SQgBNxyGelceZANulJWN8ddgCG_dbXwVjnVKRxsUD9BPf7
// public key : pk_prod_pSNSN-Sbs1PL1URdLA7hF8uNruLg91caHYgS5r-P67Oj0khmPHy-T6uFROWDXKcP