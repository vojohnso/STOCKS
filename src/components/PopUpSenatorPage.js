import React from 'react'
import Button from '@material-ui/core/Button';
import './PopUp.css'

function PopUpSenatorPage(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <Button className="close-btn" onClick={() => false}   variant="outlined" color="primary">Close</Button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default PopUpSenatorPage   
