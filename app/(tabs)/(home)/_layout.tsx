import { theme } from "@/theme";
import { AntDesign } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, TouchableOpacity, View } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href="/new" asChild>
 
                <TouchableOpacity >

                <Pressable hitSlop={50} style={{marginRight: 18}}>
                  <AntDesign
                    name="pluscircleo"
                    size={24}
                    color={theme.colorGreen}
                    />
            
                </Pressable>
                    </TouchableOpacity>
              
          
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerTintColor: theme.colorBlack,
        }}
      />
    </Stack>
  );
}
