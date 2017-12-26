import React, {Component} from "react";
import PropTypes from "prop-types";

//For more on propTypes: https://themeteorchef.com/tutorials/what-are-proptypes

class StatementModal extends Component {
    render(){      
        //Don't render anything if the show prop is false
        if(!this.props.show){
            return null;
        }

        return(       
            <div id="statementModal">
              <div className="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
                <button onClick = {this.props.onClose}> Close Account Statements </button>
              </div>              
            </div>
        );
    }
}

StatementModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool
};

export default StatementModal;