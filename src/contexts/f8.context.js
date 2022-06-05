import api from '../services/api.service';




export default class ELearningContext {
    async login(data) {
        const response = api.post('/login', data);
        return response;
    }
    async getAllCourses() {
        const response = api.get('/courses');
        return response;
    }
    async getInfoCourseDefault(idCourse) {
        const response = api.get(`/course/default/${idCourse}`);
        return response;
    }
    async getInfoCourse(idCourse) {
        let data1 = JSON.parse(localStorage.getItem('eLearning_data'));
        if (!data1) return new Error();
        api.defaults.headers.Authorization = "Bearer " + data1.token;
        const response = api.get(`/course/${idCourse}`);
        return response;
    }
   
}