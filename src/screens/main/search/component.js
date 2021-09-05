import React, { useEffect, useState, useRef } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import Category from '@/components/Category'
import Movie from '@/components/Movie'
import * as movieActions from '@/store/movie/actions'
import { useDispatch, useSelector } from 'react-redux'
import { globalStyle } from '@/styles'
import { color, metrics } from '@/constants'
import { IconX, ICON_TYPE } from '@/icons'



export const Categories = ({ navigation }) => {

    const dispatch = useDispatch()
    const geners = useSelector(state => state.movie.geners)
    const selectedGener = useSelector(state => state.movie.selectedGener)
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

    const selecteGener = async (item) => {
        try {
            dispatch(movieActions.searchMovie({ genre: item.name }))
        } catch (error) {
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
                renderItem={({ item }) => (<Category item={item} onPress={() => selecteGener(item)} isSelected={selectedGener === item.name} />)}
            />
            {isLoading && <ActivityIndicator size={'small'} />}
        </View>
    )
}

export const Movies = ({ navigation }) => {

    const movies = useSelector(state => state.movie.searchMovies)

    const { current_page, total_pages } = useSelector(state => state.movie.searchPage)

    // const getGeners = async () => {
    //     try {
    //         if (current_page < total_pages) {
    //             setIsLoading(true)
    //             dispatch(movieActions.searchMovie({page}))
    //         }
    //     } finally {
    //         setIsLoading(false)
    //     }

    // }

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

export const SearchHeader = ({ navigation }) => {

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [searchText, setSearchText] = useState('')

    const inputRef = useRef()

    const back = () => {
        navigation.goBack()
    }

    const search = async () => {
        try {
            setIsLoading(true)
            await dispatch(movieActions.searchMovie({ title: searchText }))
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
        return () => {
            try {
                dispatch(movieActions.clearSearch())
                Keyboard.dismiss()
            } catch (error) {

            }
        }
    }, [])

    useEffect(() => {
        if (searchText && searchText.length > 2) {
            search(searchText)
        }
    }, [searchText])

    return (
        <View style={globalStyle.navBar}>
            <TouchableOpacity onPress={back}>
                <IconX name="arrow-left" origin={ICON_TYPE.FEATHER_ICONS} color={color.white} size={30} />
            </TouchableOpacity>

            <View style={styles.searchContainer}>
                <IconX name="search" origin={ICON_TYPE.FEATHER_ICONS} color={color.white} size={25} />
                <TextInput
                    style={[globalStyle.title, { flex: 1, marginHorizontal: metrics.m2 }]}
                    ref={inputRef}
                    onChangeText={(value) => setSearchText(value)}
                />
                {isLoading && <ActivityIndicator />}
            </View>
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
