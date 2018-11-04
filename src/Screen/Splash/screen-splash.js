import React, {Component} from 'react';
import {Container, Content} from "native-base";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {connect} from 'react-redux';

class SplashScreen extends Component {

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                    </MapView>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
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
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(SplashScreen)