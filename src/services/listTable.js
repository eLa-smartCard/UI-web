import app from '../services/api.service';


app.authenticate({
    strategy: 'local',
    email: global.config.LANGF_EMAIL,
    password: global.config.LANGF_PASSWORD
})

export default class ListTable {
    async getFStores() {
        const fstoreService = await app.service('fstores');
        const result = await fstoreService.find();
        return result;
    }
    async getMenu(id) {
        const dishGroups = (await app.service('dishgroups').find({
            query: {
                fstore: id,
                $limit: 100
            }
        })).data
        let infoMenu = []
        for (let i = 0; i < dishGroups.length; i++) {
            let listDishes = (await this.getFoodMenu(dishGroups[i]._id)).data
            // console.log(listDishes);
            infoMenu.push({
                dishGroups: dishGroups[i].name,
                dishes: listDishes.map(item => {
                    return {
                        name: item.name,
                        price: item.price,
                        image: item.images
                    }
                })
            })
        }
        return infoMenu
    }
    async getFoodMenu(idDishGroups) {
        return await app.service('dishes').find({
            query: {
                dishgroup: idDishGroups,
                $limit: 100
            }
        })
    }
    async getInfoStoresBySlug(slug) {
        return await app.service('fstores').find({
            query: {
                slug: slug
            }
        })
    }
}