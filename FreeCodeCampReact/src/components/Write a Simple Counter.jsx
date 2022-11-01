class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count:  0
        }

        this.incremnet = this.incremnet.bind(this)
        this.decremnet = this.decremnet.bind(this)
        this.reset = this.reset.bind(this)
    }

    incremnet() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    decremnet() {
        this.setState(state => ({
            count: state.count - 1
        }));
    }

    reset() {
        this.setState(state => ({
            count: state.count = 0
        }));
    }

    render() {
        return(
            <div>
                <button className="inc" onClick={this.incremnet}>Increment</button>
                <button className="dec" onClick={this.decremnet}>Decrement</button>
                <button className="reset" onClick={this.reset}>Reset</button>
                <h1>Current count: {this.state.count}</h1>
            </div>
        )
    }
}