import React from 'react';
import { connect } from 'react-redux'
import { Header, Button, Title, H1, Icon, Left, Body, Right } from 'native-base';


import BaseStyle from '../../constants/theme/base';
import CommonColor from '../../constants/colors';
import TextStyle from '../../constants/theme/text';
import { withNavigation } from '@react-navigation/compat';

class MyHeader extends React.PureComponent {

	backButton() {
		var backToHome = [
			'Visualizza',
			'Dashboard',
			'Login',
			'Register',
			'Search'
		]
		if ( !this.props.route || ['Dashboard', 'Register', 'Login'].includes(this.props.route)) {
			return null
		}

		if ( this.props.back ) {
			return (
				<Button transparent onPress={() => { this.props.back() }} style={{padding: 10}}>
					<Icon type="FontAwesome5" name="chevron-left" light style={{ color: 'white', ...TextStyle.smallIcon }} />
				</Button>
			);
		}

		return null;
	}


	render() {
		if(['Tour'].includes(this.props.route)) {
			return null
		}
		return (
			<Header androidStatusBarColor={ CommonColor.mainColor } style={{...BaseStyle.header, }} noShadow>
				<Left style={{ flex: 1 }}>
					{this.backButton()}
				</Left>
				<Body style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
					<Title style={{ color: 'white', fontSize: 20 }}>{'title' in this.props ? this.props.title : "mySantagostino"}</Title>
				</Body>
				<Right style={{ flex: 1 }}>
				</Right>
			</Header>
		);
	}

}


const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(
	withNavigation(MyHeader)
)
