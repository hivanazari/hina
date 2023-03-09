"use client"
import React, { useState, useEffect } from 'react'

const Videoload = ({ socket }) => {

    const [frame, setframe] = useState("")
    const [results, setresults] = useState([])
    useEffect(() => {
        while (true) {
            socket.emit('request-frame', {});


            socket.on("new-frame", (data) => {
                setframe(data.base64)
                // console.log(typeof(data.rec))
                if (data.rec != null) {
                    // setframe(data.rec["main_image"])
                    if (results.length > 5) {

                        setresults(results.slice(0, 5))
                    }
                    else {
                        setresults([...results, data.rec])
                    }

                }

            })

            return () => {
                socket.off("new-frame", () => {
                    console.log("first")
                })
            }
        }
    }, [socket, results, frame])

    return (
        <div>
            <div className='h-[320px] bg-black w-[640px] mx-auto relative py-2'>
                <img src={`data:image/jpeg;base64,${frame}`} alt="" className='w-full h-[320px]' />
            </div>


            <div className="flex flex-col border-2 h-[300px] overflow-x-hidden mt-4">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full table-auto tbl">
                                <thead >
                                    <tr>
                                        <th>ردیف</th>
                                        <th>تاریخ</th>
                                        <th>ساعت</th>
                                        <th>شی تشخیص</th>
                                        <th>ناحیه</th></tr>
                                </thead>
                                <tbody>

                                    {

                                        results.length > 1 ? (
                                            results.map((item, index) => {
                                                return <tr key={index} className="border-2 border-gray-200">
                                                    <td>{index}</td>
                                                    <td>{item.date_read}</td>
                                                    <td>{item.time_read}</td>
                                                    <td>{item.category}</td>
                                                    <td>{item.area}</td>
                                                </tr>
                                            })) : <></>}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Videoload