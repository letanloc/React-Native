/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button, Input, Form, Container, Header, Item} from 'native-base'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <Container>
                <Header></Header>
                <View style={styles.mainbox}>
                    <View style={styles.box1}>
                        <Text style={styles.tex1}>HÈ LÚ</Text>
                    </View>
                    <View style={styles.box2}>
                        <View style={{flex: 1, backgroundColor: "#fff"}}>
                            <View style={{width: 50, height: 50, backgroundColor: "#8f9bff"}}/>
                            <View style={{width: 50, height: 50, backgroundColor: "#0043ca"}}/>
                        </View>
                        <View style={{flex: 1, flexDirection: "row"}}>
                            <View style={{width: 50, height: 50, backgroundColor: "#8f9bff"}}/>
                            <View style={{width: 50, height: 50, backgroundColor: "#0043ca"}}/>
                            <View style={{width: 50, height: 50, backgroundColor: "#8f9bff"}}/>
                            <View style={{width: 50, height: 50, backgroundColor: "#0043ca"}}/>
                            <View style={{width: 50, height: 50, backgroundColor: "#8f9bff"}}/>
                            <View style={{width: 50, height: 50, backgroundColor: "#0043ca"}}/>
                            <View style={{width: 50, height: 50, backgroundColor: "#8f9bff"}}/>
                            <View style={{width: 50, height: 50, backgroundColor: "#0043ca"}}/>
                        </View>
                    </View>
                    <View style={styles.box3}>
                        <Form>
                            {/*last fulll*/}
                            <Item last>
                                <Input placeholder="Username"/>
                            </Item>

                            <Item last>
                                <Input placeholder="Password"/>
                            </Item>

                        </Form>
                        {/*<Input placeholder="username"></Input>*/}
                        {/*<Button light><Text> Light </Text></Button>*/}
                    </View>
                </View>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    mainbox: {
        flex: 1,

    },
    box1: {
        flex: 1,
        backgroundColor: "green",
        textAlign: 'center',
        justifyContent: 'center',//center vertical
        alignItems: 'center',// center horizontal
    },

    tex1: {
        color: '#FFFFFF',
        fontSize: 50
    },

    box2: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#62efff'
    },
    box3: {
        flex: 3,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
