import React, { PureComponent } from "react";
import { connect } from 'react-redux'

import { withNavigation } from '@react-navigation/compat';
import {
  Button,
  Text,
  Icon,
  Footer, FooterTab
} from 'native-base';

import TabStyle from "../../constants/theme/tab";


class BottomMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          name: "Appuntamenti",
          route: "App",
          action: "AppuntamentiList",
          icon: "calendar",
          bg: "#C5F442",
          types: 3,
        },
        {
          name: "Dossier",
          route: "App",
          action: "DossierList",
          icon: "folder-open",
          bg: "#C5F442",
          types: 3,
        },
        {
          name: "Profilo",
          route: "App",
          action: "UserMenu",
          icon: "user",
          bg: "#C5F442"
        }
      ]
    };
  }


  render() {

    return (
      <Footer height={TabStyle.footer.height} style={TabStyle.footer}>
        <FooterTab>
          <Button style={{ flex: 1 }} vertical onPress={() => {
            this.props.navigation.navigate('App', { screen: 'App', params: { screen: 'Dashboard' } });
          }}>
            <Icon type="FontAwesome5" style={{ ...TabStyle.icon }} name='home' />
            <Text style={{ ...TabStyle.text }}>Home</Text>
          </Button>

          {this.state.buttons.map(el => {
            var flex = 1
            return (
              <Button vertical style={{ flex, flexDirection: 'column' }} key={el.name} onPress={() => {
                this.props.navigation.navigate(el.route, { screen: 'App', params: { screen: el.action } });
              }}>
                <Icon type="FontAwesome5" style={{ ...TabStyle.icon }} name={el.icon} solid />
                <Text style={{ ...TabStyle.text }}>{el.name}</Text>
              </Button>
            );
          })}

        </FooterTab>
      </Footer >
    );
  }
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withNavigation(BottomMenu)
);