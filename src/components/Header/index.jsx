import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import PopUp from '../LoginPopUp/PopUp';
import RoomIcon from '@material-ui/icons/Room';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        // console.log(position);
        setScrollPosition(position);
    };
    const handleLogin = () => {
        setShowLogin(true);
    }





    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='w-full bg-white'>
            <div className='flex items-center justify-between xl:w-[1140px] xl:max-w-full ml-auto mr-auto py-4 bg-white'>
                <img src={logo} alt="" className='w-logo' />
                <div className='flex items-center'>
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
                <button className='bg-ela px-2 py-2 text-white rounded' onClick={handleLogin}>Đăng nhập</button>
            </div>
            {showLogin && <PopUp showLogin={showLogin} setShowLogin={setShowLogin}/>}
        </div>
    )
}

export default Header;