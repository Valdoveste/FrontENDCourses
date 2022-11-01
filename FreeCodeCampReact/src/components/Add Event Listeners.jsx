class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.handlerEnter = this.handlerEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handlerEnter() {
        this.setState((state) => ({
            message: state.message + 'You pressed the enter Key'
        }));
    }

    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handlerEnter();
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }

}