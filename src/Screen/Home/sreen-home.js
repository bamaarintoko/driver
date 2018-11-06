import React, {Component} from "react"
import {Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import {connect} from "react-redux";
import {View, TouchableWithoutFeedback} from "react-native"
import {Header} from "../../Component/Header";
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ScreenHome extends Component {
    render() {
        return (
            <Container>
                <Header title={"Home"}/>
                <Content>
                    <List>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Pick")}>
                            <ListItem avatar>
                                <Left>
                                </Left>
                                <Body>
                                <Text>Paket Buku</Text>
                                <Text note>Delivery Date : 26 February 2019 07:00 PM</Text>
                                <View style={{flexDirection: 'row', alignItems: "center"}}>
                                    <View style={{flex: 2}}>
                                        <Text note>Bantul, Yogyakarta</Text>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <Icon name={"arrow-right"} size={wp("5%")}/>
                                    </View>
                                    <View style={{flex: 2}}>
                                        <Text note>Sleman, Yogyakarta</Text>
                                    </View>
                                </View>
                                </Body>
                                <Right>
                                </Right>
                            </ListItem>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => console.log("asd")}>
                            <ListItem avatar>
                                <Left>
                                </Left>
                                <Body>
                                <Text>Dokumen X</Text>
                                <Text note>Delivery Date : 26 February 2019 07:00 PM</Text>
                                <View style={{flexDirection: 'row', alignItems: "center"}}>
                                    <View style={{flex: 2}}>
                                        <Text note>Bantul, Yogyakarta</Text>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <Icon name={"arrow-right"} size={wp("5%")}/>
                                    </View>
                                    <View style={{flex: 2}}>
                                        <Text note>Sleman, Yogyakarta</Text>
                                    </View>
                                </View>
                                </Body>
                                <Right>
                                </Right>
                            </ListItem>
                        </TouchableWithoutFeedback>
                    </List>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ScreenHome)