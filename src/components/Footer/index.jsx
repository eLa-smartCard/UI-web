import logo from '../../assets/logo.png'
import Input from '../Form/Input';


const Footer = () => {


    return (
        <div className='bg-footer py-4 text-title'>
            <div className='xl:w-[1140px] xl:max-w-full ml-auto mr-auto'>
                <div className='flex item-center'>
                    <div className='basis-2/3'>
                        <img src={logo} alt="" className='w-[100px] my-1' />
                        <p className='italic'>Esinhvien là hệ thống đem đến sự kết nối giữa doanh nghiệp với sinh viên cho phép bạn tận hưởng thẻ tích điểm thông tin và nhận được những ưu đãi từ những dịch vụ bạn đã sử dụng.</p>
                    </div>
                    <div className='basis-1/3 text-center'>
                        <Input type="text" placeholder='Nhập email...' label='ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI' />
                    </div>
                </div>
                <div>
                    <p className='font-bold my-2'>TẢI MIỄN PHÍ</p>
                    <div className='flex items-center gap-4'>
                        <img src={'https://jamja.vn/assets/images/badge-download-on-the-app-store.svg'} alt="" />
                        <img src={'https://jamja.vn/assets/images/google-play-badge.svg'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;