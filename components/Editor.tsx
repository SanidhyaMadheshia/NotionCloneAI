`use client`
import { useRoom } from '@liveblocks/react/suspense'
import React, { useState } from 'react'
import * as Y from 'yjs';
import {LiveblocksYjsProvider} from '@liveblocks/yjs';
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';


const Editor = () => {
    const room = useRoom();
    const [doc , setDoc] = useState<Y.Doc>();
    const [provider , setProvider]= useState<LiveblocksYjsProvider>();
    const [darkMode, setDarkMode]=useState(false);
    

    const style = `hover:text-white ${
        darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-100' : 'bg-gray-200 text-gray-700 hover:bg-gray-700'
    }`;


  return (
    <div className='max-w-6xl mx-auto '>
        <div className='flex items-center gap-2 justify-end mb-10 '>

        
            {/* translateDocuemrnt */}
            {/* chatToDocumentFeta ai  */}
            {/* Dark mode */}
            <Button className={style} onClick={()=>{ setDarkMode(!darkMode)}}>
                {darkMode ? <SunIcon/>: <MoonIcon/>}
            </Button>
        </div> 2 :53: 27
        {/* Blocknote  */}

    </div>
  )
}

export default Editor