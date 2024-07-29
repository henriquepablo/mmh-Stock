import { Text, View } from "@gluestack-ui/themed";
import React from "react";
import { useNavigation } from "@react-navigation/native";

function Home():JSX.Element {
    const navigation = useNavigation();
    return(
        <View bgColor="#0F111D" height="$full">
            <Text>
                Página Home
            </Text>
        </View>
    );
}

export default Home;