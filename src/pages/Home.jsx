import { useEffect, useState } from 'react';
import banner from '../assets/banner.png'

const Home = () => {


    return (
        <div>
            <img src={banner} alt="" className='w-full height-[300px] mt-8 bg-transparent' />
            <p className='mt-[200px]'>hieu hieu</p>
        </div>
    )
}
export default Home;