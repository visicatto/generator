import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { AntDesign } from "@expo/vector-icons"

export function PasswordItem({ data, removePassword }) {
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
    };

    const renderPassword = () => {
        if (isPasswordVisible) {
            return data;
        } else {
            return "*".repeat(data.length);
        }
    };

    return (
        <View>
            <Pressable onLongPress={removePassword} style={styles.container}>
                <Text style={styles.text}>
                    {renderPassword()}
                </Text>
                <Pressable onPress={togglePasswordVisibility}>
                    <AntDesign name={isPasswordVisible ? 'eye' : 'eyeo'} style={styles.icon} />
                </Pressable>
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
        width: "100%",
        fontSize: 30,
       
        color: 'black'

    }
})
