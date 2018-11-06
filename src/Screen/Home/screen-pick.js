import React, {Component} from "react"
import {Container, Content, Text,Button} from "native-base"
import {connect} from "react-redux";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, Dimensions, View} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from "../../Component/Header";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

let {width, height} = Dimensions.get('window')

class ScreenPick extends Component {

    render() {
        return (
            <Container>
                <Header left={"arrow-left"} leftPress={() => this.props.navigation.goBack()} title={"Pick Order"}/>
                <View>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={{
                            latitude: -7.797068,
                            longitude: 110.370529,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                    </MapView>
                </View>
                <Content style={{padding: 15}}>
                    <Text>Depart</Text>
                    <View style={{flexDirection: "row"}}>
                        <View style={{flex: 1}}>
                            <Text style={styles.text_title}>
                                Pick up location
                            </Text>
                            <Text style={styles.text_title} note>
                                Pick up location
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.text_title}>
                                Drop off location
                            </Text>
                            <Text style={styles.text_title} note>
                                Drop off location
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 30}}>
                        <View style={{flex: 1}}>
                            <Text style={styles.text_title}>
                                Car
                            </Text>
                            <Text style={styles.text_title}>
                                Delivery Date
                            </Text>
                            <Text style={styles.text_title}>
                                Additional service
                            </Text>
                            <Text style={styles.text_title}>
                                Price
                            </Text>
                            <Text style={styles.text_title}>
                                Item wight
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text>
                                :
                            </Text>
                            <Text>
                                :
                            </Text>
                            <Text>
                                :
                            </Text>
                            <Text>
                                :
                            </Text>
                            <Text>
                                :
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 30}}>
                        <Text>look for shipping for the return route?</Text>
                    </View>
                    {/*<View style={{flexDirection: 'row', marginTop: 30}}>*/}

                    {/*</View>*/}
                </Content>
                <Button full light>
                    <Text>Create Order</Text>
                </Button>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
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

export default connect(mapStateToProps)(ScreenPick)