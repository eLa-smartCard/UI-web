import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import PopUp from '../LoginPopUp/PopUp';


const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log(position);
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
        <div className={clsx('flex items-center justify-between px-6 py-4 drop-shadow-md	fixed top-0 left-0 right-0 z-10',{
            'bg-elaBg': scrollPosition > 0,
        })}>
            <div className='flex items-center'>
                <img src={logo} alt="" className='w-[120px]' />
                {/* <p className='mx-2 font-medium text-xl'>E-Sinhvien</p> */}
            </div>
            <div className='flex items-center'>
                <div className='flex flex-col items-center mx-4 cursor-pointer'>
                    <p className='m-0 text-ela font-medium'>Trang chủ</p>
                    <FiberManualRecordIcon style={{ fontSize: '10px', marginTop: '5px' }} className='text-ela' />
                </div>
                <div className='flex flex-col items-center  mx-4 cursor-pointer'>
                    <p className='m-0 font-medium'>Đồ ăn</p>
                    <FiberManualRecordIcon style={{ fontSize: '10px', marginTop: '5px' }} className='text-white' />
                </div>
                <div className='flex flex-col items-center  mx-4 cursor-pointer'>
                    <p className='m-0 font-medium'>Liên hệ</p>
                    <FiberManualRecordIcon style={{ fontSize: '10px', marginTop: '5px' }} className='text-white' />
                </div>
            </div>
            <div className='flex items-center'>
                <SearchIcon className='mx-4' style={{ fontWeight: '100', fontSize: '25px' }} />
                <NotificationsActiveIcon className='mx-4' style={{ fontWeight: '100', fontSize: '25px' }} />
                <div className='bg-ela py-2 px-4 rounded-3xl flex items-center cursor-pointer hover:opacity-90 hover:shadow-sm' onClick={handleLogin}>
                    <ExitToAppIcon className='text-white' style={{ fontSize: '20px' }} />
                    <span className='text-white font-medium text-sm'>Đăng nhập</span>
                </div>
                {showLogin && <PopUp showLogin={showLogin} setShowLogin={setShowLogin}/>}
            </div>
        </div>
    )
}

export default Header;