`use client`
import React, { PointerEvent } from 'react'
import {useMyPresence, useOthers} from '@liveblocks/react/suspense'
import FollowPointer from './FollowPointer'
const LiveCursorProvider = ({children} :{
    children : React.ReactNode
}) => {
    const [myPresence,updateMyPresence] = useMyPresence();
    const others = useOthers();
    function handlePointerMove(e : PointerEvent<HTMLDivElement>) {
        const cursor = {
            x : Math.floor(e.pageX),
            y : Math.floor(e.pageY),
        };
        updateMyPresence({cursor});

    }

    function handlePointerLeave() {
        updateMyPresence({cursor : null});
    }
  return (
    // <div>LiveCursorProvider</div>
    <div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
    >
        {children}
        {others.filter((other) => other.presence?.cursor


// (other)=>{
//     other.presence.cursor !== null;

        ).map(({connectionId,presence,info})=>{
            console.log(presence);
            return (
                <FollowPointer key={connectionId} info={info || {}} 
                    x={presence.cursor!.x}
                    y={presence.cursor!.y}
                />
            )
        })
        }
        {/* {myPresence? 
            <FollowPointer key={`123456789`} info={{
                name : `sandy`,
                email : `werfwer`,
                avatar : `https://picsum.photos/200/300`
            }}
            x={myPresence?.cursor!.x || 0}
            y={myPresence?.cursor!.y || 0}
            />
            : null
        } */}

    </div>
  )
}

export default LiveCursorProvider