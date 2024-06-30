import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.interceptors.request.use(request => {
    request.headers.set('Content-Type', 'application/json')
    return request;
});

const getAllUsers = async () => {
    return await axiosInstance.get('/users').then((response) => response.data);
}
const getPostsOfUserById = async (Userid: number) =>{
    return await axiosInstance.get('/users/' + Userid + '/posts').then((response) => response.data)
};

const getCommentsOfPostById = async (postId: number) => {
    return await axiosInstance.get('/posts/' + postId + '/comments').then((response) => response.data)
}

export {getPostsOfUserById, getAllUsers, getCommentsOfPostById}