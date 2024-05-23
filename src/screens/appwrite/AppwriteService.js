import { View, Text } from 'react-native'
import React from 'react'

const AppwriteService = () => {
    const [isLogged, setIsLogged] = useState(false)

    const defaultValue = {
        appwrite: new Appwrite(),
        
    }

  return (
    <View>
      <Text>AppwriteService</Text>
    </View>
  )
}

export default AppwriteService