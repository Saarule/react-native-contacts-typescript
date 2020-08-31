import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableNativeFeedback, Dimensions } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

const { width, height } = Dimensions.get('window');

interface Props {
    navigation: NavigationScreenProp<any, any>
}

interface State {
    loading: boolean,
    person: any
}


export default class Contact extends Component<Props> {
    state: Readonly<State> = {
        loading: true,
        person: null
    };

    constructor(props: Props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        this.props.navigation.navigate("Details", {
            firstName: this.state.person.name.first,
            lastName: this.state.person.name.last,
            city: this.state.person.location.city,
            street: this.state.person.location.street.name,
            streetNumber: this.state.person.location.street.number,
            email: this.state.person.email,
            phoneNumber: this.state.person.phone,
            photo: this.state.person.picture.large
        });
    }

    onPressTemp() {
        this.props.navigation.navigate("Details");
    }

    async componentDidMount() {
        // There are two versions here that I made in order to pull data from the API
        // Both versions (1 and 2) are identical in what they do, just different ways to do the same thing.

        //Version 1:
        try {
            const url = "https://api.randomuser.me";
            const response: any = await fetch(url)
            const data = await response.json();
            this.setState({ person: data.results[0], loading: false })
        } catch{
            // I've noticed that in some cases the server is not sending the data and instead
            // is sending a 500 error because it receives too many async requests
            // In this case, I'm calling the server again to retrieve the data anyway
            const url = "https://api.randomuser.me";
            const response: any = await fetch(url)
            const data = await response.json();
            this.setState({ person: data.results[0], loading: false })
        }

        //Version 2:
        // fetch("https://api.randomuser.me")
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //         this.setState({ person: responseData.results[0], loading: false });
        //     });

    }

    drawRealContent() {
        return (
            <TouchableNativeFeedback onPress={this.onPress}>
                <View style={styles.contact}>
                    <Image style={styles.image} source={{ uri: this.state.person.picture.large }} />
                    <View>
                        <Text style={styles.contactName}>{this.state.person.name.first} {this.state.person.name.last}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }

    drawTempContent() {
        return (
            <TouchableNativeFeedback onPress={this.onPressTemp}>
                <View style={styles.contact}>
                    <Image style={styles.image} source={{ uri: "https://randomuser.me/api/portraits/women/94.jpg" }} />
                    <View>
                        <Text style={styles.contactName}>First Last</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }

    render() {

        return (
            <View>
                {this.state.loading || this.state.person == null ? this.drawTempContent() : this.drawRealContent()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contact: {
        width: width / 2.4,
        height: height / 3.5,
        marginHorizontal: 10
    },
    contactName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        textAlign: "center"
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    }
})