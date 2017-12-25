import React, {Component} from "react";

class StatementModal extends Component {
    render(){
        return(                
            
            <div id="modal1" className={this.props.show ? 'modal open' : 'modal'}>
              <div className="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
              </div>              
            </div>
        )
    }
}

export default StatementModal;