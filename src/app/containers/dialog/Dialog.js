import React from "react";
import './Dialog.scss';

import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Card from './../card/Card';

function Dialog(props) {

  return (
    <Card 
      className={`Dialog box-shadow ${props.className}`}
      style={{...props.style}}
    > 
        <div>
          <div className="dialog-navbar">
            <h1>
              {props.title}
            </h1>
            <FontAwesomeIcon icon={faTimes} onClick={() => props.closeDialog()}></FontAwesomeIcon>
          </div>
          <div className="dialog-content">
            {props.children}
          </div>
        </div>
    </Card>
  );
}

export default Dialog;
