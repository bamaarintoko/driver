import React,{Component} from "react"
import {Container, Content, Text, Thumbnail, View} from "native-base"
import {connect} from "react-redux";
import {Header} from "../../Component/Header";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from "react-native";

class ScreenAccount extends Component{
    render(){
        return(
            <Container style={{backgroundColor: '#E0E0E0'}}>
                <Header title={"Account"}/>
                <Content>
                    <Content>
                        <View style={{backgroundColor: "#FFF", height: hp("15%"), flexDirection: 'row'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Thumbnail large style={{width: wp("17%"), height: wp("17%")}}
                                           source={{uri: "http://d3q5x9z5q0y6mi.inscname.net/images/ee9df2b19886b355dceab9c832e7ba2f/7772fVKY9fOv.jpg"}}/>
                            </View>
                            <View style={{flex: 3, padding: 5, justifyContent: 'center'}}>
                                <Text style={styles.text_name}>Marina Callista Lark</Text>
                                <Text style={styles.text_email}>marinacallista.lark@gmail.com</Text>
                                <Text style={styles.text_hp}>+6289566778899</Text>
                            </View>
                        </View>

                    </Content>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    text_name: {
        fontSize: hp("2.5%")
    },
    text_email: {
        fontSize: hp("2.5%"),
        color:"#9E9E9E"
    },
    text_hp: {
        fontSize: hp("2.5%"),
        color:"#9E9E9E"
    }
})
function mapStateToProps() {
    return{}
}

export default connect(mapStateToProps)(ScreenAccount)