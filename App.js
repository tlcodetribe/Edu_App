import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'
import homeLogo from './Books/exams.jpg';
import Menu from './Components/Menu'
import Grade from './Screens/Grade';
import Header from './Components/Header'
// import { Avatar } from 'react-native-elements'
import './App.css'


function App() {
  const [grade, setGrade] = useState(0)
  const [menu, setMenu] = useState(false)


  return (
    <View style={styles.container}>


      
      {/**-----------------Content----------------- */}
      <View>
        {!grade  ? (

          <View style={{ width: 360, height: 740, background: ('#141e30', '#243b55') }} >
                        <Header />
                        {!menu ?
                          (
                            <View style={{
                              position: 'absolute',
                            }}>
                              
                              {/* <Avatar title="hv" size="small" rounded={true} /> */}
                              <View onClick={() => setMenu(!menu)}>
                                <Menu />
                              </View>

                              {/**------------------------------Image---------------------------------------- */}
                              <Image source={homeLogo}
                                style={styles.homeImg} />

                  
                              <View style={styles.mainContent}>
                                <Text style={{
                                  fontSize: 20,
                                  color:'#fff'
                                }}>
                                  Edu-Care thrives to better the education
                                  of the youth, with the aim to develop a brighter
                                  tommorrow!
                                </Text>
                              </View>

                            </View>

                          ) : (

                            /*----------------------Menu----------------- */
                            <View style={{ position: 'absolute' }}>
                              <View onClick={() => setMenu(!menu)}>
                                <Menu />
                              </View>

                              {/**------------------------------Image---------------------------------------- */}
                              <Image source={homeLogo}
                                style={styles.homeImg} />

                              <View style={styles.mainContent}>
                                <Text style={{
                                  fontSize: 20,
                                }}>
                                  Edu-Care thrives to better the education
                                  of the youth, with the aim to develop a brighter
                                  tommorrow!
                                </Text>
                              </View>

                              {/**Menu----------------Menu------------------Menu------------------------ */}
                              <View style={styles.gradesMenu}>

                                <Text style={{ paddingTop: 20, fontSize: 18, color: '#fff' }}>
                                  Choose Grade:
                                </Text>


                                {/**---------------------------Create flatlist------------------------- */}
                                <View style={{ paddingTop: 15 }}>
                                  <Text style={styles.grades}
                                    onClick={() => setGrade(1)}>
                                    GRADE1
                                  </Text>
                                  <Text style={styles.grades}
                                    onClick={() => setGrade(2)}>
                                    GRADE2
                                  </Text>
                                  <Text style={styles.grades}
                                    onClick={() => setGrade(3)}>
                                    GRADE3
                                  </Text>
                                  <Text style={styles.grades}
                                    onClick={() => setGrade(4)}>
                                    GRADE4
                                  </Text>
                                  <Text style={styles.grades}
                                    onClick={() => setGrade(5)}>
                                    GRADE5
                                  </Text>
                                  <Text style={styles.grades}
                                    onClick={() => setGrade(6)}>
                                    GRADE6
                                  </Text>
                                  <Text style={styles.grades}
                                    onClick={() => setGrade(7)}>
                                    GRADE7
                                  </Text>
                                </View>

                              </View>
                            </View>

                          )}

                      </View>
                    ) : (
                      
          <Grade grade={grade} />
        )}

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width:120
  },

  /* .App-logo2 {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo2 {
      animation: App-logo-spin2 infinite 20s linear;
    }
  } */

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
  },


})

export default App
