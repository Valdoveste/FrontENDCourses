class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        }

        this.toggleVisibility = this.toggleVisibility.bind(this);

    }

    toggleVisibility() {
        this.setState({
            visibility: true
        });

        // toggleVisibility() {
        //     let conutToggle = 0;
        //     if () {
        //       this.setState({
        //         visibility: true
        //       });
        //     } else {
        //       this.setState({
        //         visibility: true
        //       });
        //     }
        //   }
        
    }

    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
}