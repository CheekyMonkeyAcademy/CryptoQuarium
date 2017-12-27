import React from "react"
import BuyInventory from "../BuyComponents/BuyInventory"
import BuyCart from "../BuyComponents/BuyCart"


const Buy = () =>
    <div>
        <div className="row">
            <div className="col s8">
            <h5>Buy Fish and Accoutrement</h5>
            </div>
        </div>
        
        <div className="row">
            <div className="col s9">
                <BuyInventory />                
            </div>

            <div className="col s3">
                <BuyCart />
            </div>
        </div>
    </div>;

export default Buy;