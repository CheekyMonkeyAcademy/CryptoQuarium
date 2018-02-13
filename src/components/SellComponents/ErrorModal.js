import React, {Component} from "react";
// import PropTypes from "prop-types";

//For more on propTypes: https://themeteorchef.com/tutorials/what-are-proptypes
//https://daveceddia.com/open-modal-in-react/
class ErrorModal extends Component {

render() {
    if (this.props.isOpen === false)
        return null

    let modalStyle = {
        position: 'absolute',
        top: '40%',
        left: '40%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        margin: '10%',
        padding: '10%',
        borderRadius: '5px',
        border: '2px solid',
        borderColor: 'rgb(240, 248, 255)',
        backgroundColor: 'rgb(255,255,255)',
        color: 'rgb(0,0,0)',
        textAlign: 'center'
    }

    if (this.props.width && this.props.height) {
        modalStyle.width = this.props.width + 'px',
        modalStyle.height = this.props.height + 'px',
        modalStyle.marginLeft = '-' + (this.props.width/2) + 'px',
        modalStyle.marginTop = '-' + (this.props.height/2) + 'px',
        modalStyle.transform = null
    }

    if (this.props.style) {
        for (let key in this.props.style) {
            modalStyle[key] = this.props.style[key]
        }
    }

    let backdropStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.3)'
    }

    if (this.props.backdropStyle) {
        for (let key in this.props.backdropStyle) {
            backdropStyle[key] = this.props.backdropStyle[key]
        }
    }

    return (
    <div className={this.props.containerClassName}>
        <div className={this.props.className} style={modalStyle}>
            {this.props.children}
        </div>
        {!this.props.noBackdrop &&
        <div className={this.props.backdropClassName} style={backdropStyle}
            onClick={e => this.close(e)}/>}
        </div>
    )
}

close(e) {
    e.preventDefault()

    if (this.props.onClose) {
    this.props.onClose()
    }
}
}

export default ErrorModal;