'use client'
import { usePathname } from 'next/navigation'
import React, { Fragment } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  

const Breadcrumbs = () => {
    const path= usePathname();
    // http://localhost:3000/doc/DTRlvJLLAoei48hYyOXr
    const segments = path.split('/');
    // segments.map((segment)=>{

    // })
    // const pathBread=``;

    
    // console.log(segments)

  return (
    // <div>Breadcrumbs</div>
    <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem key={`home`}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
                {segments.map((segment,index)=>{
                    if(!segment) return null;
                    const href = `/${segments.slice(0,index+1).join(`/`)}`;
                    const isLast= index===segments.length-1;
                    return (
                        <Fragment key={segment}>
                            <BreadcrumbSeparator/>

                            <BreadcrumbItem key={segment}>
                                {isLast? (
                                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>

                                )}

                            </BreadcrumbItem>
                        </Fragment>
                        
                    )

                })}    
        </BreadcrumbList>
    </Breadcrumb>

  )
}

export default Breadcrumbs