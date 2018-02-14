import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import { View, Container, Header, Left, Body, Right, Text, Content, Button, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';
import {Images} from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'

class ProfileScreen extends Component {
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
            <Content>
              <View style={{ justifyContent: 'center'}}>
              <Card>
                <CardItem header>
                  <Text>Jimmy Smith</Text>
                </CardItem>
                <CardItem cardBody>
                  <Body style={{ alignItems: 'center' }}>
                    <Image source={Images.clearLogo} />
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text>Computer Programmer</Text>
                </CardItem>
              </Card>
              </View>
            </Content>
          </Container>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
