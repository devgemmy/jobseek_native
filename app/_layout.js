import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
// import { useCallback } from 'react';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "home",
};

const Layout = () => {
    const [fontLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })

    // const onLayoutRootView = useCallback( async () => {
    //     if (fontLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontLoaded])

    if (!fontLoaded) return null

    // return <Stack onLayout={onLayoutRootView}/>
    return (
        <Stack initialRouteName="home">
          <Stack.Screen name="home" />
        </Stack>
    )
}

export default Layout;