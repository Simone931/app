import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Keyboard } from 'react-native'
import { CardStyleInterpolators } from '@react-navigation/stack';

// Tab & Head
import TabBar from '../app/common/TabBar'
import HeaderBar from '../app/common/Header'

// Routes
import TourScreen from '../app/routes/tour';

export const navigationRef = React.createRef();

function getTitle(route, custom) {
	switch (route) {
		case 'Login':
			return 'Accedi/Registrati';
		default:
			if (custom) {
				return custom
			}
			return 'App'
	}
}

const Tab = createBottomTabNavigator();
const TabAnimated = createStackNavigator();
function AnimatedApp() {
	const config = {
		config: {
			duration: 300,
			damping: 0,
			mass: 3,
			overshootClamping: false,
			restDisplacementThreshold: 100,
			restSpeedThreshold: 100,
			stiffness: 1000,
		},
	};
	return (
		<TabAnimated.Navigator screenOptions={{
			gestureEnabled: true,
			gestureDirection: 'horizontal',
			animationEnabled: true,
			cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			screenInterpolator: CardStyleInterpolators.forHorizontalIOS,
			transitionSpec: {
				open: config,
				close: config,
			},
			headerShown: false
		}}>
			<TabAnimated.Screen name="Dashboard" component={DashboardStack.Dashboard} />
		</TabAnimated.Navigator>
	)
}
function WholeNav() {
	return (
		<Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
			<Tab.Screen name="App" component={AnimatedApp} />
		</Tab.Navigator>
	);
}

const TourStack = createStackNavigator();
function TourApp() {
	return (
		<TourStack.Navigator
			headerMode="none"
			headerShown={false}
			options={{
				header: () => <></>,
				headerShown: false,
				headerMode: 'screen',
				gestureEnabled: false,
			}}
			screenOptions={{
				header: () => <></>,
				headerShown: false,
				gestureEnabled: false,
			}}>

			<TourStack.Screen name="Tour" component={TourScreen}
				headerMode={'none'}
				options={{ headerShown: false }}
				screenOptions={{
					headerShown: false
				}} />
		</TourStack.Navigator>
	);
}

const Stack = createStackNavigator();
function FullApp() {
	return (
		<NavigationContainer ref={navigationRef} options={{ gestureEnabled: false, }}>
			<Stack.Navigator
				headerMode="screen"
				headerShown={true}
				initialRouteName="Auth"
				screenOptions={{
					header: ({ scene, previous, navigation, route, ...props }) => {

						const { options } = scene.descriptor;
						const routeName = getFocusedRouteNameFromRoute(scene.route);
						var screen
						try {
							var parsed = navigation.dangerouslyGetState().routes?.find((i) => i.name == 'App').state?.routes
							parsed = parsed[parsed?.length - 1]
							screen = parsed?.state?.routes[parsed?.state?.routes?.length - 1].name
						} catch (e) {
							console.log('error', e)
						}
						const title = getTitle(screen, options.title)
						if (['Tour',].includes(scene.route.name) || typeof routeName === 'undefined') {
							return <></>
						}
						return <HeaderBar title={title} route={screen} back={options.back} />

					}
				}}>
				<Stack.Screen name="Tour" component={TourApp}
					options={{ headerShown: false }}
					headerShown={false}
					headerMode={'none'}
					screenOptions={{
						headerShown: false
					}} />
				{/* <Stack.Screen name="Auth" component={AuthStack} /> */}
				{/* <Stack.Screen name="App" component={WholeNav} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}


export function navigate(name, params) {
	Keyboard.dismiss()
	navigationRef.current?.navigate(name, params);
}

export default FullApp
