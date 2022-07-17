import StarsIcon from '@material-ui/icons/Stars';
import food from '../../assets/food.jpg'
import default_cover from '../../assets/default-cover.png'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom'
const Store = ({ props }) => {
    const { infoStore } = props

    return (
        <div className='basis-1/4 relative p-3'>
            <Link to={'/stores/' + infoStore.slug} className=' bg-white rounded shadow-md'>
                <div className='relative'>
                    <div className='rounded w-full h-[200px] min-h-[200px]'
                        style={{
                            backgroundImage: `url("${infoStore.avatar}"),url("${default_cover}")`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                    </div>

                    <img
                        src={'https://storage.langf.vn/8q5cksbkepg7mq1pzuwto2qyw2r9dadbuy9bcxs36glmemxs9qx73zm937r6bk.png'}
                        alt="default_cover"
                        className='absolute top-0 left-0 ml-1 mb-1 w-10'
                    />
                    <p className='absolute bottom-0 left-0 bg-ela text-white p-1 m-1 rounded'>-10%</p>

                </div>
                <div className='bg-white'>
                    <p className='text-ela font-bold'>{infoStore.name}</p>
                    <p className='text-ela text-xs italic'>{infoStore.address}</p>
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
            </Link>
        </div>
    )
}

export default Store