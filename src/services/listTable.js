import app from '../services/api.service';


app.authenticate({
    strategy: 'local',
    email: global.config.LANGF_EMAIL,
    password: global.config.LANGF_PASSWORD
})

export default class ListTable {
    async getEmemberStores(){
        const fstoreService = await app.service('fstores');
        const result = await fstoreService.find({
            query: {
                $limit: 20,
                isshow:true,
                isparter:true,
            }
        });
        return result;
    }
    async getFStores() {
        const fstoreService = await app.service('fstores');
        const result = await fstoreService.find({
            query: {
                $limit: 10,
                isShow:true
            }
        });
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
    async getInfoUserById(_id) {
        return await app.service('users').find({
            query: {
                _id
            }
        })
    }
    async findReviews(idStore) {
        return await app.service('reviews').find({
            query: {
                fstore: idStore
            }
        })
    }
    async getReviews(idStore) {
        let list = (await this.findReviews(idStore)).data
        let listReviews = []
        for (let i = 0; i < list.length; i++) {
            let infoUser =(await this.getInfoUserById(list[i].user)).data[0]
            // console.log(infoUser);
            listReviews.push({
                email:infoUser.email,
                name: infoUser.name,
                isEMember:infoUser.isEMember,
                content: list[i].content,
                createdAt: list[i].createdAt
            })
        }
        return listReviews
    }
    async
}