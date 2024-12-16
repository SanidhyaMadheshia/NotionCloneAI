'use client'
import React from 'react'
import {LiveblocksProvider} from '@liveblocks/react/suspense'
const LiveBlocksProvider = ({children} : {
    children: React.ReactNode
}) => {
    if(!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY) {
        throw new Error(`NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY is not set`);

    }
  return (
    // <div></div>
    <LiveblocksProvider
        throttle={16}
        authEndpoint={`/auth-endpoint`}
        // publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY}
    >
        {children}
    </LiveblocksProvider>
  )
}

export default LiveBlocksProvider