import {View, StyleSheet, Text} from 'react-native' 

function Menu() {

        return(
            <View style={styles.menuBar} >
                <Text style={styles.menu1}>=
                </Text>

                <View style={{ top: -41 }}>
                    <Text style={styles.menu2}>_
                    </Text>
                </View>
            </View>
        )

}

const styles = StyleSheet.create({
    menuBar: {
        padding: 26,
    },

    menu1: {
        fontSize: 28,
        // cursor: 'pointer',
        color: '#fff',
    },

    menu2: {
        paddingLeft: 3,
        fontSize: 30,
        // cursor: 'pointer',
        color: '#fff',
    },
})

export default Menu