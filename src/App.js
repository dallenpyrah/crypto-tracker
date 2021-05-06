import axios from 'axios'
import { useEffect, useState } from 'react';
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
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form>
              <input className="coin-search" onChange={handleChange} placeholder="Search" ></input>
            </form>
          </div>
          <div className="col-12">
            {filteredCoins.map(coin => {
              return (
                <Coin key={coin.id} name={coin.name} symbol={coin.symbol} price={coin.current_price} volume={coin.total_volume} marketCap={coin.market_cap}
                image={coin.image} priceChange={coin.price_change_percentage_24h}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
