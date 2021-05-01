import React, { Component } from 'react';
import receipts from '../data/receipts'
import styles from '../Styles/styles.css';
class Compilation extends Component {
    constructor(){
        super()
        this.state={
         receipts :receipts
  
           } 
        }
       

    
    render() {
        return (
            <div className='main'>
                
                {this.state.receipts[0].paid ? '': <receipt receipts={this.state.receipts[0]} />}
                <div className='container'>
                
                    <h2>Customer: {this.state.receipts[0].person}</h2>
                    <h3>Order</h3>
                    <li><span>Main: </span>{this.state.receipts[0].order.main}</li>
                    <li><span>Protein:</span>{this.state.receipts[0].order.protein}</li>
                    <li><span>Rice:</span>{this.state.receipts[0].order.rice}</li>
                    <li><span>Sauce:</span>{this.state.receipts[0].order.sauce}</li>
                    <li><span>Toppings: </span>{this.state.receipts[0].order.toppings[0]} ,{this.state.receipts[0].order.toppings[1]}</li>
                    <li><span>Drink: </span>{this.state.receipts[0].order.drink}</li>
                    <li><span>Cost:</span> ${this.state.receipts[0].order.cost}</li>
                    <li>{this.state.receipts[0].paid}</li>
                    
                    </div>
                    
        
          
                    {this.state.receipts[1].paid ? '' : <receipt receipts={this.state.receipts[1]} /> }  
                 <div className='containers'>
                    <h2>Customer: {this.state.receipts[1].person}</h2>
                    <h3>Order</h3>
                    <li><span>Main: </span>{this.state.receipts[1].order.main}</li>
                    <li><span>Protein: </span>{this.state.receipts[1].order.protein}</li>
                    <li><span>Rice: </span>{this.state.receipts[1].order.rice}</li>
                    <li><span>Sauce: </span>{this.state.receipts[1].order.sauce}</li>
                    <li><span>Toppings: </span>{this.state.receipts[1].order.toppings[0]} ,{this.state.receipts[1].order.toppings[1]}</li>
                    <li><span>Drink: </span>{this.state.receipts[1].order.drink}</li>
                    <li><span>Cost:</span> ${this.state.receipts[1].order.cost}</li>
                    <li>{this.state.receipts[1].paid}</li>    
                           
                   </div> 

                    {this.state.receipts[1].paid ? '' : <receipt receipts={this.state.receipts[1]} /> }    
                <div className='container2'>
                
              
                <h2>Customer: {this.state.receipts[2].person}</h2>
                <h3>Order</h3>
          
                <li><span>Main: </span>{this.state.receipts[2].order.main}</li>
                <li><span>Protein: </span>{this.state.receipts[2].order.protein}</li>
                <li><span>Rice:</span>{this.state.receipts[2].order.rice}</li>
                <li><span>Sauce:</span>{this.state.receipts[2].order.sauce}</li>
                <li><span>Toppings: </span>{this.state.receipts[2].order.toppings[0]} ,{this.state.receipts[2].order.toppings[1]}, {this.state.receipts[2].order.toppings[2]}</li>
                <li><span>Drink: </span>{this.state.receipts[2].order.drink}</li>
                <li><span>Cost:</span> ${this.state.receipts[2].order.cost}</li>
                <li>{this.state.receipts[2].paid}</li>
                </div>
                

               
           
        </div> );
    }

}
export default Compilation;