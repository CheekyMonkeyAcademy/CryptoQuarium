import React, { Component } from 'react';
// import { render } from 'react-dom';

class Sidebar extends Component {
    //On set open needs to happen in app container and passed down!

    // overlayClicked = () => {
    //     if(this.props.open){
    //         this.props.onSetOpen(false)
    //     }
    // }


    return() {
        return (
            <div>
                <div>
                    <h6>Sidebar title</h6>
                </div>

                <div>                 
                    <h6>Sidebar Menu Items</h6>              
                </div>
            </div>
        )
    }
}

export default Sidebar;