import React, {Component} from 'react'
import {ScrollView, KeyboardAvoidingView, Image, Alert} from 'react-native'
import {Container, Header, Card, CardItem, DeckSwiper, Left, Body, Text, Button, View, Icon, Right} from 'native-base'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/GreetingScreenStyle'
import {Images} from "../Themes";

// Constants
const cards = [
  {
    text: 'Person One',
    name: 'One',
    image: require('../Images/top_logo.png')
  },
  {
    text: 'Person Two',
    name: 'Two',
    image: require('../Images/ir.png')
  },
  {
    text: 'Person Three',
    name: 'Three',
    image: require('../Images/launch-icon.png')
  },
];

// Class Definition
class GreetingScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Container>
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
            <View>
              <DeckSwiper
                ref={(c) => this._deckSwiper = c}
                dataSource={cards}
                renderEmpty={() =>
                  <View style={{alignSelf: "center"}}>
                    <Text>Over</Text>
                  </View>
                }
                renderItem={item =>
                  <Card style={{elevation: 3}}>
                    <CardItem>
                      <Left>
                        <Body>
                        <Text>{item.text}</Text>
                        <Text note>Subtext Information</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image style={{height: 300, flex: 1}} source={item.image} />
                    </CardItem>
                    <CardItem>
                      <Icon name={styles.backButton} color='#888888'/>
                      <Text>{item.name}</Text>
                    </CardItem>
                  </Card>
                }
                onSwipeRight={() => Alert.alert(
                  'Swiped Right',
                  "You've swiped right on your card"
                )}
                onSwipeLeft={() => Alert.alert(
                  'Swiped Left',
                  "You've swiped left on your card"
                )}
              />
            </View>
            <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
              <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                <Text>Reject</Text>
              </Button>
              <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                <Text>Accept</Text>
              </Button>
            </View>
          </Container>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(GreetingScreen)
