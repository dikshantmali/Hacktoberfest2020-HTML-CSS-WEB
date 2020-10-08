import React from 'react'

export default function Item(props) {
    return (
        <div className="item">
            <div className="right floated content">
                <div className="ui button" onClick={() => props.remove(props.number)}>Remove</div>
            </div>
            <i className="large github middle aligned icon"></i>
            <div className="content">
                <a nohref="true" className="header">{props.title}</a>
                <div className="description">Added {props.timestamp}</div>
            </div>
        </div>
    )
}
