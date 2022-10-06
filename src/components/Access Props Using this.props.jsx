class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Welcome name={"Nicky"}/>
        );
    }
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>Hello, <strong>{this.props.name}</strong>!</p>
            </div>
        )
    }
}