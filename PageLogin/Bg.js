import { ImageBackground, View } from "react-native";

export default function Bg({ children }) {
    return (
        <View>
            <ImageBackground
                source={require('../assets/bgLogin.jpg')}
                style={{ height: '100%', width: '100%' }}
            />
            <View style={{ position: 'absolute' }}>{ children }</View>
        </View>
    )
}