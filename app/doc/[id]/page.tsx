// // 'use client'
// import React from 'react'

// // const DocumentPage = async ({params } : {
// //     params : Promise<{
// //         [id : string] : string
// //         }>
// // }) => {

// //     console.log(await params);
// //   return (
// //     <div>DocumentPage</div>
// //   )
// // }

// export default DocumentPage
// // hello what is your name is 
import Document from '@/components/Document';
import React, { use } from 'react'
//refer https://nextjs.org/docs/app/building-your-application/upgrading/version-15#async-request-apis-breaking-change
type Params = Promise<{id : string}>;
// for this method 
const DocumentPage = (props : {
    params : Params
}) => {
    const params = use(props.params);
    console.log(params.id);

  return (
    <div>DocumentPage : {params.id}
        <Document id={params.id} />
    </div>
  );

}

export default DocumentPage