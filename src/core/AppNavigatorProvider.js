import { createStackNavigator } from 'react-navigation'

import {
    Home,
    Lists,
    Setting,
} from '../screen'

export default createStackNavigator({
    HomeScreen: {
        screen: Home,
    },
    ListsScreen: {
        screen: Lists,
    },
    SettingScreen: {
        screen: Setting,
    },
},{
    navigationOptions: {
        header: null,
    }
})
    