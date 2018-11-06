import React, {Component} from "react"
import {Container, Content, Text, Button, List, ListItem, Left, Body, Right} from "native-base"
import {connect} from "react-redux";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, Dimensions, View, TouchableWithoutFeedback} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from "../../Component/Header";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Spinner from 'react-native-spinkit';

let {width, height} = Dimensions.get('window')

class ScreenPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            return_route: false,
            show_data: false,
            show_loading:false
        }


    }

    onReturn = () => {
        return () => {
            this.setState({
                return_route: !this.state.return_route,
                // show_data: !this.state.show_data,
                show_loading: !this.state.show_loading
            })

            setTimeout(() => {
                this.setState({
                    show_data: !this.state.show_data,
                    show_loading: !this.state.show_loading
                })

            }, 2000)
        }
    }
    onCancel = ()=>{
        return ()=>{
            this.setState({
                show_data: !this.state.show_data,
                show_loading: false,
                return_route: !this.state.return_route,
            })
        }
    }

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

                    <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                        {
                            this.state.return_route
                                ?
                                <TouchableWithoutFeedback onPress={this.onCancel()}>
                                    <View style={{height: 40, alignItems: "center", justifyContent: "center"}}>
                                        <Text>Cancel</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                :
                                <TouchableWithoutFeedback onPress={this.onReturn()}>
                                    <View style={{height: 40, alignItems: "center", justifyContent: "center"}}>
                                        <Text>look for shipping for the return route?</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                        }

                    </View>
                    {
                        this.state.show_loading
                        &&
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Spinner type={'ChasingDots'} color={"#013976"}/>
                        </View>
                    }
                    {
                        this.state.show_data
                        &&
                        <View style={{marginBottom: 50}}>
                            <List>
                                <TouchableWithoutFeedback onPress={() => console.log("asd")}>
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
                        </View>
                    }

                    {/*<View style={{flexDirection: 'row', marginTop: 30}}>*/}

                    {/*</View>*/}
                </Content>
                {/*<Button full light>*/}
                {/*<Text>Create Order</Text>*/}
                {/*</Button>*/}
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