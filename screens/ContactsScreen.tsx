import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableNativeFeedback } from 'react-native';
import Contact from '../components/Contact'
import { NavigationScreenProp } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<any, any>
}

export default class ContactsScreen extends Component<Props> {


    render() {
        return (
            <View>
                <ScrollView >
                    <View style={styles.container} >
                        <Contact navigation={this.props.navigation} />
                        <Contact navigation={this.props.navigation} />
                    </View>
                    <View style={styles.container} >
                        <Contact navigation={this.props.navigation} />
                        <Contact navigation={this.props.navigation} />
                    </View>
                    <View style={styles.container} >
                        <Contact navigation={this.props.navigation} />
                        <Contact navigation={this.props.navigation} />
                    </View>
                    <View style={styles.container} >
                        <Contact navigation={this.props.navigation} />
                        <Contact navigation={this.props.navigation} />
                    </View>
                    <View style={styles.container} >
                        <Contact navigation={this.props.navigation} />
                        <Contact navigation={this.props.navigation} />
                    </View>
                    <View style={styles.container} >
                        <Contact navigation={this.props.navigation} />
                        <Contact navigation={this.props.navigation} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 50
    },
    wrapper: {
        flex: 1,
    },
    contact: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'grey',
        marginBottom: 10
    },
    contactName: {
        fontWeight: '600',
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
        marginRight: 10
    }
})