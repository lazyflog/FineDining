import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, LayoutAnimation, SafeAreaView } from "react-native";
import * as firebase from "firebase";

export default class LoginView extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        email: "",
        password: "",
        errorMessage: null,
        isRegistration: false
    };

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <Text style={styles.greeting}>{`Fine-Dining`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>이메일</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>비밀번호</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>

                    {this.state.isRegistration ? (<View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>비밀번호 확인</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>) : (<View/>)
                    }
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                <Text style={{ color: "#FFF", fontWeight: "500" }}>{this.state.isRegistration? "회원가입" : "로그인"}</Text>
                </TouchableOpacity>

                {(this.state.isRegistration) ? (<TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => { 
                        this.state.isRegistration = false;
                        this.setState(this.state);
                        // this.props.navigation.navigate("Register")
                    } }
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        이미 계정을 가지고 계신가요? <Text style={{ fontWeight: "500", color: "#E9446A", textDecorationLine: "underline" }}>예, 그렇습니다</Text>
                    </Text>
                </TouchableOpacity>) : (
                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => { 
                        this.state.isRegistration = true;
                        this.setState(this.state);
                        // this.props.navigation.navigate("Register")
                    } }
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Fine-Dining이 처음이신가요? <Text style={{ fontWeight: "500", color: "#E9446A", textDecorationLine: "underline" }}>회원가입</Text>
                    </Text>
                </TouchableOpacity>)
                }
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    }
});
