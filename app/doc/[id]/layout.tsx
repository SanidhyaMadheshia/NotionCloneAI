import RoomProvider from '@/components/RoomProvider'
import { auth } from '@clerk/nextjs/server'
import React, { use } from 'react'
type Params = Promise<{id : string}>
const DocLayout =  (props : {
    children : React.ReactNode,
    params : Params
}) => {
    // auth().protect();
    const params =  use(props.params) ;
    

  return (
    // <div>{children}</div>
    <RoomProvider roomId={params.id}>
        {props.children}
    </RoomProvider>
  )
}

export default DocLayout