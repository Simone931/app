
import React, {
    Component
  } from 'react';
  import {
    StyleSheet,
    View,
    Alert,
    Image,
    Dimensions
  } from 'react-native';
  import { Button, Text, Icon, H3 } from 'native-base';
  import CommonColor from '../../../constants/colors';
  import textStyle from '../../../constants/theme/text';
  import { withNavigation } from '@react-navigation/compat';
  import AppIntro from 'rn-falcon-app-intro';
   
  const styles = StyleSheet.create({
    slide: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
    },
    iconContainer: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 75,
      height: 150,
      width: 150,
  
      backgroundColor: 'white'
    },
    icon: {
      fontSize: 75,
      color: '#5aaafa',
      alignSelf: 'center',
      alignContent: 'center'
    },
    header: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pic: {
      width: 75 * 2,
      height: 63 * 2,
    },
    h3: {
      ...textStyle.H3,
      paddingTop: 20,
      paddingBottom: 10,
    },
    text: {
      textAlign: 'center',
      padding: 15,
    },
  });
  
  
  class App extends Component {
    constructor(props) {
      super(props)
  
      this.subscription = this.props.navigation.addListener('focus', (payload) => {
        this.forceUpdate()
      })
    }
    componentWillUnmount() {
      this.subscription()
    }
    onSkipBtnHandle = (index) => {
    }
    doneBtnHandle = () => {
      this.props.navigation.navigate('Auth', { screen: 'Login', params: { view: 'login' } })
    }
    nextBtnHandle = (index) => {
      
    }
    onSlideChangeHandle = (index, total) => {
      
    }
  
    render() {
      console.log('AAAAAAAAAAAAAAAAAAAAAAAAA')
      return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: CommonColor.lightColor }}>
          <AppIntro
            dotColor={CommonColor.lightBackgroundWhite}
            activeDotColor={CommonColor.mainColor}
            scrollEnabled={true}
            showSkipButton={false}
            showDoneButton={false}
            customStyles={{
              paginationContainer: {
                bottom: 0,
                justifyContent: 'center',
                marginLeft: 30,
                marginRight: 0
              }
            }}
          >
            <View style={{ ...styles.slide, }}>
              <View style={styles.iconContainer}>
                <Icon style={styles.icon} type="FontAwesome5" name="stethoscope" />
              </View>
              <View><H3 style={styles.h3}>mySantagostino</H3></View>
              <View>
                <Text style={styles.text}>
                  mySantagostino è l’app del Santagostino. Il modo più veloce per prenotare una visita e accedere ai nostri servizi online.
                </Text>
              </View>
            </View>
            <View style={[styles.slide]}>
              <View style={styles.iconContainer}>
                <Icon style={styles.icon} type="FontAwesome5" name="user-md" />
              </View>
              <View><H3 style={styles.h3}>Specialità, sedi, professionisti</H3></View>
              <View>
                <Text style={styles.text}>
                  Trova e prenota una prestazione cercando tra le specialità. Scegli la sede più comoda e consulta il profilo dei professionisti.
                </Text>
              </View>
            </View>
            <View style={[styles.slide]}>
              <View style={{ ...styles.iconContainer, paddingLeft: 5 }}>
                <Icon active solid style={{ ...styles.icon, }} type="FontAwesome5" name="folder-open" />
              </View>
              <View><H3 style={styles.h3}>Appuntamenti, fatture, referti</H3></View>
              <View>
                <Text style={styles.text}>
                  Dall’app puoi prenotare, disdire, consultare la lista dei tuoi appuntamenti e accedere a referti e fatture.
                </Text>
              </View>
            </View>
            <View style={[styles.slide]}>
              <View style={styles.iconContainer}>
                <Icon style={styles.icon} type="FontAwesome5" name="microscope" />
              </View>
              <View><H3 style={styles.h3}>Esami di laboratorio</H3></View>
              <View><Text style={styles.text}>
                Crea un preventivo e porta il codice a barre generato dall’app al tuo appuntamento: sarà tutto più veloce.
                </Text>
              </View>
            </View>
          </AppIntro>
          <Button style={{ margin: 8 }} full primary onPress={() => this.props.navigation.navigate('Auth', { screen: 'Login', params: { view: 'login' } })}>
            <Text style={{ fontWeight: 'bold' }} uppercase={false}>Accedi</Text>
          </Button>
          <Button style={{ ...textStyle.invertedPrimary, margin: 8, marginTop: 0, backgroundColor: CommonColor.lightBackgroundWhite }} full primary
            onPress={() => this.props.navigation.navigate('Auth', { screen: 'Login', params: { view: 'register' } })}>
            <Text uppercase={false} style={{ ...textStyle.invertedPrimaryText, fontWeight: 'bold' }}>Registrati</Text>
          </Button>
        </View>
      );
    }
  };
  
  export default withNavigation(App)