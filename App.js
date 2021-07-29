import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class RedButton extends Component {
  displayAlert(){
alert("Play Sound 1");
  }
  render(){
    return(
      <Button color="red" title="Sound 1"  onPress = {this.displayAlert}/>
    )
  }
}

class BlueButton extends Component {
  displayAlert(){
alert("Play Sound 2");
  }
  render(){
    return(
      <Button color="blue" title="Sound 2"  onPress = {this.displayAlert}/>
    )
  }
}

class YellowButton extends Component {
  displayAlert(){
alert("Play Sound 3")
  }
  render(){
    return(
      <Button color="yellow" title=" Sound 3"  onPress = {this.displayAlert}/>
    )
  }
}

class GreenButton extends Component {
  displayAlert(){
alert("Play Sound 4");
  }
  render(){
    return(
      <Button color="green" title="Sound 4"  onPress = {this.displayAlert}/>
    )
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <RedButton />
        <BlueButton/>
        <YellowButton />
        <GreenButton/>
        <Text>My First React Component</Text>
      </View>
    );
  }
}