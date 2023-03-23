import React from 'react';
import"./SinglePlayer.css"

const SinglePlayer = ({player,cart,setCart}) => {
    const { strPlayer, idPlayer, strCutout } = player;
   // console.log(player);
    const handleAddToCart=()=>{
        const info={
            strPlayer,
            idPlayer,
            strCutout,
            price: 110,  
        };
        if (cart){
            const newPlayer=[...cart,info]; 
            setCart(newPlayer);
        }
    };
   // console.log(cart);

    return (
        <div className='card'>
              <img className="player-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>

          <button className='card-btn' >Details</button> 
          <button onClick={handleAddToCart } className='card-btn'>Add to cart</button>
          <button className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;