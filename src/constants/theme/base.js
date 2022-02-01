import { Dimensions, StyleSheet, Platform } from 'react-native';

import CommonColor from '../colors';

let navBarHeight = 22;
let screenHeight = Dimensions.get('screen').height - navBarHeight;

const styles = StyleSheet.create({
	bar: {
	},
	text: {
		color: 'white'
	},
	menuIcon: {
		padding: CommonColor.style,
		color: 'white'
	},
	header: {
		paddingTop: 0,
		// minHeight: Platform.OS === 'ios' ? Constants.statusBarHeight : null,
		marginTop: 0,
		borderWidth: 0,
		borderBottomWidth: 0,
		textAlign: 'center',
		height: navBarHeight,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		alignSelf: 'center'
	},
	contentContainer: {
		color: 'white',
	},
	backgroundContainer: {
	  width: '100%',
	  height: screenHeight ,
	},
	background: {
	  opacity: 0.63,
	},
	transparent: {
		backgroundColor: 'transparent',
		borderBottomWidth: 0,
		borderTopWidth: 0
	}
});

export { screenHeight };
export default styles;

