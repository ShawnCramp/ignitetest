import React, {Component} from 'react'
import {ScrollView, Text, Image, View, Button} from 'react-native'

import {Images} from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <Text>{'\n'}</Text>{/* Line Break */}
          {/* Named GreetingScreen, but this screen is used to test the deck swiper */}
          <Button title='DeckSwiper Test' onPress={() => navigate('GreetingScreen')} />
          <Button title='Rest Test' onPress={() => navigate('RestScreen')} />
          <Button title='Profile Test' onPress={() => navigate('ProfileScreen')} />
        </ScrollView>
      </View>
    )
  }
}
