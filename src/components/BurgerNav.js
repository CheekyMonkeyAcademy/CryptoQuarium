import React, {Component} from "react";
import {slide as Menu} from 'react-burger-menu';


class BurgerNav extends Component {
    showSettings (event){
        event.preventDefault();
    }

    render(){
        return (
            <Router>
                <div>
                    <Menu>
                        

                    </Menu>
                </div>
            </Router>
            
        )
    }
    
}