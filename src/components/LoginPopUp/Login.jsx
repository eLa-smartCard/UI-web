
import Input from '../Form/Input'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';



const Login = (props) => {


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
            />
            <p className='float-right m-0 text-cyan-600 text-md hover:underline mb-2 cursor-pointer '>Quên mật khẩu</p>
            <button className='bg-ela rounded-xl px-1 py-2 w-full text-white hover:opacity-80'>Đăng nhập</button>
            <p className='text-center text-slate-400 my-1 '>hoặc</p>
            <div className='w-full flex  items-center'>
                <button className='flex item-center justify-center border-2 border-slate-400   rounded-xl  w-full px-1 py-2 mx-1'>
                    <img src={google} alt="" className='w-5 h-5 mx-1' />
                    <p className=''>Google</p>
                </button>
                <button className='flex item-center justify-center border-2 border-slate-400 rounded-xl  w-full px-1 py-2 mx-1'>
                    <img src={facebook} alt="" className='w-5 h-5 mx-1' />
                    <p className=''>Facebook</p>
                </button>
            </div>
        </div>
    )
}
export default Login;