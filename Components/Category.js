import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

function Category({onHomework, onAssignments, onTests, onExams}) {

    return (
        <View style={{
            position: 'relative',
            width: 180, height: 559,
            left: 0,
            opacity: 0.9,
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#f47066',

        }}>

            <View style={{ top: 20, }}>
                <Text style={{ color: '#fff', fontSize: 20 }}> Choose Category:</Text>
            </View>

            <View style={{ top: 35 }}>
                <Text style={styles.categories}
                    onClick={onHomework}>
                    Homework
                </Text>
                <Text style={styles.categories}
                    onClick={onAssignments}>
                    Assignments
                </Text>
                <Text style={styles.categories}
                    onClick={onTests}>
                    Tests
                </Text>
                <Text style={styles.categories}
                    onClick={onExams}>
                    Exams
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    categories: {
        paddingTop: 10,
        fontSize: 18,
        color: '#fff',
    }
})
    


export default Category