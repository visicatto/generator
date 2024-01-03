import { Text, StyleSheet, View, Pressable } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons"

export function PasswordItem({ data, removePassword }) {

    return (
        <View>
            <Pressable onLongPress={removePassword} style={styles.container}>

                <Text style={styles.text}
                    secureTextEntry={true}
                >{data}</Text>
                <Feather name={"trash-2"} style={styles.icon} />

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: "#FFF"
    },
    icon: {
        width: "8%",
        fontSize: 20,
        color: 'red'

    }
})
