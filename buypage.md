//buy.js
class Buy extends Component {

    render(){
        return (
                
            <div>
                <div className="row">
                    <div className="col s8">
                        <h5>Buy Fish and Accoutrement</h5>
                    </div>           
                </div>
                
                <div className="row">
                    <div className="col s8">
                        <BuyInventory />                
                    </div>

                    <div className="col s4">
                        <BuyCart />
                    </div>
                </div>
            </div>
        )
    }
}


//buyINventory

    state = {
        fishArray:[], 
        cartArray: []
    }
    

    //Function handling 'add item to cart' button on inventory card
        //The prop being passed in in this case is the id
        //Second part of function after setState handles async issue 
        //THE CART ARRAY IS NOW POPULATING WITH THE CORRECT ITEMS CLICKED!!!
    clickItem = (id, clickItem) => {
        //Am I grabbing the correct id when I click? --YES!!!!!!
        console.log(`You clicked ${id}`);
        this.setState({cartArray: this.state.cartArray.concat([id])}, () => {
            console.log(this.state.cartArray)  
            }
        );                  
    } 

    //On this route, take fish from database and push them into the fishArray 
        //defined in the state above
    componentDidMount() {
        axios.get('/api/allFishTemplates')
        .then((allfish) => {
          console.log(allfish);
                allfish.data.forEach((fish) => {
                    this.setState({fishArray: this.state.fishArray.concat([fish])});                   
                })      
            console.log("This is fish array")  
            console.log(this.state.fishArray)              
        })
        .catch((err) => {
          console.log(err);
        })    
    }     

    render(){
        return(

            <div className="inventoryBorder">
                
                {this.state.fishArray.map(fish => {
                    return <InventoryCards {...fish}
                    clickItem = {this.clickItem}
                    key={fish.id} />
                })}
            
            </div>
        )
    }

}

export default BuyInventory;
  
    state = {
        fishArray:[], 
        cartArray: []
    }
    

    //Function handling 'add item to cart' button on inventory card
        //The prop being passed in in this case is the id
        //Second part of function after setState handles async issue 
        //THE CART ARRAY IS NOW POPULATING WITH THE CORRECT ITEMS CLICKED!!!
    clickItem = (id, clickItem) => {
        //Am I grabbing the correct id when I click? --YES!!!!!!
        console.log(`You clicked ${id}`);
        this.setState({cartArray: this.state.cartArray.concat([id])}, () => {
            console.log(this.state.cartArray)  
            }
        );                  
    } 

    //On this route, take fish from database and push them into the fishArray 
        //defined in the state above
    componentDidMount() {
        axios.get('/api/allFishTemplates')
        .then((allfish) => {
          console.log(allfish);
                allfish.data.forEach((fish) => {
                    this.setState({fishArray: this.state.fishArray.concat([fish])});                   
                })      
            console.log("This is fish array")  
            console.log(this.state.fishArray)              
        })
        .catch((err) => {
          console.log(err);
        })    
    }     

    render(){
        return(

            <div className="inventoryBorder">
                
                {this.state.fishArray.map(fish => {
                    return <InventoryCards {...fish}
                    clickItem = {this.clickItem}
                    key={fish.id} />
                })}
            
            </div>
        )
    }

}

export default BuyInventory;

//buycart
render() {
        return (
            <div>
                <div class="row">
                    <div class="col s12">
                    <div class="card teal lighten-2">
                        <div class="card-content white-text">
                            <span class="card-title">Shopping Cart</span>
                                <CartItems />
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn black"><i class="material-icons left">done</i>checkout</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

//cart items
 <div>
        <div class="row">
            <div class="col s12">
                <div class="card white">
                    <div class="card-content black-text">
                        <span class="card-title">Item Name</span>
                            <p>Item Description: Lorem ipsum yada yada nada nada</p>
                    </div>
                    <div class="card-action black-text">
                        <p>$ {props.price}</p>
                        <div>
                            <div class="input-field inline black-text">
                                <input id="email" type="email" class="validate" placeholder="Quantity" />
                                <label for="email" data-error="wrong" data-success="right"></label>

                                
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>    
    </div>


    