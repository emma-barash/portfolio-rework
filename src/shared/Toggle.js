import { Component } from 'react';

class Toggle extends Component {
    constructor(){
        super();
        this.state = {
            on: false
        }
    }
        toggler = () => {
            this.state(ps => ({
                on: !ps.on
            }));
        };

    render(){
        this.props.render({ ...this.state, toggler: this.toggler });
    }
}

export default Toggle