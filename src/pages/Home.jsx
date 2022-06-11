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
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import StarsIcon from '@material-ui/icons/Stars';
import RestaurantIcon from '@material-ui/icons/Restaurant';

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
                            <ItemSidebar title='Đồ ăn' icon={<RestaurantIcon />} />
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
                    <div className='flex max-h-[272px] overflow-hidden'>
                        <div className='basis-3/4 '>
                            <img src={food} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className='basis-1/4 flex flex-col'>
                            <div className='basis-[50%] overflow-hidden'>
                                <img src={food} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='basis-[50%] overflow-hidden'>
                                <img src={food} alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex mt-3'>
                <div className='basis-1/4 pr-2'>
                    <Sidebar label='KHÁM PHÁ'>
                        <ItemSidebar title='Về chúng tôi' icon={<PersonIcon />} />
                        <ItemSidebar title='Đối tác' icon={<GroupIcon />} />
                        <ItemSidebar title='Đặc quyền hạng thẻ' icon={<StarsIcon />} />
                        <ItemSidebar title='Khuyến mãi' icon={<FastfoodIcon />} />
                    </Sidebar>
                </div>
                <div className='basis-3/4 w-full'>
                    <div className='w-full flex items-center justify-between flex-col'>
                        <p className='font-bold border-b-2 border-ela w-fit my-2'>BẠN CÓ THỂ XEM THÊM</p>
                    </div>
                    <div className='flex'>
                        <div className='basis-1/3 relative'>
                            <img src={food} alt="" className='w-full' />
                            <div className='absolute top-0 bottom-0 left-0 right-0   text-white bg-black/25 flex items-center justify-center flex-col'>
                                <button className='bg-white/80 rounded-md py-2 px-4 font-bold text-black'>THỰC ĐƠN</button>
                                <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                <p className='text-lg font-semibold'>Toco Toco</p>
                                <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                <p>$100</p>
                            </div>
                        </div>
                        <div className='basis-1/3 relative'>
                            <img src={food} alt="" className='w-full' />
                            <div className='absolute top-0 bottom-0 left-0 right-0   text-white bg-black/25 flex items-center justify-center flex-col'>
                                <button className='bg-white/80 rounded-md py-2 px-4 font-bold text-black'>THỰC ĐƠN</button>
                                <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                <p className='text-lg font-semibold'>Toco Toco</p>
                                <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                <p>$100</p>
                            </div>
                        </div>
                        <div className='basis-1/3 relative'>
                            <img src={food} alt="" className='w-full' />
                            <div className='absolute top-0 bottom-0 left-0 right-0   text-white bg-black/25 flex items-center justify-center flex-col'>
                                <button className='bg-white/80 rounded-md py-2 px-4 font-bold text-black'>THỰC ĐƠN</button>
                                <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                <p className='text-lg font-semibold'>Toco Toco</p>
                                <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                <p>$100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4'>
                <div className='w-fit'>
                    <p className='text-title font-bold text-xl w-fit'>CÁC QUÁN MỚI HỢP TÁC</p>
                    <hr className='border-ela border-2 w-1/2 bg-ela' />
                </div>
                <div className='mt-6'>
                    <div className='w-[300px] bg-white rounded '>
                        <div className='relative'>
                            <img src={food} alt="" className='rounded w-full h-[200px]' />

                            <img
                                src={'https://storage.langf.vn/8q5cksbkepg7mq1pzuwto2qyw2r9dadbuy9bcxs36glmemxs9qx73zm937r6bk.png'}
                                alt=""
                                className='absolute top-0 left-0 ml-1 mb-1 w-10'
                            />
                            <p className='absolute bottom-0 left-0 bg-ela text-white p-1 m-1 rounded'>-10%</p>

                        </div>
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
            <div className='my-4'>
                <div className='w-fit'>
                    <p className='text-title font-bold text-xl w-fit'>THƯƠNG HIỆU NỔI BẬT</p>
                    <hr className='border-ela border-2 w-1/2 bg-ela' />
                </div>
                <div className='flex items-center flex-wrap my-4'>
                    <div className='px-10 py-2 bg-white w-[150px] rounded mx-2'>
                        <img src={'https://img.jamja.vn/jamja-prod/gcs_thumb_w_59bcb94076ec5777fc198027-2017-09-16-054019.png?h=100'} alt="" className='' />
                    </div>
                    <div className='px-10 py-2 bg-white w-[150px] rounded mx-2'>
                        <img src={'https://img.jamja.vn/jamja-prod/gcs_thumb_w_59f6eecd76ec571353322794-2017-10-30-092018.jpeg?h=100'} alt="" className='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;