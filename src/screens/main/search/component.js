import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import Category from '@/components/Category'
import Movie from '@/components/Movie'
import * as movieActions from '@/store/movie/actions'
import { useDispatch, useSelector } from 'react-redux'



export const Categories = ({ navigation }) => {

    const dispatch = useDispatch()
    const geners = useSelector(state => state.movie.geners)
    const { current_page, total_pages } = useSelector(state => state.movie.generPage)
    const [isLoading, setIsLoading] = useState(false)

    const getGeners = async () => {
        try {
            if (current_page < total_pages) {
                setIsLoading(true)
                dispatch(movieActions.getGenres(current_page + 1))
            }
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getGeners()
    }, [dispatch])

    return (
        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>

            <FlatList
                data={geners}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                onEndReached={(props) => {
                    getGeners()
                }}
                renderItem={({ item }) => (<Category item={item} onPress={() => navigation.navigate('search', { categoryId: item.id })} />)}
            />
            {isLoading && <ActivityIndicator size={'small'} />}
        </View>
    )
}

export const Movies = ({ navigation }) => {

    const dispatch = useDispatch()
    const movies = useSelector(state => state.movie.movies)

    const { current_page, total_pages } = useSelector(state => state.movie.moviePage)
    const [isLoading, setIsLoading] = useState(false)

    const getGeners = async () => {
        try {
            if (current_page < total_pages) {
                setIsLoading(true)
                dispatch(movieActions.getMovies(current_page + 1))
            }
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getGeners()
    }, [dispatch])

    return (
        <View style={{ width: '100%', flex: 1 }}>
            <FlatList
                data={movies}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (<Movie item={item} onPress={() => { }} />)}
            />
        </View>
    )
}


const styles = StyleSheet.create({})
