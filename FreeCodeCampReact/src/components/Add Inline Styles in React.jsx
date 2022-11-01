const styles = {
    color: purple,
    fontSize: 40,
    border: "2px solid purple"
}
class Colorful extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return( 
            <div style={styles}>Style Me!</div>
        );
    }
}