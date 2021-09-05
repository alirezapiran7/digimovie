import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Category from '@/components/Category'
import Movie from '@/components/Movie'
import * as movieActions from '@/store/movie/actions'
import { useDispatch, useSelector } from 'react-redux'
import { IconX, ICON_TYPE } from '@/icons'
import { color, metrics } from '@/constants'
import globalStyle from '@/styles'


export const Header = React.memo(({ navigation }) => {


    const dispatch = useDispatch()

    const logout = async () => {
        dispatch(authActions.logout())
    }

    return (
        <View style={globalStyle.navBar}>
            <TouchableOpacity onPress={logout}>
                <IconX name="user" origin={ICON_TYPE.FEATHER_ICONS} color={color.white} size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate('search')}>
                <IconX name="search" origin={ICON_TYPE.FEATHER_ICONS} color={color.white} size={25} />
                <Text style={[globalStyle.textGray, { marginHorizontal: metrics.m2 }]}>Search in here</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text style={[globalStyle.accentText, { fontSize: 18 }]}>En</Text>
            </TouchableOpacity>
        </View>
    )
})



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
    const selectGener = async (item) => {
        try {
            await dispatch(movieActions.searchMovie({ genre: item.name }))
            navigation.navigate('search')
        } finally {

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
                renderItem={({ item }) => (<Category item={item} onPress={() => selectGener(item)} />)}
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

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        marginHorizontal: metrics.m2,
        backgroundColor: color.postBackground,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: metrics.p2
    }
})
