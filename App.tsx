/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#784F00"
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: "#784F00",
          }}>
          <Text style={styles.sectionTitle}>BookWorm</Text>
        </View>
        <View>
          <Text style={styles.sectionHeader}>My Shelf</Text>
        </View>
        <View>
        <Button
        title='History'
        color='#784F00'
        onPress={() => {console.log("History Button Works!")}}/>
        <Button
        title='Genre'
        color='#784F00'
        onPress={() => {console.log("Genre Button Works!")}}/>
        </View>
        <View>
          <Text>Stats</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  sectionTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    flex: 1,
    padding: 24,
    textAlign: 'center',
  },
  sectionHeader: {
    backgroundColor:'#FFF7E1',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  buttonHeader: {
    fontWeight: '700',
  },
});

export default App;
