import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListTable from '../services/listTable';
import default_cover from '../assets/default-cover.png'

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
    useEffect(async () => {
        let infoStores = (await listTable.getInfoStoresBySlug(slug)).data[0]
        let listMenu = await listTable.getMenu(infoStores._id)
        setInfo(infoStores)
        setListItems(listMenu)
    }, [])

    const [show, setShow] = useState(true)
    const handleShow = () => {
        setShow(!show);
    }
    console.log(info);
    return (
        <div>
            <div className='relative w-full h-80 m-0 z-0'>
                <img className='w-full h-full object-cover' src={info.avatar} alt="" />
            </div>
            <div className='max-w-5xl grid grid-cols-[4fr_9fr_7fr] mx-auto mb-6 md:flex md:flex-col md:items-center'>
                <div className='relative w-[170px] h-[170px] p-2 mx-6 mt-[-50%] rounded-xl overflow-hidden shadow-lg bg-white
                md:w-[370px] md:h-[370px] md:mt-[-30%]'>
                    <img className='w-full h-full rounded-md object-cover' src={info.avatar} alt="" />
                </div>
                <div className='mx-6 md:text-center'>
                    <h1 className='text-xl font-semibold text-[#f3648c] my-3'>{info.name}</h1>
                    <div className=''>
                        <span className='min-w-150px py-1 px-4 bg-[#388e3c] rounded-[25px] text-sm text-white'>Khu vực khác</span>
                    </div>
                </div>
                <div className='mx-6'>
                    <a className='flex flex-row items-center no-underline my-3' href="">
                        <span className='bg-[#0097a7] p-1 text-white rounded'>
                            <svg data-v-7266ac5c="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="map" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-map b-icon bi"><g data-v-7266ac5c=""><path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"></path></g></svg>
                        </span>
                        <span className='text-sm text-[#ff5656] mx-2 overflow-hidden' style={{ "display": "-webkit-box", "WebkitBoxOrient": "vertical", "WebkitLineClamp": "1" }}>{info.address}</span>
                    </a>
                </div>
            </div>
            <div className='max-w-5xl grid grid-cols-[7fr_3fr] mx-auto mb-6 md:flex md:flex-col md:max-w-xl'>
                {
                    show ?
                        (
                            <div className='px-4'>
                                <div className='flex flex-row'>
                                    <button className='min-w-[90px] bg-[#ff5656] text-sm text-white px-4 py-2 rounded mr-2'
                                        onClick={handleShow}
                                    >Thực đơn</button>
                                    <button className='min-w-[90px] bg-white text-[#ff5656] text-sm px-4 py-2 rounded hover:text-[#ff0a0a]'
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
                                    <button className='min-w-[90px]  bg-white text-[#ff5656] text-sm px-4 py-2 rounded hover:text-[#ff0a0a]'
                                        onClick={handleShow}
                                    >Thực đơn</button>
                                    <button className='min-w-[90px] bg-[#ff5656] text-sm text-white px-4 py-2 rounded mr-2'
                                        onClick={handleShow}
                                    >Review</button>
                                </div>
                                <div className='mt-6'>
                                    <div className='border-[1px] border-solid border-[#00000020] px-6 py-1 first:rounded-t last:rounded-b'>
                                        <ul className='m-0 p-0'>
                                            <li className='flex flex-row mt-6 py-3 border-y'>
                                                <div className='px-2 py-1 w-6 h-6 flex items-center justify-center bg-[#f57f17] rounded text-white text-sm'>5</div>
                                                <div className='ml-4 text-[#212529]'>
                                                    <h4 className='text-sm'>Chất lượng ok, mỗi tội quán hơi chìm nên khó tìm ạ</h4>
                                                    <span className='text-xs italic font-light'>Đánh giá bởi Thanh Thanh</span>
                                                </div>
                                            </li>
                                            <li className='flex flex-row mt-6 py-3 border-y'>
                                                <div className='px-2 py-1 w-6 h-6 flex items-center justify-center bg-[#f57f17] rounded text-white text-sm'>5</div>
                                                <div className='ml-4 text-[#212529]'>
                                                    <h4 className='text-sm'>Chất lượng ok, mỗi tội quán hơi chìm nên khó tìm ạ</h4>
                                                    <span className='text-xs italic font-light'>Đánh giá bởi Thanh Thanh</span>
                                                </div>
                                            </li>
                                            <li className='flex flex-row mt-6 py-3 border-y'>
                                                <div className='px-2 py-1 w-6 h-6 flex items-center justify-center bg-[#f57f17] rounded text-white text-sm'>5</div>
                                                <div className='ml-4 text-[#212529]'>
                                                    <h4 className='text-sm'>Chất lượng ok, mỗi tội quán hơi chìm nên khó tìm ạ</h4>
                                                    <span className='text-xs italic font-light'>Đánh giá bởi Thanh Thanh</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='mt-6 text-center'>
                                        <button className='min-w-[90px] bg-[#ff5656] text-sm text-white px-4 py-2 rounded mr-2'>REVIEW NGAY</button>
                                    </div>
                                </div>
                            </div>
                        )
                }
                <div className='px-4 md:mt-4'>
                    <div className="relative bg-[#f3648c] text-white font-medium text-sm px-4 py-2 
                    before:content-[''] before:absolute  before:inset-0 before:w-3 before:border-x-[15px] before:border-y-[18px] before:left-[-11%] md:before:left-[-30px] before:border-t-transparent before:border-l-transparent before:border-b-transparent before:border-r-[#f3648c]
                    after:content-[''] after:absolute  after:top-0 after:w-3 after:border-x-[15px] after:border-y-[18px] after:right-[-11%] md:after:right-[-30px] after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-[#f3648c]">
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
    )
}

export default Menu;