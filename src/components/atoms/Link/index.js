import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Link = ({ text, size, align }) => {
    return (
        <View>
            <Text style={styles.text(size, align)}>{text}</Text>
        </View>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (size, align) => ({
        color: '#7D8797',
        fontFamily: 'Nunito-Regular',
        textDecorationLine: 'underline',
        fontSize: size,
        textAlign: align
    })
})