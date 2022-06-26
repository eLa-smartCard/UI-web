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
}