/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
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
        avatar: "https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg",
        status: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
            " enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
            "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
            " voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur" +
            "sint occaecat cupidatat non proident," +
            " sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "manager"
    },
    {
        id: 3,
        name: "Le Tan Loc",
        avatar: "https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg",
        status: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
            " enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
            "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
            " voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur" +
            "sint occaecat cupidatat non proident," +
            " sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "manager"
    },
    {
        id: 2,
        name: "Le Tan Loc",
        avatar: "https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg",
        status: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
            " enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
            "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
            " voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur" +
            "sint occaecat cupidatat non proident," +
            " sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "manager"
    },
    {
        id: 4,
        name: "Le Tan Loc",
        avatar: "https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg",
        status: true,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
            " enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
            "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
            " voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur" +
            "sint occaecat cupidatat non proident," +
            " sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "manager"
    },
    {
        id: 5,
        name: "Le Tan Loc",
        avatar: null,
        status: false,
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
        this.state = {
            update: ""
        }
    }

    componentDidMount(): void {


    }

    componentWillUnmount(): void {

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
                        <List dataArray={userDatas}
                              renderRow={(t) => userBaseCell(t.name, t.description, t.type, t.avatar, t.status)}>
                        </List>
                    </View>
                </View>
            </Container>

        );
    }
}

function userBaseCell(name, description, type, avatar = null, status = false) {
    if (avatar === null) avatar = "https://pickaface.net/gallery/avatar/demo.webmaster541295de29059.png"
    let acti = "https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/256x256/Circle_Grey.png"
    if (status) acti = "https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/256x256/Circle_Red.png"

    return (
        <ListItem avatar>
            <Left>
                <Thumbnail circular source={{uri: avatar}}/>
            </Left>
            <Body>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {name}
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'normal', color: "#CCCCCC"}}>{description}</Text>
            <Text style={{color: "#FFCA28", fontSize: 10}}>{type}</Text>
            </Body>

            <Right>
                <Image source={{uri: acti}} style={{width: 10, height: 10}}>
                </Image>
            </Right>
        </ListItem>
    )
}

function listView() {
    let c = []
    let a = 0

    let abc = userDatas.map(function (t) {
        c[a] = userBaseCell(t.name, t.description, t.type, t.avatar, t.status)
        a++
    });

    return (
        <List sc>{
            c
        }
        </List>

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
    },
    box3: {
        flex: 5,
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
