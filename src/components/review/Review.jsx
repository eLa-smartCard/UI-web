

import user_default from '../../assets/user_default.png'
import StarIcon from '@material-ui/icons/Star';
import RatingBar from '../rating-bar/RatingBar';
import { useState } from 'react';
import { useEffect } from 'react';

const Review = ({ nameUser, content, rating, nameStore }) => {
    const [newContent, setNewContent] = useState('')
    useEffect(() => {
        if (content.length > 35)
            setNewContent(content.slice(0, 70)+ '...')
    }, [])
    return (
        <div className='bg-white rounded p-2' title={newContent ? content : null}>
            <div className='flex items-center gap-1'>
                <img src={"/logouser/" + Number(Math.floor(Math.random() * 7) + 1) + ".png"} alt="" className='w-10 h-10 rounded-full' />
                <div>
                    <p className='m-0 p-0 italic font-normal'>{nameUser}</p>
                    <RatingBar numRatingBar={rating} />
                </div>
            </div>
            <hr className='my-1' />
            <span className='bg-ela rounded p-1 text-sm text-white '>{nameStore}</span>
            <p>{newContent || content}</p>
        </div>
    )
}
export default Review