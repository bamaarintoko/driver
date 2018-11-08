import React, {Component} from "react"
import {Body, Container, Content, Left, List, ListItem, Right, Text} from "native-base"
import {connect} from "react-redux";
import {Header} from "../../Component/Header";
import {StyleSheet, TouchableWithoutFeedback} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ScreenOrder extends Component {
    render() {
        return (
            <Container>
                <Header title={"Order"}/>
                <Content>
                    <List>
                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("Detail")}>
                            <ListItem avatar>
                                <Left>
                                    <Icon name={"archive"} size={hp("4%")} color={"#D50000"}/>
                                </Left>
                                <Body>
                                <Text style={style.text_order}>Order Number : ######</Text>
                                <Text style={style.text_order} note>Origin : </Text>
                                <Text style={style.text_order} note>Destination : </Text>
                                <Text style={style.text_order} note>Driver : </Text>
                                <Text style={style.text_order} note>Car Number : </Text>
                                </Body>
                                <Right>
                                    <Icon name={"check-square-o"} size={hp("3%")} color={"#D50000"}/>
                                </Right>
                            </ListItem>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("Detail")}>
                            <ListItem avatar>
                                <Left>
                                    <Icon name={"archive"} size={hp("4%")} color={"#D50000"}/>
                                </Left>
                                <Body>
                                <Text style={style.text_order}>Order Number : ######</Text>
                                <Text style={style.text_order} note>Origin : </Text>
                                <Text style={style.text_order} note>Destination : </Text>
                                <Text style={style.text_order} note>Driver : </Text>
                                <Text style={style.text_order} note>Car Number : </Text>
                                </Body>
                                <Right>
                                    <Icon name={"check-square-o"} size={hp("3%")} color={"#D50000"}/>
                                </Right>
                            </ListItem>
                        </TouchableWithoutFeedback>
                    </List>
                </Content>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    text_order: {
        fontSize: hp("2.4%")
    },
    text_date: {
        fontSize: hp("2.4%"),
        marginRight: 5
    },
    text_status: {
        fontSize: hp("2.4%"),
        marginLeft: 5
    }
})

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(ScreenOrder)