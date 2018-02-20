import React, {Component} from "react";
import SellCards from '../SellCards';
import Modal from 'react-modal';
import "../SellCards/SellCards.css";

const customStyles = {
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
    }
};

class SellUserInventory extends Component {
    
    //FUNCTION THAT CALLS ALL THIS USERS FISH FROM THE DATABASE
    componentDidMount(){
        {this.props.getAllUserFish()}    
    }

    render(){
        return(
            <div>
                {this.props.myFishArray.map(fish => {
                    return <SellCards {...fish}
                        thisItemToMarket = {this.props.thisItemToMarket}
                        handlePriceChange = {this.props.handlePriceChange}                        
                        key = {fish.id}
                        inputColors= {this.props.inputColors}

                        closeModal={this.props.closeModal}
                        modalIsOpen= {this.props.modalIsOpen}
                        getParent = {this.props.getParent}
                        stopSellingThisFish = {this.props.stopSellingThisFish} 
                    />
                }, this)}        
                
                <Modal 
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.closeModal}
                    parentSelector = {this.props.getParent}
                    // style = {customStyles}
                    className="Modal"     
                    overlayClassName="Overlay"        
                >
                    <h4>Sell for a higher price</h4>
                    <a class="waves-effect waves-light btn red lighten-5 black-text" onClick={() => this.props.closeModal()}>Close</a>
                    
                </Modal>
            </div>
        )
    }
}




export default SellUserInventory;

{/* <button onClick={() => this.props.closeModal()}>close</button> */}