import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ListTable from '../services/listTable';
const Menu = () => {
    const { slug } = useParams()
    const listTable = new ListTable()



    useEffect(async () => {
        let infoStores = (await listTable.getInfoStoresBySlug(slug)).data[0]
        let listMenu = await listTable.getMenu(infoStores._id)
        console.log(listMenu);
    }, [])
    return (
        <div>

        </div>
    )
}

export default Menu