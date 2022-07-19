import LocalDiningIcon from '@material-ui/icons/LocalDining';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export const Sidebar = ({ label, children }) => {


    return (
        <div className=' rounded cursor-pointer bg-white'>
            <p className='font-bold text-sm mx-4 py-2'>{label}</p>
            <hr className='w-full' />
            <div>
                {children}
            </div>
        </div>
    )
}


export const ItemSidebar = ({ title,icon }) => {


    return (
        <div>
            <div className='flex items-center justify-between px-2 py-2 text-sidebar'>
                <div className='flex items-center '>
                    <div className='mr-2 text-sidebar'>
                        {icon}
                    </div>
                    <span className=''>{title}</span>
                </div>
                <ArrowForwardIosIcon style={{ fontSize: '10px' }} />
            </div>
            <hr />
        </div>
    )
}