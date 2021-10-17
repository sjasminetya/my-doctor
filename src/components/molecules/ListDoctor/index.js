import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DMDoctor1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListDoctor = () => {
    return (
        <View style={styles.container}>
            <Image source={DMDoctor1} style={styles.image} />
            <View style={styles.wrapperTitle}>
                <Text style={styles.name}>Alexander Jannie</Text>
                <Text style={styles.chat}>Baik ibu, terima kasih banyak atas wakt...</Text>
            </View>
        </View>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center'
    },
    image: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    wrapperTitle: {
        flex: 1
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    chat: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary
    }
})
