
import React from 'react';
import { Badge } from 'react-bootstrap';
import './Coin.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from "react-router-dom"



const Coin = ({
    id,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
    const history = useHistory()

    const routeChange = () => {
    history.push(`/coin/${id}`)
    }
  return (
        <div onClick={routeChange} className="col-9 card m-3 p-3 back-dark rounded hover">
            <div className="row mt-3 back-dark text-light">
                <div className="col-3 back-dark mb-3">
                    <h5 className="back-dark"><img className="back-dark" alt="" src={image} width="75px" /><span className="ml-5"><b className="back-dark">{name}</b></span></h5>
                </div>
                <div className="col-1 back-dark">
                    <h5 className="back-dark mt-4"><Badge className="back-dark">{symbol.toUpperCase()}</Badge></h5>
                </div>
                <div className="col-1 back-dark">
                    <h5 className="back-dark mt-4"><Badge className="back-dark">${price}</Badge></h5>
                </div>
                <div className="col-2 back-dark">
                    <h5 className="back-dark mt-4"><Badge className="back-dark">${volume.toLocaleString()}</Badge></h5>
                </div>
                <div className="col-2 back-dark">
                    {priceChange > 0 ? (
                    <h5 className="back-dark text-green mt-4">{priceChange.toFixed(2)}%</h5>
                    ) : (<h5 className="back-dark mt-4 text-red">{priceChange.toFixed(2)}%</h5>)}
                </div>
                <div className="col-2 back-dark">
                    <h5 className="back-dark mt-4"><Badge className="back-dark">Mk Cap ${marketcap.toLocaleString()}</Badge></h5>
                </div>
            </div>
        </div>
  );
};

export default Coin;