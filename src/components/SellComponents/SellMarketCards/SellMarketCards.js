import React from "react"

const SellMarketCards = props => (
    <div>        
        <div className="row">
            <div className="col s12">

                <div className="card white">                    
                    <div className="card-action black-text">
                        {/* TODO render the fish here */}
                        <p>Species: {props.species}</p>

                        <p>$ {props.price}</p>
                        <a onClick={() => props.removeFromSelling(props.id)}>
                            <i className="material-icons">cancel</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>    
    </div>
);

export default SellMarketCards; 

