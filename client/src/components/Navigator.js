import React, { Component } from 'react';


const Navigator = (props) => (
    <div>
        <button className="page--navigation prev" onClick={props.onClick} style={{ display: props.left }}>
            <i className="arrow left"></i>
        </button>
        <button className="page--navigation next" onClick={props.onClick} style={{ display: props.right }} >
            <i className="arrow right"></i>
        </button>
    </div>
)

export default Navigator;