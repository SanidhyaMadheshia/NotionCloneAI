'use client'
import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { createNewDocument } from '@/actions/actions';

const NewDocumentButton = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();


    const handleCreateNewDocument = () =>{
        startTransition(async () =>{
           //crwate new Document;
           const {docId}= await createNewDocument();
           router.push(`/doc/${docId}`);


        })
    }
  return (
        <Button onClick={handleCreateNewDocument} disabled={isPending}>
            {isPending? `Creating...` : `NewDocument`}
        </Button>
  )
}

export default NewDocumentButton