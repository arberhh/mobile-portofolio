import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { useTheme } from '../../context'
import { commonStyles } from '../../common'

interface UserProps {
  // Define any props needed for the Home component
}

const User: React.FC<UserProps> = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[commonStyles.flex, { backgroundColor: theme.screenBackground }]}>
      <Text>User</Text>
    </SafeAreaView>
  )
}

export default User
