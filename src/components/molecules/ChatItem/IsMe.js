import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const IsMe = () => {
    return (
        <View style={styles.container}>
            <View style={styles.chatContent}>
                <Text style={styles.message}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
            </View>
            <Text style={styles.time}>4.20 AM</Text>
        </View>
    )
}

export default IsMe

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingRight: 16,
    },
    chatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.cardLight,
        maxWidth: '70%',
        borderRadius: 10,
        borderBottomRightRadius: 0,
    },
    message: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    time: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary
    }
})