import React, { Component } from 'react';


class Hello extends Component {
    render () {
        const {name} = this.props;

        return <div className="my-class">Hello there {name}
        it is {new Date().toTimeString()}
        
        </div>;
    }
}

export default Hello;
