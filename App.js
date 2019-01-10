/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import 
import {
    Button,
    List,
    Input,
    Form,
    Container,
    Header,
    Item,
    Left,
    Icon,
    ListItem,
    Body,
    Right,
    Image,
    Thumbnail, Card, CardItem

} from 'native-base'


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

const avt = "https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg"
const userDatas = [
    {
        id: 1,
        name: "Le Tan Loc",
        avatar: img,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
            " enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
            "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
            " voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur" +
            "sint occaecat cupidatat non proident," +
            " sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "manager"
    }
]
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <Container>
                <Header>
                </Header>
                <View style={styles.mainbox}>
                    <View style={styles.box1}>
                        <Form>
                            {/*last fulll*/}
                            <Item last>
                                <Input placeholder="Username"/>
                            </Item>

                            <Item last>
                                <Input placeholder="Password"/>
                            </Item>
                            {/*<Item>*/}
                            <Button full warning>
                                <Text>LOGIN</Text>
                            </Button>
                        </Form>

                    </View>
                    <View style={styles.box3}>
                        <List>
                            {userListem()}
                            {/*<ListItem avatar>*/}
                            {/*<Left>*/}
                            {/*<Thumbnail*/}
                            {/*source={{uri: 'http://chittagongit.com//images/google-g-icon/google-g-icon-26.jpg'}}/>*/}
                            {/*</Left>*/}
                            {/*<Body>*/}
                            {/*<Text>Kumar Pratik</Text>*/}
                            {/*<Text note>Doing what you like will always keep you happy . .</Text>*/}
                            {/*</Body>*/}
                            {/*<Right>*/}
                            {/*<Text note>3:43 pm</Text>*/}
                            {/*</Right>*/}
                            {/*</ListItem>*/}
                        </List>
                    </View>
                </View>
            </Container>

        );
    }
}

function userBaseCell(name, description, type, avatar = null) {
    if (avatar === null) avatar = "https://pickaface.net/gallery/avatar/demo.webmaster541295de29059.png"
    return (
        <ListItem>
            <Left>
                <Thumbnail circular source={{uri: avatar}}/>
            </Left>
            <Body>
            <Text/>

            </Body>
        </ListItem>
    )
}

function userListem() {
    return (
        <ListItem avatar>
            <Left><Thumbnail source={{uri: account_tie}}/></Left>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    mainbox: {
        flex: 1,

    },
    box1: {
        flex: 2
    },

    tex1: {
        color: '#FFFFFF',
        fontSize: 50
    },

    box2: {
        flex: 2,
        flexDirection: 'column',
        // backgroundColor: '#62efff'
    },
    box3: {
        flex: 5,
        // backgroundColor: "#9be7ff"
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

    /**
     * list item Title
     * */


});
