import { View, Text } from 'react-native'
import React, { Children } from 'react'

const AppwriteContext = ({Children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const defaultValue = {
        appwrite: new Appwrite(),
        isLoggedIn,
        setIsLoggedIn
    }

  return (
   <AppwriteContext.Provider value={defaultValue}>
    {Children}
   </AppwriteContext.Provider>
  )
}

export default AppwriteContext