import React, { Component } from 'react'
import "./App.css"

class Box extends Component {
    render() {
        const { id, color } = this.props
        return (
            <>
                <div className="box" style={{ background: color, id: id }} onClick={() => this.props.onClick(id, color)}></div>
            </>
        )
    }
}

export default Box
