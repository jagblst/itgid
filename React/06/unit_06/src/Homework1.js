import {Component} from 'react';

class Homework1 extends Component {
    constructor(props) {
        console.log(props);
        super();
        this.state = {
            s1: props.p1
        }
        this.s2 = 201
    }

    buttonHandler = () => {
        let val = this.state.s1 + 50;
		this.setState({s1: val});
		this.s2 = this.s2 + 50;
	}

    componentDidMount() {
        let val = this.state.s1 + 5;
		this.setState({s1: val});
		this.s2 = this.s2 + 5;
	}

    render() {
        return(
            <>
                <div>{this.state.s1}</div>
                <div>{this.s2}</div>
                <div>
                    <button onClick={this.buttonHandler}>Click</button>
                </div>
            </>
           
        )
    }
}

export default Homework1;