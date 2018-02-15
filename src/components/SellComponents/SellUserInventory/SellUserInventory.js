import React, {Component} from "react";
// import axios from 'axios';
import SellCards from '../SellCards'
import Modal from 'react-modal'

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
                       
                    />
                }, this)}        
                
                <Modal 
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.closeModal}
                    parentSelector = {this.props.getParent}
                    style = {customStyles}
                    // className="Modal"     
                    // overlayClassName="Overlay"        
                >
                    Sell for a higher price
                    <button onClick={() => this.props.closeModal()}>close</button>
                </Modal>
            </div>
        )
    }
}




export default SellUserInventory;