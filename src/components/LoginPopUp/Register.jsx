
import Input from '../Form/Input'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'


const Register = (props) => {


    return (
        <div className='w-full text-center'>
        <Input
            type='email'
            placeholder='Email...'
            className='mb-4'
        />
        <Input
            type='password'
            placeholder='Mật khẩu...'
            className='mb-4'
        />
        <Input
            type='password'
            placeholder='Nhập lại mật khẩu...'
            className='mb-4'
        />
        <button className='bg-ela rounded-xl px-1 py-2 w-full text-white hover:opacity-80'>Tạo tài khoản</button>
        <p className='text-center text-slate-400 my-1 '>hoặc</p>
        <div className='w-full flex  items-center'>
            <button className='flex item-center justify-center bg-google rounded-xl  w-full px-1 py-2 mx-1'>
                <img src={google} alt="" className='w-5 h-5 mx-1' />
                <p className='text-white'>Google</p>
            </button>
            <button className='flex item-center justify-center bg-facebook rounded-xl  w-full px-1 py-2 mx-1'>
                <img src={facebook} alt="" className='w-5 h-5 mx-1' />
                <p className='text-white'>Facebook</p>
            </button>
        </div>
    </div>
    )
}
export default Register;