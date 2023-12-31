import {View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';


export function ModalPassoword({password, handleClose}){
    return(
        
    <View style={styles.container}>

        <View style={styles.content}>
            <Text style={styles.title}> Senha gerada</Text>
            <Pressable style={styles.innerPassword}> 
                <Text style={styles.text}>
                    {password}
                </Text>
                
            </Pressable>

            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.button} onPress={handleClose}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                    <Text style={styles.buttonSaveText}>Save!</Text>
                </TouchableOpacity>
            </View>
   
        </View>
    </View>
    )    

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6",
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    content:{
        backgroundColor: "white",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title:{
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text:{
        color: "#FFF",
        textAlign: 'center',
    },
    buttonArea:{
        flexDirection: 'row',
        width: "90%",
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button:{
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8
    },
    buttonSave:{     
        backgroundColor: 'grey',
        borderRadius: 8   
    },
    buttonSaveText:{
        fontWeight: 'bold',
        fontSize: 17
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 17
    }

})