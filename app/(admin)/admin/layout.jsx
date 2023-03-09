"use client"
import Sidebar from '../../../components/sidebar';
import Header from '../../../components/header';
import React, { useState } from 'react';
import '../../globals.css'
function RootLayout({ children }) {

    return (


            <body>
                <div className='flex  flex-no-wrap'>
                    <Sidebar></Sidebar>
                    <main className='w-full mr-[200px]'>
                        <Header></Header>
                        <article className='m-4 border-2 p-4'>
                            {children}
                        </article>
                    </main>
                </div>
            </body>
   
    );
}

export default RootLayout;