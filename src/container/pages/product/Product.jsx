import React, { Fragment } from 'react'
import './Product.css';
import CardProduct from './CardProduct/CardProduct';

class Product extends React.Component {
    state={
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render () {
        return(
            <Fragment>
                <h3>Product</h3>
                <hr/>
                <div className='header'>
                    <div className='logo'>
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.png" alt=""/>
                    </div>
                    <div className='troley'>
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt=""/>
                        <div className='count'>{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default Product;