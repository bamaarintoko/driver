import React from 'react';
import {StatusBar} from "react-native"
import {Button, Text, View} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

export const Header = ({left, title,leftPress}) => {
    return (
        <View>
            <StatusBar backgroundColor="#B00020"/>
            <View style={{
                flexDirection: 'row',
                height: 50,
                backgroundColor: '#FFF',
                // borderBottomColor: '#BDBDBD',
                // borderBottomWidth: 1
            }}>
                {
                    left !== undefined
                    &&
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Button full transparent light onPress={leftPress}>
                            <Icon color={'#000000'} size={wp("5%")}
                                  name="arrow-left"/>
                        </Button>
                    </View>
                }

                <View style={{flex: 4, justifyContent: 'center', paddingLeft: 15}}>
                    <Text style={{fontSize: 18, fontWeight: "bold"}}>
                        {title}
                    </Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Button full transparent light>
                    </Button>
                </View>
            </View>
        </View>
    )
}
