import React, { Fragment } from 'react'
import './Product.css';
import CardProduct from './CardProduct/CardProduct'
import { GlobalConsumer } from '../../../context/context';


class Product extends React.Component {
    // state={
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

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
                                    <div className='count'>{this.props.state.totalOrder}</div> 
                                </div>
                            </div>
                            <CardProduct/>
                        </Fragment>
        
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);
