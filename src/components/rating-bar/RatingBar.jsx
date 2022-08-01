
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';
import { useEffect } from 'react';
const RatingBar = ({ numRatingBar }) => {
    useEffect(() => {
        console.log(numRatingBar);
    }, [])

    return (
        <div className='flex items-center gap-1'>
            {listEmpty.map((element, index) => {
                if (index + 1 <=  Number(numRatingBar))
                    return <StarIcon style={{ fontSize: 15, color: '#ffdd31' }} />
                else if (index + 1 == Number(numRatingBar) + 0.5)
                    return <StarHalfIcon style={{ fontSize: 15, color: '#ffdd31' }} />
                else
                    return <StarBorderIcon style={{ fontSize: 15, color: '#ffdd31' }} />
            })}

        </div>
    )
}
export default RatingBar

const listEmpty = [1, 2, 3, 4, 5]