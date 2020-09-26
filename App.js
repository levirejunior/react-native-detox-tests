import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './src/navigation/tab.navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
    <StatusBar style='light'/>
			<SafeAreaView style={{ flex: 1, backgroundColor: 'light' }}>
				<NavigationContainer>
					<TabNavigation />
				</NavigationContainer>
			</SafeAreaView>
    </>
  )
};

export default App;