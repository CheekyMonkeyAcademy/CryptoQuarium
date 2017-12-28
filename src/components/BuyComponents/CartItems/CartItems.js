const CartItems = props => (
    <div>
        <div className="row">
            <div className="col s12">                
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="cartImage" src="http://via.placeholder.com/120x150" />                
                    </div>

                    <div className="card-stacked">
                        <div className="card-content">
                            <p>Blue Fish</p>                                                      
                        </div>
                    </div>

                    <div className="card-action">
                        <p>Price</p>
                        <div class="input-field inline">
                            <input id="email" type="email" class="validate" placeholder="Quantity"/>
                                <label for="email" data-error="wrong" data-success="right"></label>
                        </div>                                
                    </div> 
                </div>
            </div>                  
        </div>
    </div>
    

);

export default CartItems; 

