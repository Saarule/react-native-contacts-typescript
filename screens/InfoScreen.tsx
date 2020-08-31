import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableNativeFeedback } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<any, any>,
    route: any
}

export default class InfoScreen extends Component<Props> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const { firstName, lastName, city, street, streetNumber, country, email, phoneNumber, photo } = this.props.route.params;
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.skyBlue}></View>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.image} source={{ uri: photo }} />
                        <Text style={styles.name}>{firstName} {lastName}</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.metadataWrapper}>
                        <Text style={styles.metadata}>Address: </Text>
                        <Text style={styles.detailData}>{street} {streetNumber}, {city}</Text>
                    </View>
                    <View style={styles.metadataWrapper}>
                        <Text style={styles.metadata}>Email: </Text>
                        <Text style={styles.detailData}>{email}</Text>
                    </View>
                    <View style={styles.metadataWrapper}>
                        <Text style={styles.metadata}>Phone: </Text>
                        <Text style={styles.detailData}>{phoneNumber}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    skyBlue: {
        backgroundColor: '#003459',
        height: 100,
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: -75,
        marginBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 100,
    },
    name: {
        fontSize: 40,
        color: 'black',
    },
    metadataWrapper: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    metadata: {
        fontWeight: '600',
        fontSize: 15,
        width: 120,
        textAlign: 'right',
        marginRight: 5
    },
    detailData: {
        fontSize: 15
    }
})