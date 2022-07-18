import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import PopUp from '../LoginPopUp/PopUp';
import RoomIcon from '@material-ui/icons/Room';

import { Sidebar, ItemSidebar } from '../../components/SideBar';

import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import BrushIcon from '@material-ui/icons/Brush';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import StarsIcon from '@material-ui/icons/Stars';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        // console.log(position);
        setScrollPosition(position);
    };
    const handleLogin = () => {
        setShowLogin(true);
    }

    const handleSideBar = () => {
        setShowSideBar(!showSideBar)
    }




    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='w-full bg-white fixed top-0 left-0 z-[1]' >
            <div className='flex items-center justify-between xl:w-[1140px] xl:max-w-full ml-auto mr-auto px-4 py-4 bg-white'>
                <img src={logo} alt="" className='w-logo' />
                <div className='lg:flex lg:items-center hidden'>
                    <div className='flex items-center mx-4'>
                        <SearchIcon />
                        <p className='mr-2 text-[#666] font-semibold text-lg'>Tìm</p>
                        <input type="text" className='border-2 border-slate-400 px-2 py-2 rounded w-[300px]' placeholder='Thương hiệu, sản phẩm...' />
                    </div>
                    <div>
                        <RoomIcon />
                        <select name="" id="" className='border-2 px-1 py-2 rounded border-slate-400'>
                            <option value="">Thủ Đức</option>
                        </select>
                    </div>
                </div>
                <button className='hidden md:block md:bg-ela md:px-2 md:py-2 md:text-white md:rounded' onClick={handleLogin}>Đăng nhập</button>
                <div className='md:hidden relative'>
                    <span className='text-sm cursor-pointer mr-4 text-ela' onClick={handleLogin}>Đăng nhập</span>
                    <button onClick={handleSideBar}>
                        <MenuIcon className='text-ela' />
                    </button>
                    {
                        showSideBar ?
                            (
                                <div className='absolute top-[42px] left-[-116px] min-w-[240px] bg-white shadow-xl animate-slideIn'>
                                    <div className=''>
                                        <Sidebar label='DANH MỤC'>
                                            <ItemSidebar title='Đồ ăn' icon={<RestaurantIcon />} />
                                            <ItemSidebar title='Đồ uống' icon={<EmojiFoodBeverageIcon />} />
                                            <ItemSidebar title='Giải trí' icon={<LocalMoviesIcon />} />
                                            <ItemSidebar title='Làm đẹp' icon={<BrushIcon />} />
                                            <ItemSidebar title='Khác' icon={<MoreHorizIcon />} />
                                        </Sidebar>
                                    </div>
                                    <div className='mt-3'>
                                        <Sidebar label='KHÁM PHÁ'>
                                            <ItemSidebar title='Về chúng tôi' icon={<PersonIcon />} />
                                            <ItemSidebar title='Đối tác' icon={<GroupIcon />} />
                                            <ItemSidebar title='Đặc quyền hạng thẻ' icon={<StarsIcon />} />
                                            <ItemSidebar title='Khuyến mãi' icon={<FastfoodIcon />} />
                                        </Sidebar>
                                    </div>
                                </div>
                            )
                            :
                            null
                    }
                </div>
            </div>
            {showLogin && <PopUp showLogin={showLogin} setShowLogin={setShowLogin} />}
        </div>
    )
}

export default Header;