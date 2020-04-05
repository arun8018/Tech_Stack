import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/Reducers';
import Header from './src/Components/Header';
import LibraryList from './src/Components/LibraryList';
class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <Header HeaderText="TECH STACK"></Header>

          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;
