import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Header from '../Components/Header'
import gradeImg from '../Books/Khoikhoi.jpg'

function Homework({ prevPage, grade }) {
   

    return (
        <View>
            <Header />
            <Text style={styles.back}
                onClick={prevPage}>back</Text>

            <View style={styles.content}>
                <Image source={gradeImg}
                    style={styles.homeImg} />            
                <Text style={{ fontSize: 20, }}>Grade{grade}</Text>
                <Text style={{fontSize:20, }}>Homework</Text>
            </View>

          
        </View>
    )
}

const styles = StyleSheet.create({

    back: {
        position: 'absolute',
        color: '#fff',
        fontSize: 18,
        color: '#fff'
    },

    content: {
        width: 360,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around'
    },

    homeImg: {
        position: 'absolute',
        top: 95,
        width: 360,
        height: 300,
        alignItems: 'center',
    },
})

export default Homework