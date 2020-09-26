import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTab } from './components/bottom-tab/bottom-tab.component'
import { HomeScreen } from '../ui/screens'
import { PlayerScreen } from '../ui/screens'
import { SearchScreen } from '../ui/screens'
import { SearchResultScreen } from '../ui/screens'
import { FormScreen } from '../ui/screens'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />} >
      <Tab.Screen name='Playlist' component={HomeScreen} />
      <Tab.Screen name='Player' component={PlayerScreen} />
      <Tab.Screen name='Search' component={SearchScreen} />
      <Tab.Screen name='Form' component={FormScreen} />
    </Tab.Navigator>
  )
}