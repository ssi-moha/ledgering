import axios from "axios";

const etherscan = axios.create({
    baseURL: "https://api.etherscan.io/api",
    params: {
        apikey: process.env.REACT_APP_ETHERSCAN_API_KEY
    }
})

export default etherscan;