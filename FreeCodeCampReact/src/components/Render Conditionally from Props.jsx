class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.props.fiftyFifty ? <h1>Win</h1> : <h2>Loss</h2>;
    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    render() {
        const expression = Math.random() >= .5;
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                <Results fiftyFifty={expression}></Results>
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    } 
}