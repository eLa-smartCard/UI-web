import { useEffect, useState } from 'react';
import default_cover from '../assets/default-cover.png'
import food from '../assets/food.jpg'
import Store from '../components/Stores/Store';

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

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import ListTable from '../services/listTable';
import ExtendFunction from '../utils/extendFunction';

const Home = () => {
    const listTable = new ListTable()
    const extendFunc = new ExtendFunction()

    const [hotSlide, setHotSlide] = useState([])
    const [eMemberStores, setEMemberStores] = useState([])
    useEffect(async () => {
        let listHotSlide = await listTable.getFStores()
        setHotSlide(listHotSlide.data)

        let listEMemberStores = await listTable.getEmemberStores()
        console.log({ listHotSlide, listEMemberStores });
        setEMemberStores(listEMemberStores.data)
    }, [])

    return (
        <div className='xl:w-[1140px] xl:max-w-full ml-auto mr-auto mt-24'>
            <div className='grid grid-cols-4'>
                <div className='col-span-1	pr-3'>
                    <div className='flex items-center justify-between bg-ela rounded text-white p-2 cursor-pointer mb-4'>
                        <div className='flex items-center '>
                            <CreditCardIcon className='mr-2' />
                            <span className='font-semibold text-base'>Thẻ E-sinhvien</span>
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
                <div className='col-span-3 w-full'>
                    <div className='w-full flex items-center justify-between flex-col'>
                        <p className='font-bold border-b-2 border-ela w-fit my-2'>MỚI & HOT</p>
                    </div>
                    <div className=' h-[270px] w-full max-w-full'>
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className='w-full'
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            {
                                hotSlide.map((itemHot, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div
                                                className='w-full h-full relative object-cover'
                                                style={{
                                                    backgroundImage: `url("${itemHot.avatar}"),url("${default_cover}")`,
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                <div className='absolute top-0 bottom-0 left-0 right-0   text-white bg-black/25 flex items-center justify-center flex-col'>
                                                    <button className='bg-white/80 rounded-md py-2 px-4 font-bold text-black'>THỰC ĐƠN</button>
                                                    <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                                    <p className='text-lg font-semibold'>{itemHot.name || ''}</p>
                                                    <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                                    <p>{itemHot.address || ''}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-4 mt-3'>
                <div className='col-span-1	pr-3'>
                    <Sidebar label='KHÁM PHÁ'>
                        <ItemSidebar title='Về chúng tôi' icon={<PersonIcon />} />
                        <ItemSidebar title='Đối tác' icon={<GroupIcon />} />
                        <ItemSidebar title='Đặc quyền hạng thẻ' icon={<StarsIcon />} />
                        <ItemSidebar title='Khuyến mãi' icon={<FastfoodIcon />} />
                    </Sidebar>
                </div>
                <div className='col-span-3 w-full'>
                    {/* <div className='w-full flex items-center justify-between flex-col'>
                        <p className='font-bold border-b-2 border-ela w-fit my-2'>BẠN CÓ THỂ XEM THÊM</p>
                    </div> */}
                    <div className=' h-[200px] w-full max-w-full'>
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            {
                                hotSlide.map((itemHot, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div
                                                className='w-full h-full relative object-cover'
                                                style={{
                                                    backgroundImage: `url("${itemHot.avatar}"),url("${default_cover}")`,
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                                {/* <div className='absolute top-0 bottom-0 left-0 right-0   text-white bg-black/25 flex items-center justify-center flex-col'>
                                                    <button className='bg-white/80 rounded-md py-2 px-4 font-bold text-black'>THỰC ĐƠN</button>
                                                    <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                                    <p className='text-lg font-semibold'>{itemHot.name || ''}</p>
                                                    <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                                    <p>{itemHot.address || ''}</p>
                                                </div> */}
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className='my-4'>
                <div className='w-fit'>
                    <p className='text-title font-bold text-xl w-fit'>Quán E-Member</p>
                    <hr className='border-ela border-2 w-1/2 bg-ela' />
                </div>
                <div className=' h-[200px] w-full max-w-full mt-6'>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                    >
                        {
                            eMemberStores.map((itemHot, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div
                                            className='w-full h-full relative object-cover'
                                            style={{
                                                backgroundImage: `url("${itemHot.avatar}"),url("${default_cover}")`,
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat'
                                            }}
                                        >
                                            <div className='absolute top-0 bottom-0 left-0 right-0   text-white bg-black/25 flex items-center justify-center flex-col'>
                                                <button className='bg-white/80 rounded-md py-2 px-4 font-bold text-black'>THỰC ĐƠN</button>
                                                <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                                <p className='text-lg font-semibold'>{itemHot.name || ''}</p>
                                                <hr className='bg-white w-1/3 my-1 border-[1px]' />
                                                <p>{itemHot.address || ''}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <div className='my-4'>
                <div className='w-fit'>
                    <p className='text-title font-bold text-xl w-fit'>CÁC QUÁN MỚI HỢP TÁC</p>
                    <hr className='border-ela border-2 w-1/2 bg-ela' />
                </div>
                <div className='mt-6 flex items-center justify-evenly gap-3 flex-wrap'>
                    {hotSlide.map(item => {
                        return (
                            <Store props={{ infoStore: item }} />
                        )
                    })}
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