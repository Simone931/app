const React = require("react-native");
const { Platform, Dimensions } = React;

import CommonColor from '../colors';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  footer: {
    height: 60,
    backgroundColor: 'white',
    borderWidth:0
  },
  icon: {
    color: CommonColor.menu,
    fontSize: 17
  },
  text: {
    fontSize: 13,
    paddingTop: 5,
    paddingLeft: 0,
    paddingRight: 0,
    color: CommonColor.menu,
    flex: 1,
    flexShrink: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row' 
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
  },
  list: {
    height: deviceHeight -( deviceHeight / 3.5 ),
  }
};