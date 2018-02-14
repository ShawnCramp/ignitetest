import {StackNavigator} from 'react-navigation'
import RestScreen from '../Containers/RestScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import GreetingScreen from '../Containers/GreetingScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  RestScreen: { screen: RestScreen },
  ProfileScreen: { screen: ProfileScreen },
  GreetingScreen: {screen: GreetingScreen},
  LaunchScreen: {screen: LaunchScreen}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
