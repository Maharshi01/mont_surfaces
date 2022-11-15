import React, { Component } from 'react';
import { View } from 'react-native';
class SpaceComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <View height={this.props.height} width={this.props.width} />;
    }
}

export default SpaceComponent;
