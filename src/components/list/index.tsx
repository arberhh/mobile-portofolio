import React from 'react'
import { Text, View } from 'react-native'
import { commonStyles } from '../../common'
import { ListProps } from '../../types'

export default function List({ items, icon, color, title }: ListProps) {
  return (
    <View>
      <View style={[commonStyles.row, commonStyles.alignCenter, commonStyles.mt20, commonStyles.mb10]}>
        {icon}
        <Text style={[commonStyles.title, { color: color }]}>{title}</Text>
      </View>
      {
        items.map((item: string) => <Text style={[commonStyles.subtitle, { color: color }]} key={item}>• {item}</Text>)
      }
    </View>
  )
}
