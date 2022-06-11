import { useEffect, useState } from 'react';
import banner from '../assets/banner.png'
import food from '../assets/food.jpg'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import BrushIcon from '@material-ui/icons/Brush';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


import { Sidebar, ItemSidebar } from '../components/SideBar';
const Home = () => {


    return (
        <div className='xl:w-[1140px] xl:max-w-full ml-auto mr-auto'>
            <div className='flex flex-wrap'>
                <div className='basis-1/4	pr-3'>
                    <div className='flex items-center justify-between bg-ela rounded text-white p-2 cursor-pointer mb-4'>
                        <div className='flex items-center '>
                            <CreditCardIcon className='mr-2' />
                            <span className='font-semibold text-lg'>Thẻ E-sinhvien</span>
                        </div>
                        <ArrowForwardIosIcon style={{ fontSize: '10px' }} />
                    </div>
                    <div>
                        <Sidebar label='DANH MỤC'>
                            <ItemSidebar title='Đồ ăn' icon={<LocalDiningIcon />} />
                            <ItemSidebar title='Đồ uống' icon={<EmojiFoodBeverageIcon />} />
                            <ItemSidebar title='Giải trí' icon={<LocalMoviesIcon />} />
                            <ItemSidebar title='Làm đẹp' icon={<BrushIcon />} />
                            <ItemSidebar title='Khác' icon={<MoreHorizIcon />} />
                        </Sidebar>
                    </div>
                </div>
                <div className='basis-3/4 w-full'>
                    <div className='w-full flex items-center justify-between flex-col'>
                        <p className='font-bold border-b-2 border-ela w-fit my-2'>MỚI & HOT</p>
                    </div>
                    <div className='flex'>
                        <div className='basis-3/4 '>
                            <img src={food} alt="" className='w-full' />
                        </div>
                        <div className='basis-1/4'>
                            <img src={food} alt="" className='w-full' />
                            <img src={food} alt="" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex mt-3'>
                <div className='basis-1/4 pr-2'>
                    <Sidebar label='KHÁM PHÁ'>
                        <ItemSidebar title='Độc quyền tại E-sinhvien' icon={<StarIcon />} />
                        <ItemSidebar title='Độc quyền tại E-sinhvien' icon={<StarIcon />} />
                        <ItemSidebar title='Độc quyền tại E-sinhvien' icon={<StarIcon />} />
                    </Sidebar>
                </div>
                <div className='basis-3/4 w-full'>
                    <div className='w-full flex items-center justify-between flex-col'>
                        <p className='font-bold border-b-2 border-ela w-fit my-2'>BẠN CÓ THỂ XEM THÊM</p>
                    </div>
                    <div className='flex'>
                        <div className='basis-1/3 relative'>
                            <img src={food} alt="" className='w-full'/>
                            <div className='absolute top-0 bottom-0 left-0 right-0 w-fit text-white'>
                                <button className='bg-white/80 rounded-md py-2 px-4 font-semibold text-black'>THỰC ĐƠN</button>
                                <p>Toco Toco</p>
                                <p>$100</p>
                            </div>
                        </div>
                        <div className='basis-1/3'>
                            <img src={food} alt="" className='w-full'/>
                        </div>
                        <div className='basis-1/3'>
                            <img src={food} alt="" className='w-full'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-6'>
                <div className='w-[250px]  border-2 border-slate-400 rounded-xl px-1 py-2'>
                    <img src={food} alt="" className='rounded-xl w-full h-[200px]' />
                    <p className='w-full text-center bg-sky-300 text-white text-sm my-1 rounded-xl '>Đường vành đai khu A</p>
                    <p className='text-ela font-bold'>Bún đậu mắm tôm</p>
                    <p className='text-ela text-xs italic'>Đường Tô Vĩnh Diện (gần lẫu chay hữu duyên)</p>
                    <div className='flex items-center'>
                        <div>
                            <StarIcon className='text-yellow-400' style={{ fontSize: '15px' }} />
                            <StarIcon className='text-yellow-400' style={{ fontSize: '15px' }} />
                            <StarIcon className='text-yellow-400' style={{ fontSize: '15px' }} />
                            <StarIcon className='text-yellow-400' style={{ fontSize: '15px' }} />
                            <StarBorderIcon className='text-yellow-400' style={{ fontSize: '15px' }} />
                        </div>
                        <div>
                            <p className='my-0 mx-1 italic text-sm'>2 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;