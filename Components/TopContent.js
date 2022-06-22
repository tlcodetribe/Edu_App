import { StyleSheet, View, Text, Image } from 'react-native'

function TopContent({grade, gradeImg}) {
    return (
        < View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%', flexDirection: 'row',
        }}>
            <View style={{
                position: 'absolute', top: 10,
                width: 320,
                alignItems: 'flex-end',
                color: '#fff'
            }}
            >
                <Text style={{color:'#fff'}}>
                    BACK
                </Text>
            </View>

            <View style={{
                position: 'absolute',
                top: 10,
                alignItems: 'center',
            }}>
                <Text style={{
                    alignSelf: 'center',
                    fontSize: 20, color: '#fff'
                }}> Grade{grade} </Text>
            </View>

            <Image source={gradeImg}
                style={styles.homeImg} />

        </View >
    )
}

const styles = StyleSheet.create({
    homeImg: {
        position: 'absolute',
        top: 95,
        width: 360,
        height: 550,
        alignItems: 'center',
    },
})

export default TopContent
    