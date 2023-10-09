import { Text, View, StyleSheet, TextInput } from "react-native";
import Bg from "./Bg";
import BtnLogin from "./BtnLogin";

export default function Login(props) {
    return (
        <Bg>
            <View style={{ marginHorizontal: 50, marginVertical: 100 }}>
                <Text style={{ color: 'white', fontSize: 35, }}>Login</Text>
                <Text style={{ color: 'white', fontSize: 20 }}>Intranet LAN</Text>
            </View>

            <View style={{ marginHorizontal: 50, alignItems: 'center'}}>
                <TextInput
                    style={style.InputUsername}
                    placeholder="Email"
                />
                <TextInput
                    style={style.InputPass}
                    placeholder="Password"
                />
                <Text
                    style={{ color: 'white', marginBottom: 20, }} >
                    Show Password
                    </Text>
                <BtnLogin
                    bgColor="rgba(0,0,0,0.6)"
                    textColor="white"
                    btnLabel="Sign In"
                    wBtn={250}
                />
            </View>
        </Bg>
    )
}

const style = StyleSheet.create({
    InputUsername: {
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        width: '100%',
        padding: 5,
        marginBottom: 50,
    },
    InputPass: {
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        width: '100%',
        padding: 5,
        marginBottom: 10,
    },
})