import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class RedButton extends Component{
  render(){
    return <Button color="green" title ="Press"/>

  }
} 
class BlueButton extends Component{
render(){
  return <Button  color="blue" title="Add"/>
 }
  }
class GreenButton extends Component{
  render(){
    return<Button color="black" title="Go"/>
  }
}
class BlackButton extends Component{
  render(){
  return<Button color="red" title="Ok"/>
  }
}
class OrangeButton extends Component{
  render(){
return<Button color="orange" title="K"/>
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{marginTop:400}}>
      <RedButton />
      <BlueButton/>
      <GreenButton/>
      <BlackButton/>
      <OrangeButton/>
    <Text>First </Text>
  </View>
    );
  }
}