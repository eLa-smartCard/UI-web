import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListTable from '../services/listTable';
import default_cover from '../assets/default-cover.png'
import LoadingPage from '../components/Loading/LoadingPage';

const useStyles = makeStyles({
    root: {
        width: '370px',
        height: '370px',
    }
});

const Menu = () => {
    const classes = useStyles();
    const { slug } = useParams()
    const listTable = new ListTable()

    const [info, setInfo] = useState({})
    const [listItems, setListItems] = useState([])
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(async () => {
        let infoStores = (await listTable.getInfoStoresBySlug(slug)).data[0]
        let listMenus = await listTable.getMenu(infoStores._id)
        let listReviews = await listTable.getReviews(infoStores._id)
        console.log(listReviews);
        setInfo(infoStores)
        setListItems(listMenus)
        setReviews(listReviews)

        setLoading(false)
    }, [])

    const [show, setShow] = useState(true)
    const handleShow = () => {
        setShow(!show);
    }
    return (
        <>
            <div>
                <div className='relative w-full h-80 m-0 z-0'>
                    <img className='w-full h-full object-cover' src={info.avatar} alt="" />
                </div>
                <div className='md:max-w-5xl md:grid md:grid-cols-[4fr_9fr_7fr] md:mx-auto md:mb-6 flex flex-col items-center'>
                    <div className='relative md:w-[170px] md:h-[170px] p-2 md:mx-6 md:mt-[-50%] rounded-xl overflow-hidden shadow-lg bg-white
                w-[370px] h-[370px] mt-[-25%]'>
                        <img className='w-full h-full rounded-md object-cover' src={info.avatar} alt="" />
                    </div>
                    <div className='mx-6 text-center md:text-left'>
                        <h1 className='text-xl font-semibold text-ela my-3'>{info.name}</h1>
                        <div className=''>
                            <span className='min-w-150px py-1 px-4 bg-[#388e3c] rounded-[25px] text-sm text-white'>Khu vực khác</span>
                        </div>
                    </div>
                    <div className='mx-6'>
                        <a className='flex flex-row items-center no-underline my-3' href="">
                            <span className='bg-[#0097a7] p-1 text-white rounded'>
                                <svg data-v-7266ac5c="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="map" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-map b-icon bi"><g data-v-7266ac5c=""><path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"></path></g></svg>
                            </span>
                            <span className='text-sm text-ela mx-2 overflow-hidden' style={{ "display": "-webkit-box", "WebkitBoxOrient": "vertical", "WebkitLineClamp": "1" }}>{info.address}</span>
                        </a>
                    </div>
                </div>
                <div className='md:max-w-5xl md:grid md:grid-cols-[7fr_3fr] mx-auto md:mb-6 flex flex-col max-w-xl'>
                    {
                        show ?
                            (
                                <div className='px-4'>
                                    <div className='flex flex-row'>
                                        <button className='min-w-[90px] bg-ela text-sm text-white px-4 py-2 rounded mr-2'
                                            onClick={handleShow}
                                        >Thực đơn</button>
                                        <button className='min-w-[90px] bg-white text-ela text-sm px-4 py-2 rounded hover:text-[#ff0a0a]'
                                            onClick={handleShow}
                                        >Review</button>
                                    </div>
                                    <div className='mt-6'>
                                        {
                                            listItems.map((item, index) => {
                                                return (
                                                    <div className='border-[1px] border-solid border-[#00000020] p-4 first:rounded-t last:rounded-b'>
                                                        <h3 className='text-base font-semibold mb-4 '>{item.dishGroups}</h3>
                                                        <ul className='m-0 p-0'>
                                                            {
                                                                item.dishes.map((item, index) => {
                                                                    return (
                                                                        <li className='flex flex-row justify-between py-3 border-y'>
                                                                            <div className='flex flex-row'>
                                                                                <div className='w-12 h-12 relative object-cover'
                                                                                    style={{
                                                                                        backgroundImage: `url("${item.image}"),url("${default_cover}")`,
                                                                                        backgroundPosition: 'center',
                                                                                        backgroundSize: 'cover',
                                                                                        backgroundRepeat: 'no-repeat'
                                                                                    }}
                                                                                ></div>
                                                                                {/* <img className='w-12 h-12' src={item.image || '../assets/default-cover.png'} alt="" /> */}
                                                                                <span className='text-sm font-medium ml-4'>{item.name}</span>
                                                                            </div>
                                                                            <span className='text-sm font-medium text-[#ff5656]'>{item.price} ₫</span>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className='px-4'>
                                    <div className='flex flex-row'>
                                        <button className='min-w-[90px]  bg-white text-ela text-sm px-4 py-2 rounded hover:text-[#ff0a0a]'
                                            onClick={handleShow}
                                        >Thực đơn</button>
                                        <button className='min-w-[90px] bg-ela text-sm text-white px-4 py-2 rounded mr-2'
                                            onClick={handleShow}
                                        >Review</button>
                                    </div>
                                    <div className='mt-6'>
                                        <div className='border-[1px] border-solid border-[#00000020] px-6 py-1 first:rounded-t last:rounded-b'>
                                            <ul className='m-0 p-2'>
                                                {
                                                    reviews.length > 0 ?
                                                        (
                                                            <li className='flex flex-row mt-6 py-2 border-y'>
                                                                <div className='px-2 py-1 w-6 h-6 flex items-center justify-center bg-[#f57f17] rounded text-white text-sm'>5</div>
                                                                <div className='ml-4 text-[#212529]'>
                                                                    <h4 className='text-sm'>Chất lượng ok, mỗi tội quán hơi chìm nên khó tìm ạ</h4>
                                                                    <span className='text-xs italic font-light'>Đánh giá bởi Thanh Thanh</span>
                                                                </div>
                                                            </li>
                                                        )
                                                        :
                                                        (
                                                            <span className='text-sm italic font-light'>Chưa có review nào?</span>
                                                        )
                                                }
                                            </ul>
                                        </div>
                                        <div className='mt-6 text-center'>
                                            <button className='min-w-[90px] bg-ela text-sm text-white px-4 py-2 rounded mr-2'>REVIEW NGAY</button>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                    <div className='px-4 mt-4 md:mt-0'>
                        <div className="relative bg-ela text-white font-medium text-sm px-6 py-4 md:px-4 md:py-2 rounded">
                            <span>7h - 22h: giảm 30%, 22h -7h: giảm 10%</span>
                        </div>
                        <div className='pt-6'>
                            <a href="https://www.facebook.com/groups/anchoilangdaihoc/permalink/3400496643322683/">
                                <img className='rounded overflow-hidden' src="https://www.esinhvien.vn/_nuxt/img/acsv2.8c2101c.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div >
            {
                loading &&
                <LoadingPage />
            }
        </>
    )
}

export default Menu;