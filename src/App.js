import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './App.css';
import Coin from './Coin';

function App() {

  const [coins, setCoins] = useState([])

  const [search, setSearch] = useState('')
  useEffect(() => { 
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoins(res.data)
      console.log(res.data)
    }).catch(error => console.log(error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <Row>
        <Col><Form><input className="form-control" onChange={handleChange} placeholder="Search" ></input></Form></Col>
      </Row>
      <Row>{filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} name={coin.name} symbol={coin.symbol} price={coin.current_price} volume={coin.total_volume} marketcap={coin.market_cap}
          image={coin.image} priceChange={coin.price_change_percentage_24h}/>
        )
      })}</Row>
    </Container>
  );
}
export default App;
