import React, {Component} from "react"
import {Container, Content, Text, Button, List, ListItem, Left, Body, Right} from "native-base"
import {connect} from "react-redux";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {StyleSheet, Dimensions, View, TouchableWithoutFeedback} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from "../../Component/Header";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Spinner from 'react-native-spinkit';
import Modal from "react-native-modal";
import MapViewDirections from 'react-native-maps-directions';
let {width, height} = Dimensions.get('window')
let GOOGLE_MAPS_APIKEY="AIzaSyCJf2cmsLing8mvifAQo9LR9o_ubFbedIA"
class ScreenPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            return_route: false,
            show_data: false,
            show_loading: false,
            pick_return: true,
            isModalVisible: false
        }


    }

    _toggleModal = () => {
        return () => {

            this.setState({isModalVisible: !this.state.isModalVisible});
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
    onCancel = () => {
        return () => {
            this.setState({
                show_data: !this.state.show_data,
                show_loading: false,
                return_route: !this.state.return_route,
            })
        }
    }
    onKeyBack = () => {
        return () => {
            console.log("asdf")
            this.setState({
                isModalVisible: false
            })
        }
    }

    render() {
        console.log(this.state.show_data)
        return (
            <Container>
                <Header left={"arrow-left"} leftPress={() => this.props.navigation.goBack()} title={"Pick Order"}/>
                <Modal isVisible={this.state.isModalVisible} onBackButtonPress={this.onKeyBack()}>
                    <View style={{flex: 1, backgroundColor: "#FFF"}}>
                        <MapView.Animated
                            // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={styles.map}
                            region={{
                                latitude: -7.797068,
                                longitude: 110.370529,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: -7.797068,
                                    longitude: 110.370529
                                }}
                            />
                            <MapView.Marker
                                coordinate={{
                                    latitude: -7.71556,
                                    longitude: 110.35556
                                }}
                            />
                            <MapViewDirections
                                origin={{latitude: -7.797068,
                                    longitude: 110.370529}}
                                destination={{
                                    latitude: -7.71556,
                                    longitude: 110.35556
                                }}
                                strokeColor={"#B00020"}
                                strokeWidth={3}
                                apikey={GOOGLE_MAPS_APIKEY}
                            />
                        </MapView.Animated>
                        <View style={{flexDirection: "row", padding: 5, marginTop: 20}}>
                            <View style={{flex: 1}}>
                                <Text>Pick up location</Text>
                                <Text note>Pick up location</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text>Drop off location</Text>
                                <Text note>Drop off location</Text>

                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10, padding: 5}}>
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
                                    Item weight
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={styles.text_title}>
                                    :
                                </Text>
                                <Text style={styles.text_title}>
                                    :
                                </Text>
                                <Text style={styles.text_title}>
                                    :
                                </Text>
                                <Text style={styles.text_title}>
                                    :
                                </Text>
                                <Text style={styles.text_title}>
                                    :
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{position: 'absolute', bottom: 0, width: '100%', padding: 5, flexDirection: "row"}}>
                            <View style={{flex: 1, margin: 5}}>
                                <Button full light onPress={this.onKeyBack()} style={{backgroundColor: "#FFCA28"}}>
                                    <Text>Cancel</Text>
                                </Button>
                            </View>
                            <View style={{flex: 1, margin: 5}}>
                                <Button full light onPress={this.onKeyBack()} style={{backgroundColor: '#00B0FF'}}>
                                    <Text>Pick Order</Text>
                                </Button>
                            </View>

                        </View>
                    </View>

                </Modal>
                <View>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={{
                            latitude: -7.71556,
                            longitude: 110.35556,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: -7.797068,
                                longitude: 110.370529
                            }}
                        />
                        <MapView.Marker
                            coordinate={{
                                latitude: -7.71556,
                                longitude: 110.35556
                            }}
                        />
                        <MapViewDirections
                            origin={{latitude: -7.797068,
                                longitude: 110.370529}}
                            destination={{
                                latitude: -7.71556,
                                longitude: 110.35556
                            }}
                            strokeColor={"#B00020"}
                            strokeWidth={3}
                            apikey={GOOGLE_MAPS_APIKEY}
                        />
                    </MapView>
                </View>
                <Content style={{padding: 15}}>
                    <View>
                        <Text style={styles.text_head}>Depart</Text>
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
                        <View style={{flexDirection: 'row', marginTop: 10}}>
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
                                    Item weight
                                </Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={styles.text_title}>
                                    :
                                </Text>
                                <Text style={styles.text_title}>
                                    :
                                </Text>
                                <Text style={styles.text_title}>
                                    :
                                </Text>
                                <Text style={styles.text_title}>
                                    :
                                </Text>
                                <Text style={styles.text_title}>
                                    :
                                </Text>
                            </View>
                        </View>
                    </View>
                    {
                        this.state.pick_return
                        &&
                        <View style={{marginTop: 20}}>
                            <Text style={styles.text_head}>Return</Text>
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
                            <View style={{flexDirection: 'row', marginTop: 10}}>
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
                                    <Text style={styles.text_title}>
                                        :
                                    </Text>
                                    <Text style={styles.text_title}>
                                        :
                                    </Text>
                                    <Text style={styles.text_title}>
                                        :
                                    </Text>
                                    <Text style={styles.text_title}>
                                        :
                                    </Text>
                                    <Text style={styles.text_title}>
                                        :
                                    </Text>
                                </View>
                            </View>
                        </View>
                    }

                    <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                        {
                            this.state.return_route
                                ?
                                <TouchableWithoutFeedback onPress={this.onCancel()}>
                                    <View style={{height: 40, alignItems: "center", justifyContent: "center"}}>
                                        <Text style={styles.text_title}>Cancel</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                :
                                <TouchableWithoutFeedback onPress={this.onReturn()}>
                                    <View style={{height: 40, alignItems: "center", justifyContent: "center"}}>
                                        <Text style={styles.text_title}>look for shipping for the return route?</Text>
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
                                <TouchableWithoutFeedback onPress={this._toggleModal()}>
                                    <ListItem avatar>
                                        <Left>
                                        </Left>
                                        <Body>
                                        <Text style={styles.text_title}>Paket Buku</Text>
                                        <Text style={styles.text_loc} note>Delivery Date : 26 February 2019 07:00
                                            PM</Text>
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
                                <TouchableWithoutFeedback onPress={this._toggleModal()}>
                                    <ListItem avatar>
                                        <Left>
                                        </Left>
                                        <Body>
                                        <Text style={styles.text_title}>Dokumen X</Text>
                                        <Text style={styles.text_loc} note>Delivery Date : 26 February 2019 07:00
                                            PM</Text>
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
                        </View>
                    }

                    {/*<View style={{flexDirection: 'row', marginTop: 30}}>*/}

                    {/*</View>*/}
                </Content>
                <Button full light style={{backgroundColor: '#00B0FF'}}>
                    <Text>Create Order</Text>
                </Button>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    text_head: {
        fontWeight: "bold",
        fontSize: hp("2.8%")

    },
    text_loc: {
        fontSize: hp("2%")
    },
    text_title: {
        fontSize: hp("2%")
    },
    text_note: {
        fontSize: hp("2%")
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