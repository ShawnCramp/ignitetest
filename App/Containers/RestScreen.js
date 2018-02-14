import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView, Image, ListView } from 'react-native'
import { View, Header, Left, Button, Body, Right, Text } from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RestScreenStyle'
import {Images} from "../Themes";



class RestScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching: true
    }
  }

  // REST API Call
  getRestTest() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          fetching: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // Something
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getHeader() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => navigate('LaunchScreen')}>
            <Image source={Images.backButton} />
          </Button>
        </Left>
        <Body style={{justifyContent: 'center'}}>
        <Text>Test Center</Text>
        </Body>
        <Right>
          <Text>Test Right</Text>
        </Right>
      </Header>
    )
  }

  render () {
    const { navigate } = this.props.navigation;

    if (this.state.fetching) {
      return (
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View>
              <ListView dataSource={this.state.dataSource}
                        renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      )
    }

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View>
            <ListView dataSource={this.state.dataSource}
                      renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestScreen)
