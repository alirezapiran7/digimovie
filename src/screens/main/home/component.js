import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import geners from '@/data/geners.json'
import movies from '@/data/movies.json'
import Category from '@/components/Category'
import Movie from '@/components/Movie'

export const Categories = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState([])

    return (
        <View style={{ width: '100%', height: 60 }}>
            <FlatList
                data={geners}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) => (<Category item={item} onPress={() => setSelectedCategory(item.id)} isSelected={selectedCategory === item.id} />)}
            />
        </View>
    )
}

export const Movies = ({ navigation }) => {

    return (
        <View style={{ width: '100%', flex: 1 }}>
            <FlatList
                data={movies}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (<Movie item={item} onPress={() => setSelectedCategory(item.id)} />)}
            />
        </View>
    )
}


const styles = StyleSheet.create({})
