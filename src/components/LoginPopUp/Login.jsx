
import Input from '../Form/Input'

const Login = (props) => {


    return (
        <div className='w-full text-center'>
            <Input
                type='email'
                placeholder='Email...'
            />
            <Input
                type='password'
                placeholder='Password...'
            />
            <button className='bg-ela rounded-xl px-1 py-2 w-full text-white hover:opacity-80'>Đăng nhập</button>
            <hr />
            <button>Đăng nhập bằng google</button>
        </div>
    )
}
export default Login;