
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export class HomeScreen extends React.Component {

  constructor(props) {
		super(props);
		const attachment = props.route.params?.attachment;
		this.state = {  };
		this.setHeader();
	}


	setHeader = () => {
		const { route } = this.props;
		const attachment = route.params?.post;
    console.log("Route",route)
	};
  
  componentDidMount(){
  }

  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text style={{ margin: 10 }}>Post: {this.props.route.params?.post}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('CreatePost')}
        />
      </View>
    )
  }
}


// function HomeScreen({navigation, route}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('CreatePost')}
//       />
//     </View>
//   );
// }

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

