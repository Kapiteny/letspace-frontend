import api from "./api";


export const loginUser = async (data:{email: string; password: string}) => {
    const response = await api.post("/auth/login/", data);  

    return response.data;
}

export const getCurrentUser = async () => {
    const response = await api.get("auth/me/");

    return response.data;
}