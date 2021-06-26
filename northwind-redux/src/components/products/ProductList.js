import React, { Component } from "react";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import { bindActionCreators } from "redux";
import { Table,Button } from "reactstrap";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"

class ProductList extends Component {

  componentDidMount() {  // life cycle event. uygulama açıldığında bunu çağırcaz
    this.props.actions.getProducts();
    console.log(this.props.actions.getProducts())
  }

  addToCart =(product)=>{
this.props.actions.addToCart({quantity:1,product}) // cartItem dediğim şey
alertify.success(product.productName + " sepete eklendi.")
  }

  render() {
    return (
      <div>
        <h3>
          Products : {this.props.currentCategory.categoryName} --{" "}
          {this.props.currentCategory.id}
         
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {
            this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><Button background-color='green' onClick={()=>this.addToCart(product)}> Sepete Ekle</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart,dispatch)
    }
  };
}
// biraz daha çalış
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
