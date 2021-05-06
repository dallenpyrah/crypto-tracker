
import React from 'react';
import { Badge } from 'react-bootstrap';
import './Coin.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
        <div className="col-9 card m-3 p-3 back-dark rounded">
            <div className="row mt-3 back-dark text-light">
                <div className="col-3 back-dark mb-3">
                    <h5><img className="" alt="" src={image} width="75px" /><span className="ml-5"><b>{name}</b></span></h5>
                </div>
                <div className="col-1 back-dark">
                    <h5 className="back-dark mt-4"><Badge>{symbol.toUpperCase()}</Badge></h5>
                </div>
                <div className="col-1 back-dark">
                    <h5 className="back-dark mt-4"><Badge>${price}</Badge></h5>
                </div>
                <div className="col-2 back-dark">
                    <h5 className="back-dark mt-4"><Badge>${volume.toLocaleString()}</Badge></h5>
                </div>
                <div className="col-2 back-dark">
                    {priceChange > 0 ? (
                    <h5 className="back-dark text-green mt-4">{priceChange.toFixed(2)}%</h5>
                    ) : (<h5 className="back-dark mt-4 text-red">{priceChange.toFixed(2)}%</h5>)}
                </div>
                <div className="col-2 back-dark">
                    <h5 className="back-dark mt-4"><Badge>Mk Cap ${marketcap.toLocaleString()}</Badge></h5>
                </div>
            </div>
        </div>
  );
};

export default Coin;