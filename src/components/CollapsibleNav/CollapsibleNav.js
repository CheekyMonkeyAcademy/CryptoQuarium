import React, {Component} from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';

import './CollapsibleNav.css';

class CollapsibleNav extends Component {
    render(){
        return (
            <Collapsible>
                <CollapsibleItem header='First' icon='filter_drama'>
                    Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                <CollapsibleItem header='Second' icon='place'>
                    Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                <CollapsibleItem header='Third' icon='whatshot'>
                    Lorem ipsum dolor sit amet.
                </CollapsibleItem>
            </Collapsible>
        )
    }    
}

export default CollapsibleNav;
