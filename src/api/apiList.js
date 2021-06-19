import axiosAuth from './axios.config';

const apiWrapper = async (type, url, params) => {
    try {
        const response = await axiosAuth[type](`http://localhost:3000/${url}`, params)
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (err) {
        throw err;
    }
}

const apiList = {
    getAllChits: () => {
        return apiWrapper("get", "marketplace")
    },
    createChits: () => {
        return apiWrapper("post", "marketplace")
    },
    joinChits: () => {
        return apiWrapper("put", "marketplace")
    },
    getMyChits: () => {
        return apiWrapper("get", "dashboard")
    },
}

export default apiList