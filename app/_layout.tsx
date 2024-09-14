import { Stack } from "expo-router";

export default function Layout(){

    return(
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#121212"
                },
                headerTintColor: "#fff"
            }}>
            <Stack.Screen name="index" options={{title: 'Home'}} />
            <Stack.Screen name="page2" options={{title: 'Page 2'}} />
            <Stack.Screen name="page3" options={{title: 'Page 3'}} />
        </Stack>
    )
}