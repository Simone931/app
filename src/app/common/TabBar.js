import React, { Component } from 'react';

import BottomMenu from './BottomMenu';
import { withNavigation } from '@react-navigation/compat';

class TabBar extends Component {
	render() {
		return (
			<>
				<BottomMenu />
			</>
		);
	}

}

export default withNavigation(TabBar)
