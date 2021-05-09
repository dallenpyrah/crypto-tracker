import { api } from "./AxiosService";



class CoinService {

    async getOneCoin(id){
        try {
            const res = await api.get(id)
            console.log(res)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

}

export const coinsService = new CoinService();