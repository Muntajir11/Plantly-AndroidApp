import {Link, Redirect, Tabs} from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStrore";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable } from 'react-native';


export default function Layout() {
  const finishedOnboarding = useUserStore((state) => state.hasFinishedOnboarding);

  if (!finishedOnboarding) {
    return <Redirect href = "onboarding" />;
  }

  return (
    <Tabs screenOptions={{tabBarActiveTintColor: theme.colorGreen}}>
      <Tabs.Screen 
      name="index" 
      options={{ 
        title: "Home",
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => <Entypo name="leaf" size={size} color={color} />,
        headerRight: () => (
          <Link href={"/new"} asChild>
          <Pressable style= {{marginRight: 18}} hitSlop={20}> 
          <AntDesign name="pluscircleo" size={24} color={theme.colorGreen} />
          </Pressable>
          </Link>
        ),
       }}
      
      />
      <Tabs.Screen name="profile" options={{ 
        title: "Profile",
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => <Feather name="user" size={size} color={color} />,
        }} />
    </Tabs>
  );
}
