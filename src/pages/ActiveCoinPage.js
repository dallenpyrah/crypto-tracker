import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { selectedCoin, removeSelectedCoin} from '../redux/actions/CoinActions'
const ActiveCoinPage = () => {
    // @ts-ignore
    let  { id } = useParams();
    const coin = useSelector((state) => state.coin)
    const dispatch = useDispatch();

    const FetchCoin = async (id) => {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/' + id)
            dispatch(selectedCoin(res.data))
            console.log(res.data)
            console.log(coin)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id && id !== "") FetchCoin(id);
        return () => {
          dispatch(removeSelectedCoin());
        };
      }, [id]);
    
    return (
        <div className="text-light">ID: {id} {coin.name}</div>
    )
}

export default ActiveCoinPage
