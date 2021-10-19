import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>
                    <i class={this.props.icon}></i>
                    {this.props.title}
                </h1>
            </div>
        )
    }
}

export default Navbar
