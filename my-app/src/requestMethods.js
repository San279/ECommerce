import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDhjMTFmYjViN2E4MTJiMzc4ZGYzMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTkyNjkyNiwiZXhwIjoxNjkyMTg2MTI2fQ.WClgrA3SnwdGKqbxxyztk2rZSAhpTU8rLOsxRt-K5_s";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDM0MjY5Y2VhOWUyOWFlNGY1OGRmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTI3MjYzNDMsImV4cCI6MTY5NDQ1NDM0M30.DW3aG0sXhRqW7vLHtz55ip0YN-pk0IhVw4_WYjBqXjs"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`},
});