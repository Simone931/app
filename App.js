import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  AppState
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Toast, Container, NativeBaseProvider } from 'native-base';
import CommonColor from './src/constants/colors';
import Store from './src/resources/store';
import { PersistGate } from 'redux-persist/integration/react';
import Navigator from './src/resources/navigator';
import emitter from './src/app/common/toaster';
import { Provider } from 'react-redux';
import RNBootSplash from "react-native-bootsplash";

console.disableYellowBox = true;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
      appState: AppState.currentState,
    }
    this.store = Store()
  }

  // App event
  componentDidMount() {
    this.store.persistor.dispatch({ type: 'REHYDRATE' });

    this._load();
    emitter.on("showToast", this.showToast);
    AppState.addEventListener('change', this._handleAppStateChange);
    RNBootSplash.hide({ fade: true });
  }

  componentWillUnmount() {
    emitter.off("showToast", this.showToast);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  // Handler
  _handleAppStateChange = nextAppState => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    }
    this.setState({ appState: nextAppState });
  };

  _handleConnectivityChange = isConnected => {
    if (isConnected) {
      console.log({ isConnected });
    } else {
      console.log({ isConnected });
    }
  };

  // Load
  _load = async () => {
    await this._loadFonts();
    await this._loadAccessToken();
    this.setState({ isReady: true });
  }

  _loadFonts = async () => {

  }

  _loadAccessToken = async () => {

  }

  // Global functions
  showToast = params => {
    Toast.show({
      text: params.message,
      type: params.type || 'success',
      duration: 2500,
      position: 'bottom',
      textStyle: { textAlign: 'center', fontFamily: 'SourceSansPro' },
      buttonTextStyle: { fontFamily: 'SourceSansPro' },
      buttonText: 'Ok',
    })
  }

  // Render app
  render () {
    return (
      <SafeAreaProvider>
        <StatusBar backgroundStyle={CommonColor.lightBackgroundWhite} barStyle={'dark-content'} />
        <NativeBaseProvider style={{ flex: 1, flexGrow: 1, height: '100%' }}>
          <Container style={{ flex: 1, flexGrow: 1, height: '100%' }}>
            <SafeAreaView style={{
              flex: 1,
              flexGrow: 1,
              height: '100%',
            }}>
              <Provider store={this.store.store}>
                <PersistGate persistor={this.store.persistor}>
              {console.log(<Navigator/>)}
                  <Navigator />
                </PersistGate>
              </Provider>
            </SafeAreaView>
          </Container>
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }

}

export default App;
