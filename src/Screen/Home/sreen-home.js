import React, {Component} from "react"
import {Container, Content, List, ListItem, Left, Body, Right, Text} from 'native-base';
import {connect} from "react-redux";
import {View, TouchableWithoutFeedback, StyleSheet,Dimensions} from "react-native"
import {Header} from "../../Component/Header";
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
let {width, height} = Dimensions.get('window')
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
                                <Text style={styles.text_title}>Paket Buku</Text>
                                <Text style={styles.text_loc} note>Delivery Date : 26 February 2019 07:00 PM</Text>
                                <View style={{flexDirection: 'row', alignItems: "center"}}>
                                    <View style={{flex: 2}}>
                                        <Text style={styles.text_loc} note>Bantul, Yogyakarta</Text>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <Icon name={"arrow-right"} size={wp("5%")}/>
                                    </View>
                                    <View style={{flex: 2}}>
                                        <Text style={styles.text_loc} note>Sleman, Yogyakarta</Text>
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
                                <Text style={styles.text_title}>Dokumen X</Text>
                                <Text style={styles.text_loc} note>Delivery Date : 26 February 2019 07:00 PM</Text>
                                <View style={{flexDirection: 'row', alignItems: "center"}}>
                                    <View style={{flex: 2}}>
                                        <Text style={styles.text_loc} note>Bantul, Yogyakarta</Text>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'center'}}>
                                        <Icon name={"arrow-right"} size={wp("5%")}/>
                                    </View>
                                    <View style={{flex: 2}}>
                                        <Text style={styles.text_loc} note>Sleman, Yogyakarta</Text>
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
const styles = StyleSheet.create({
    text_head: {
        fontWeight: "bold",
        fontSize: hp("3%")

    },
    text_loc: {
        fontSize: hp("2%")
    },
    text_title: {
        fontSize: hp("2.4%")
    },
    text_note: {
        fontSize: hp("2.5%")
    },
    icn: {
        width: wp("7%"), justifyContent: 'center', alignItems: 'center'
    },
    map: {
        width: width,
        height: hp("30%"),
    }
});
function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ScreenHome)