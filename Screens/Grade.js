import { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import gradeImg from '../Books/Colonization.jpg';
import App from '../App'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import PastExams from './PastExams'
import PastTests from './PastTests'
import Homework from './Homework'
import Assignments from './Assignments'
import Category from '../Components/Category'

const Grade = ({ grade }) => {
      
    const [menu, setMenu] = useState(false)
    const [home, setHome] = useState(false)

    const [homework, setHomework] = useState(false)
    const [assignments, setAssignments] = useState(false)
    const [pastTests, setPastTests] = useState(false)
    const [pastExams, setPastExams] = useState(false)

    const prevPage = () => {
        
                setAssignments(false)
                setHomework(false)
                setPastExams(false)
                setPastTests(false)
           
    }

    const onHomework = () => {
        setHomework(!homework),
            setAssignments(false),
            setPastTests(false),
            setPastExams(false)
    },

        onAssignments = () => {
            setAssignments(!assignments)
            setHomework(false),
                setPastTests(false),
                setPastExams(false)
        },

        onTests = () => {
            setPastTests(!pastTests),
                setAssignments(false),
                setHomework(false),
                setPastExams(false)
        },

        onExams = () => {
            setPastExams(!pastExams),
                setAssignments(false),
                setPastTests(false),
                setHomework(false)
        }

    return (
        <View>
            {home ? (
                <App />
            )
                :
                (
                !homework ? (
                !assignments ? (
                    !pastTests ? (
                        !pastExams ? (


                            <View >
                                <Header />
                                {!menu ?
                                    (
                                        <View style={{
                                            position: 'absolute',
                                        }}>
                                                    

                                            <View onClick={() => setMenu(!menu)}>
                                                <Menu />
                                                    </View>
                                                    
                                                    <View style={styles.topContent}>
                                                        <Text style={{ color: '#fff' }}
                                                            onClick={() => setHome(!home)}>back</Text>
                                                    </View> 

                                           
                                                    <View style={{ width: 360, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-around' }}>
                                                    <Text style={{
                                                        fontSize: 20,
                                                    }}>
                                                        Grade{grade}
                                                        </Text>
                                                        <Image source={gradeImg}
                                                            style={styles.homeImg} />
                                                        </View>

                                        </View>

                                    ) : (

                                        /*----------------------Menu----------------- */
                                        <View style={{ position: 'absolute' }}>
                                            <View style={{ width: 360, textAlign: "center" }}>
                                                <Text style={{
                                                    fontSize: 20,
                                                    color: "#fff"
                                                }}>
                                                    Grade{grade}
                                                </Text>
                                            </View>

                                            <View onClick={() => setMenu(!menu)}>
                                                <Menu />
                                            </View>

                                            {/**------------------------------Image---------------------------------------- */}
                                            <Image source={gradeImg}
                                                style={styles.homeImg} />

                                            {/**Menu----------------Menu------------------Menu------------------------ */}
                                            <View style={styles.gradesMenu}>


                                                <Category onHomework={onHomework} onAssignments={onAssignments} onTests={onTests} onExams={onExams}/>

                                            </View>
                                        </View>

                                    )}

                            </View>
                        ) : (
                                <PastExams prevPage={prevPage} grade={grade} />
                        )
                    ) : (
                            <PastTests prevPage={prevPage} grade={grade} />
                    )
                ) : (
                        <Assignments prevPage={prevPage} grade={grade} />
                )
            ) : (
                    <Homework prevPage={prevPage} grade={grade} />

            ))}

        </View>
    )
}

const styles = StyleSheet.create({

    topContent: {
        position:'absolute',
        width: 320,
        flexDirection: 'row',
        left: 20,
        justifyContent: 'space-between'
    },

    menuBar: {
        position: 'absolute',
        top: 0,
        alignItems: 'flex-start'
    },

    categories: {
        paddingTop: 10,
        fontSize: 18,
        color: '#fff',
    },

    homeImg: {
        position: 'absolute',
        top: 95,
        width: 360,
        height: 300,
        alignItems: 'center',
    },

    mainContent: {
        position: 'relative',
        width: 335,
        left: 15,
        top: 290,
    },

    grades: {
        paddingTop: 15,
        fontSize: 17,
        color: '#fff',
    },

    gradesMenu: {
        position: 'absolute',
        width: 160,
        height: 330,
        top: 94,
        opacity: 0.9,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#f47066'
    }
})

export default Grade