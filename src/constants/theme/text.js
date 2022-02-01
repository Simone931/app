import CommonColor from '../colors'

export default {
    small: {
        fontSize: 15
    },
    smallBold: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    smallIcon: {
        fontSize: 15,
        lineHeight: 20
    },
    medium: {
        fontSize: 20
    },
    mediumBold: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    big: {
        fontSize: 30
    },
    bigBold: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    padder: {
        padding: 10
    },
    smallVerticalPadder: {
        paddingTop: 3,
        paddingBottom: 3
    },
    verticalPadder: {
        paddingTop: 10,
        paddingBottom: 10
    },
    mainHighlight: {
        color: CommonColor.mainColor
    },
    icon: {
        color: CommonColor.darkBackgroundGrey,
    },
    H2: {
        fontWeight: 'bold',
        fontSize: 21,
        paddingTop: 5,
        paddingBottom: 5
    },
    H3: {
        fontWeight: 'bold',
        paddingTop: 12,
        paddingBottom: 5,
        fontSize: 18
    },
    separator: {
        borderBottomWidth: 2, 
        borderBottomColor: CommonColor.lightBackgroundGrey
    },
    invertedPrimary: {
        borderColor: CommonColor.mainColor,
        backgroundColor: 'white',
        borderWidth: 1
    },
    invertedPrimaryText: {
        color: CommonColor.mainColor,
    },
    invertedDanger: {
        borderColor: CommonColor.red,
        backgroundColor: 'white',
        borderWidth: 2
    },
    invertedDangerText: {
        color: CommonColor.red,
    },
    invertedOrange: {
        borderColor: CommonColor.contrastColor,
        backgroundColor: 'white',
        borderWidth: 2
    },
    invertedOrangeText: {
        color: CommonColor.contrastColor,
    },
    picker: {
        color: 'white', 
        width: '100%', 
        borderRadius: 0, 
        textAlign: 'left', 
        justifyContent: 'space-between', 
        height: 45
    }
}