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
          <Text style={styles.sectionHeader}>Stats</Text>
          <Text style={styles.sectionText}>12 pages read in total</Text>
          <Text style={styles.sectionText}>8 pages read on Average</Text>
        </View>
        <View style={styles.sectionHeader}>
        <Text style={styles.sectionText}>Last Read</Text>
          <Text>Title: Name of the Wind</Text>
          <Text>Author: R.L Stine</Text>
          <Text>Genre: Car Manual</Text>
          <Text>Number of Pages: 379</Text>
          <Text>Date Entered: 2024/04/20</Text>
        </View>
        <Button
        title='+'
        color='#784F00'
        onPress={() => {console.log("Add Button Works!")}}/>
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
  sectionText:{
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor:'#FFF7E1',
  },
  buttonHeader: {
    fontWeight: '700',
  },
});

export default App;
