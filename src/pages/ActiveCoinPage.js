import axios from 'axios';
import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { selectedCoin, removeSelectedCoin} from '../redux/actions/CoinActions'
import '../App.css';
const ActiveCoinPage = () => {
    let  { id } = useParams();
    const state = useSelector((state) => { return state })
    const dispatch = useDispatch()

    const FetchCoin = async (id) => {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/' + id)
            dispatch(selectedCoin(res.data))
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
                    <h3 className="text-light text-center coin-class">{state.coin.name}</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default ActiveCoinPage
