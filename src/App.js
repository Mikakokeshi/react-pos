import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

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
      }
      // bind = 結束, Add a function that will catch the price whenever an item is added to the cart, and add that to our total.

      calcTotal(price) {
       this.setState({total: this.state.total + price})
      }

      createProduct(product) {
       this.setState({
         productList: this.state.productList.concat(product)
       });
      }

       render(){
        //  ↓　Why do we need to put this into a variacle? What is for?
         var component = this;
         var products = this.state.productList.map(function(prod){
         return(
             // ↓ class Product render引用,  ↓ prod:function(prod)
          <div>
            <img src={prod.image}/>
            <Product name={prod.name} price={prod.price}
            handleTotal={component.calcTotal}/>
           <br/><br/>
          </div>
          );
         });

         return(
            <div>
               {products}
            <Total total={this.state.total}/>
            </div>
           );
         }}

         // {products}: var products　引用, Total total:class Total 引用  <


class Product extends Component {
        constructor(props) {
          super(props);
          this.state = {qty:0};
          this.buy = this.buy.bind(this);
          this.bawas =this.bawas.bind(this);
        }

        buy(){
          this.setState({qty: this.state.qty + 1});
          this.props.handleTotal(this.props.price);
        }
// props : productList内の component　の要素 を受け継いでる？

        bawas(){
          this.setState({qty: this.state.qty - 1});
          this.props.handleTotal(-this.props.price);
        }


        render() {
          return (
            <div >
                <p>{this.props.name}  ${this.props.price}* {this.state.qty} = <strong>${this.state.qty*this.props.price}</strong></p>
                    <button onClick={this.buy} id="buttonqty">+</button>
                    <button onClick={this.bawas}  id="buttonqty">－</button>
              　    <img src={this.props.image}/>
                    <p></p>
            </div>
      );
      }
  }


class Total extends Component {
     render() {
       return (
         <div>
            <h5>Total balance: ${this.props.total} </h5>
         </div>
     );
   　}
 }

//  class productList　出力
// Product &　Total class は既に return 内で引用されている
export default ProductList;
