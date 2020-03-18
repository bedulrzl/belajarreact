import React, { Fragment } from 'react'
import Counter from './Counter'

class CardProduct extends React.Component {
    render () {
        return(           
                <div className='card'> 
                    <div className='img-thumb'>
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/BSB.jpg" alt=""/>
                    </div>
                    <p className='p-title'>Dada Ayam Frozen Tanpa Tulang [1 Carton - 5 Pack x 1Kg]</p>
                    <p className='p-harga'>Rp. 40.000</p>
                    <Counter/>                
                </div>
        
        )
    }
}

export default CardProduct;