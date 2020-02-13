import React, { Fragment } from 'react'

class CardProduct extends React.Component {
    state={
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue); 
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })

       
    }

    handleMinus = () => {
        if(this.state.order >0){
            this.setState({
                order: this.state.order - 1
            }, ()=> {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render () {
        return(           
                <div className='card'> 
                    <div className='img-thumb'>
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/BSB.jpg" alt=""/>
                    </div>
                    <p className='p-title'>Dada Ayam Frozen Tanpa Tulang [1 Carton - 5 Pack x 1Kg]</p>
                    <p className='p-harga'>Rp. 40.000</p>
                    <div className='head-btn'>
                        <button className='minus' onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className='tambah' onClick={this.handlePlus}>+</button>
                    </div>
                    
                </div>
        
        )
    }
}

export default CardProduct;