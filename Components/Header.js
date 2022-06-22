import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header() {
    return (
        <View style={{
            width:360,
            height: 95,
            textAlign: 'center',
            background: ('#131e30', '#145b55')
        }}>

{/**----------------------JellyTots----------------- */}
            <View style={styles.jellies}>
                <View style={styles.yellowJelly}>
                </View>
                <View style={styles.redJelly}>
                </View>
                <View style={styles.blueJelly}>
                </View>
            </View>

            <Text style={{
                position: 'absolute',
                fontFamily: 'Roboto',
                fontSize:28,
                alignSelf: 'center',
                paddingVertical: 35,
                color: '#fff',
                }}>Jelly-Tots Creche
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    jellies: {
        top: 35,
        marginLeft: 240
    },

    yellowJelly: {
        marginLeft: 75,
        width: 20,
        height: 20, borderRadius: 50,
        backgroundColor: 'yellow',
    },

    redJelly: {
        marginLeft: 65,
        top: -5,
        width: 20,
        height: 20, borderRadius: 50,
        backgroundColor: 'red',
    },

    blueJelly: {
        marginLeft: 85,
        top: -25,
        width: 20,
        height: 20, borderRadius: 50,
        backgroundColor: 'turquoise',
    }
})

export default Header
