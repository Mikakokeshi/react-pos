import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Product extends Component {
 constructor(props) {
   super(props);
   this.state = {qty:0};
   this.buy = this.buy.bind(this);
   this.show =this.show.bind(this);
   this.bawas =this.bawas.bind(this);
 }


 buy(){
   this.setState({qty: this.state.qty + 1});
   this.props.handleTotal(this.props.price);
 }


 show(){
   this.props.handleShow(this.props.details);
 }

bawas(){
   this.setState({qty: this.state.qty - 1});
   this.props.handleTotal(-this.props.price);
 }


 render() {
   return (
     <div>
     <p> {this.props.name} = ${this.props.price}</p>
         <button onClick={this.buy}>+</button>
         <button onClick={this.bawas}>-</button>
         <button onClick={this.show}>show</button>
    　<p>  <img src={this.props.image}/></p>
         <p>Quantity: {this.state.qty}</p>
         <h3>${this.state.qty*this.props.price}</h3>

     </div>
   );
 }
}

class Total extends Component {
 render() {
   return (
     <div>
       <h3>Total balance: ${this.props.total} </h3>
     </div>
   );
 }
}



class ProductList extends Component {


constructor(props) {
 super(props);
 this.state={total:0,
     productList:
 [{name: "Coffee", price: 1, image: require("./img/coffee.jpg")},
 {name: "Hot chocolate", price: 2, image: require("./img/choco.jpg")},
 {name: "Calbonara", price: 8, image: require("./img/pasta1.jpeg")},
 {name: "pesto pasta", price: 8, image: require("./img/pasta2.jpg")},
 {name: "Sandwich", price: 7, image: require("./img/sand.jpg")},
 {name: "Sarada", price: 6, image: require("./img/sarada.jpg")}]
 };
 this.calcTotal = this.calcTotal.bind(this);
 this.createProduct = this.createProduct.bind(this);
 this.showProduct = this.showProduct.bind(this);
}

calcTotal(price) {
 this.setState({total: this.state.total + price})
}


showProduct(details){
 alert("Info: " + details);
}

createProduct(product) {
 this.setState({
   productList: this.state.productList.concat(product)
 });
}

 render(){
   var component = this;
   var products = this.state.productList.map(function(prod){
   return(
  <div>
      <img src={prod.image} className="image-box img-responsive"/>

      <Product name={prod.name} price={prod.price}
      handleShow={component.showProduct}
      handleTotal={component.calcTotal}/><br/><br/>

  </div>
     );
     });
         return(
           <div>
             {products}
             <p><Total total={this.state.total}/ ></p>
           </div>

     );
     }}


export default ProductList;
