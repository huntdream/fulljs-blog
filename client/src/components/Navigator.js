import React, { Component } from 'react';


const Navigator = (props) => (
    <div>
        <a className="page--navigation prev" onClick={props.onClick}>
            <i className="arrow left"></i>
        </a>
        <a className="page--navigation next" onClick={props.onClick}>
            <i className="arrow right"></i>
        </a>
    </div>
)

export default Navigator;