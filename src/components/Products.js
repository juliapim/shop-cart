import React, { Component } from "react";
import { connect } from 'react-redux';

class Products extends Component {
  render() {
    let product = this.props.items;
    let productMap = product.map((product) => <div><li>{product.title} | $ {product.price} | x {product.inventory}</li>
    <button>Add to cart</button>
    <div className='cart'></div>
    <h3>Total:$</h3>
    </div>);

    return <div>{productMap}</div>;
  }
}
let mapStateToProps = (state) => ({
  items: state.items,
});

  
  export default connect(mapStateToProps)(Products);

