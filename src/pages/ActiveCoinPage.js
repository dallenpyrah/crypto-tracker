import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedCoin, removeSelectedCoin} from '../redux/actions/CoinActions'
import '../App.css';
export default function ActiveCoinPage(){
    // @ts-ignore
    const  { id } = useParams();
    const state = useSelector(state  => state)
    const [coin, setCoin] = useState([])
    const dispatch = useDispatch()

    const FetchCoin = async (id) => {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/' + id)
            dispatch(selectedCoin(res.data))
            setCoin(res.data)
            console.log(res.data)
            console.log(state)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id === ""){
            return () => {
                dispatch(removeSelectedCoin());
              };
             } 
        FetchCoin(id);
      }, []);
    
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="" sm={3}>
                    <h3 className="text-light text-center coin-class">{coin.name}</h3>
                    {coin.market_data.current_price.usd}
                </Col>
            </Row>
        </Container>
    )
}
