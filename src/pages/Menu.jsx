import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ListTable from '../services/listTable';
const Menu = () => {
    const { slug } = useParams()
    const listTable = new ListTable()



    useEffect(async () => {
        let infoStores = (await listTable.getInfoStoresBySlug(slug)).data[0]
        let listMenus = await listTable.getMenu(infoStores._id)
        let listReviews = await listTable.getReviews(infoStores._id)
        // console.log({listMenus,infoStores});
        console.log(listReviews);
    }, [])
    return (
        <div>

        </div>
    )
}

export default Menu