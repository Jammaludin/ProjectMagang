import { View, Text, ScrollView } from "react-native";
import Bg from "../PageLogin/Bg";

export default function Dashboard(Props) {
    return (
        <Bg>
            <View style={{ alignItems: 'center', width: 360 }}>
                <Text style={{ color: 'white', fontSize: 32, marginBottom: 50, marginTop: 100 }}>Intranet LAN</Text>
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 700,
                        width: 370,
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        paddingTop: 30,
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'lightblue',
                            borderRadius: 50,
                            height: 75,
                            width: 300,
                        }}>
                        <Text
                            style={{
                                flexDirection: 'row',
                                color: 'white',
                                fontSize: 20,
                                paddingTop: 25,
                                marginRight: 50,
                                textAlign: 'right'
                            }}>Test
                        </Text>
                    </View>
                </View>
            </View>
        </Bg>
    );
}