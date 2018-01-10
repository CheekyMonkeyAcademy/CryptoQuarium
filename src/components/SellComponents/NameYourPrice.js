import React from "react"

const NameYourPrice = props => (
    <div>
        <input placeholder={props.price} id={props.id} type="number" min= "0" max="9999999"class="validate" />                    
        <label for="price">Name your price</label>

    </div>

)

export default NameYourPrice


<div className="row">
<div className="col s3">
    <div className="card">
        <div className="card-image">
            <img alt="" src="http://via.placeholder.com/140x100" />                        
            {/* <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => props.thisItemToMarket(props.id)}><i className="material-icons">local_offer</i></a> */}
        </div>
        <div className="card-content">
            <p>{props.species}</p>
            <p>id:{props.id}</p>                                    
            
          <input placeholder={props.price} type="number" min= "0" max="9999999"class="validate" />                    
          <label for="price">Name your price</label>

        </div>
    </div>
</div>
</div>
