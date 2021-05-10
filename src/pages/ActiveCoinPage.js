import axios from 'axios';
import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
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
      }, []);
    
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col sm={3}>
                    <div className="card bg-dark text-center">
                        <h3 className="bg-dark text-light mt-2">{coin.name}</h3>
                        <div className="card bg-secondary text-left">
                            <h6></h6>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="card bg-dark text-center">
                        <h3 className="bg-dark text-light mt-2">News</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ActiveCoinPage
