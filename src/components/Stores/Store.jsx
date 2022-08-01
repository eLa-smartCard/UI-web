import StarsIcon from '@material-ui/icons/Stars';
import food from '../../assets/food.jpg'
import default_cover from '../../assets/default-cover.png'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import esinhvien from '../../assets/esinhvien.jpg'
const Store = ({ infoStore, className }) => {
    // const {  } = props
    useEffect(() => {
        // console.log(props);
    }, [])
    return (
        <Link to={'/stores/' + infoStore.slug} className='w-full bg-white rounded my-2'>
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
                    src={esinhvien}
                    alt="default_cover"
                    className='absolute top-0 left-0 ml-1 mb-1 mt-1 w-10 h-10 rounded'
                />
                <p className='absolute bottom-0 left-0 bg-ela text-white p-1 m-1 rounded'>-10%</p>

            </div>
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
        </Link>
    )
}

export default Store