import React from 'react'
import { CareNavbar } from '../../../Navbar/CareNavbar';


function BoardRequest() {
    return (
        <>
            <div>
                <CareNavbar />
            </div>
            <div className='bg-[#817299] h-12 shadow-2xl'></div>


            <div className=' h-auto w-[600px] border-slate-700 bg-[#fefdfd] ml-[444px] mt-14 pt-10  shadow-2xl pb-10 '>
                <div className='pl-20'>
                <tr className='text-[#615656] '>
                    <th className='ml-20 '>User Name </th>
                    <th className='pl-10' > View User Details</th>
                    <button className='pl-10 '>accept</button>
                    <button className='pl-10'>reject</button>
                </tr>

                


                </div>

            </div>


            <h1>board request</h1>
        </>
    )
}

export default BoardRequest
