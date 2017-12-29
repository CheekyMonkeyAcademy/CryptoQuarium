 Basically you pass in the state each grand child needs to each of the children (which is then accessible from this.props on the children). Then pass the value from this.props to the grandchildren.

class Grandparent extends Component {
    state = {
        grandchildrenProp: 'a'
    }

    render() {
        return (
            <div>
                <FirstChild value={this.state.grandchildrenProp} />
                <SecondChild value={this.state.grandchildrenProp} />
            </div>
        );
    }
}

const FirstChild = (props) => (
     <GrandChild value={props.value} />
);

const SecondChild = (props) => (
    <SecondGrandChild value={props.value} />
);

const GrandChild = (props) => (
    <span>{props.value}</span>
);

const SecondGrandChild = (props) => (
    <span>{props.value}</span>
);

If each is a function that is passed down to handle some interaction between the two grandchildren then you would pass the function from the grandparent all the way down too.

```    <FirstChild handler={this.someFunction} value={this.state.grandchildrenProp} />
    <SecondChild handler={this.someFunction} value={this.state.grandchildrenProp} />```
