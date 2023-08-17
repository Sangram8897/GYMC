import { StyleSheet, Dimensions } from 'react-native'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors, DualTheme }) {
  return StyleSheet.create({
    /* Column Layouts */
    column: {
      flexDirection: 'column',
    },
    columnReverse: {
      flexDirection: 'column-reverse',
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    colVCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    colHCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    colSpaced: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    /* Row Layouts */
    row: {
      flexDirection: 'row',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowVCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    rowHCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowSpaced: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    /* Default Layouts */
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsStart: {
      alignItems: 'flex-start',
    },
    alignItemsStretch: {
      alignItems: 'stretch',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentAround: {
      justifyContent: 'space-around',
    },
    justifyContentBetween: {
      justifyContent: 'space-between',
    },
    scrollSpaceAround: {
      flexGrow: 1,
      justifyContent: 'space-around',
    },
    scrollSpaceBetween: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    selfStretch: {
      alignSelf: 'stretch',
    },
    selfCenter: {
      alignSelf: 'center'
    },

    /* Sizes Layouts */
    fill: {
      flex: 1,
    },
    fullSize: {
      height: '100%',
      width: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    fullHeight: {
      height: '100%',
    },
    halfWidth: {
      width: '50%',
    },
    halfHeight: {
      height: '50%',
    },

    /* Operation Layout */
    mirror: {
      transform: [{ scaleX: -1 }],
    },
    rotate90: {
      transform: [{ rotate: '90deg' }],
    },
    rotate90Inverse: {
      transform: [{ rotate: '-90deg' }],
    },

    /* Spacing Layout */
    padding20: {
      padding: 20
    },

    /* Custom Layout */
    flexEnd: {
      alignSelf: 'flex-end'
    },
    topView: {
      width: '100%',
      height: '12%',
      backgroundColor: Colors.primary,
    },
    bottomView: {
      width: '100%',
      height: '75%',
      backgroundColor: Colors.background,
    },
    absolute: {
      position: 'absolute',
    },
    relative: {
      position: 'relative',
    },
    absoluteView: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    fullViewEnd: {
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end'
    },
    cardLayout: {
      height: '90%',
      width: "90%",
      // alignSelf:'flex-end',
      // justifyContent:'flex-end',
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 20,
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 0.5 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
      backgroundColor: Colors.transparent,
    },
    modalLayout: {
      backgroundColor: Colors.white,
      marginHorizontal: 40,
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 24,
    },
    pickerSearchStyle: {
      padding: 12,
      borderWidth: 1,
      borderColor: Colors.inputBorder,
      borderRadius: 5,
      marginHorizontal: 6,
      height: 42
    },
    dateInputContainer: {
      width: "100%",
      paddingBottom: 8,
      justifyContent: "flex-start"
    },
    dateInput: {
      width: "100%",
      alignItems: "center",
      borderRadius: 6,
      borderColor: DualTheme.secondary,
    },
    datepickerPrefixIcon: {
      position: 'absolute',
      left: 0,
      top: 4,
      marginLeft: 8,
    },

    //Picker Style
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: DualTheme.secondary,
      borderRadius: 4,
      color: Colors.text,
      backgroundColor: Colors.whiteBackground,
      paddingRight: 30, // to ensure the text is never behind the icon
      marginVertical: 0,
    },
    inputAndroid: {
      fontSize: 14,
      paddingHorizontal: 12,
      paddingVertical: 12,
      backgroundColor: Colors.whiteBackground,
      borderWidth: 1,
      borderColor: DualTheme.secondary,
      borderRadius: 4,
      color: Colors.text,
      paddingRight: 30,
      marginVertical: 0,
    },
    iconContainer: {
      top: 10,
      right: 20,
    },
    AccountCardStyle: {
      margin: 10, backgroundColor: Colors.white, borderRadius: 5,
    },
    AccountTitleStyle: {
      flex: 1, flexDirection: "row", padding: 10
    }
  })
}
