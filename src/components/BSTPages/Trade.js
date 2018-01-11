import React from "react"
import CartLogo from "../../Images/fish/store3.png";
import "../../Style/Trade.css";
import { Card, CardTitle, Button } from 'react-materialize'

const Trade = () =>
    <div className="container">

    <Card className='big #757575 grey darken-1'
        header={<CardTitle image={CartLogo}></CardTitle>}>
        <h4 className="center" >Fish Trading is not yet available for you.</h4>
        <div className="center">
		    <Button waves='light' node='a' href='https://giphy.com/gifs/u36Ow6jBvWCFW/html5'>Get early access</Button>
        </div>
    </Card>
    </div>


export default Trade;