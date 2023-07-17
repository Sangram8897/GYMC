import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => console.log('https', res))
      .catch(err => console.log('https', err))
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})