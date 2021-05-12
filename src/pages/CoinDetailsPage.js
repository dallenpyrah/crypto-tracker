import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import '../App.css';
export default function ActiveCoinPage(){
    let { id } = useParams()
    const [coin, setCoin] = useState([])
    const { name, market_data } = coin;

    const fetchCoin = async (id) => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/' + id)
        console.log(res.data)
        setCoin(res.data)
        console.log(coin)
    }
    useEffect(() => {
        fetchCoin(id)
      }, []);
    
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="" sm={3}>
                    {name}
                    {market_data.current_price.usd}
                </Col>
            </Row>
        </Container>
    )
}