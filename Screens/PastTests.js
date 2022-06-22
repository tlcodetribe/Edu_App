import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import gradeImg from '../Books/TheWorld.jpg'
import Header from '../Components/Header'

function PastTests({ prevPage, grade }) {
    return (
        <View>
            <Header />
            <Text style={{ position: 'absolute', fontSize: 18, color: '#fff' }}
                onClick={prevPage}>back</Text>


            <View style={{ width: 360, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-around' }}>
                <Image source={gradeImg}
                    style={styles.homeImg} />
                <Text style={{ fontSize: 20, }}>Grade{grade}</Text>
                <Text style={{ fontSize: 20, }}>Past Tests</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeImg: {
        position: 'absolute',
        top: 95,
        width: 360,
        height: 300,
        alignItems: 'center',
    },
})

export default PastTests