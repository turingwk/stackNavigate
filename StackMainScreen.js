import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen.js';

class StackMainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
    const {navigate} = this.props.navigation;
    return (
    <View>
    <Text>Hello, Navigation!</Text>
    <Button onPress={()=>navigate('Chat', {user: 'Lucy'})}
    title="Chat with lucy"
    />
    </View>
    );
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: StackMainScreen },
    Chat:{screen: ChatScreen},
});

export default SimpleApp;