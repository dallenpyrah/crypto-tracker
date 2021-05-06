import React from 'react'

function Coin({ name, price, volume, marketCap, image, priceChange, symbol}) {
    return (
        <div>
            {name} {price} {volume} {marketCap} {priceChange} {symbol}
        </div>
    )
}

export default Coin
