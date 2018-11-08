import React,{Component} from "react"
import {Body, Container, Content, Left, List, ListItem, Right, Text, View} from "native-base"
import {connect} from "react-redux";
import {Header} from "../../Component/Header";
import {StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class ScreenWallet extends Component{
    render(){
        return(
            <Container style={{backgroundColor: "#E0E0E0"}}>
                <Header title={"Wallet"}/>
                <View style={{height: hp("30%"), backgroundColor: "#fff", alignItems: "center"}}>
                    <View style={styles.wallet}>
                        <Text>Current Balance</Text>
                    </View>
                    <Text style={{fontSize: wp("8%"), fontWeight: "bold"}}>Rp 550.000</Text>
                    <View style={{alignItems: 'center', marginTop: hp("1%")}}>
                        <Icon name={"arrow-down"} size={wp("10%")}/>
                        <Text style={{fontSize: wp("5%"), fontWeight: "bold"}}>Withdraw</Text>
                    </View>
                </View>
                <View style={{height: hp("7%"), justifyContent: 'center', paddingLeft: 15}}>
                    <Text>Balance History</Text>
                </View>
                <Content style={{backgroundColor: "#fff"}}>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"long-arrow-up"} size={hp("5%")} color={"#64DD17"}/>
                            </Left>
                            <Body>
                            <Text style={styles.text_tile}>Deposit</Text>
                            <Text note>Rp 500.000</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"long-arrow-down"} size={hp("5%")} color={"#D50000"}/>
                            </Left>
                            <Body>
                            <Text style={styles.text_tile}>Pay</Text>
                            <Text note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"long-arrow-down"} size={hp("5%")} color={"#D50000"}/>
                            </Left>
                            <Body>
                            <Text style={styles.text_tile}>Pay</Text>
                            <Text note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"long-arrow-down"} size={hp("5%")} color={"#D50000"}/>
                            </Left>
                            <Body>
                            <Text style={styles.text_tile}>Pay</Text>
                            <Text note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Icon name={"long-arrow-down"} size={hp("5%")} color={"#D50000"}/>
                            </Left>
                            <Body>
                            <Text style={styles.text_tile}>Pay</Text>
                            <Text note>Rp 50.000</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    wallet: {
        marginTop: hp("2%"),
        marginBottom: hp("2%"),
        height: wp("10%"),
        backgroundColor: "#E3F2FD",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 35
    },
    text_tile:{
        fontSize:hp("3%")
    }
});
function mapStateToProps() {
    return{}
}
export default connect(mapStateToProps)(ScreenWallet)