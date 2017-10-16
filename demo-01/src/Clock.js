import React, { Component } from 'react';


class Clock extends Component {
    state = {
        now : new Date().toTimeString(),
        movies: null
    }

    componentDidMount(){
        setInterval(() => 
            this.setState({
                now : new Date().toTimeString()
            })
            , 1000);
    }

    render () {
        const {now} = this.state;

        return <div>It is {now}
        
        </div>;
    }
}

export default Clock;
