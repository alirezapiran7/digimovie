import globalStyle from '@/styles'
import React, { useCallback } from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from '@/components/Text'
import { color, metrics } from '@/constants'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Logo from '@/asstes/icons/logo.png'


const index = ({ item, navigation }) => {

    const praperPoster = useCallback(
        (poster) => {
            console.log(poster);
            return poster.replace(' =>//', '://')
        }
        , [])

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.posterContainer}>
                <Image style={styles.postr} source={{ uri: praperPoster(item.poster) }} />
            </View>

            <View style={styles.detail}>
                <View>
                    <Text style={globalStyle.textBold}>{item.title}</Text>
                    <Text style={globalStyle.text}>{item.year}</Text>
                </View>



                <Text numberOfLines={5} style={[globalStyle.text, { marginStart: metrics.m2, }]}>{item?.plot}</Text>


                <View style={styles.row}>
                    <View style={styles.imdbBox}>
                        <Text style={styles.imdbText}>{item?.imdb_rating ? item?.imdb_rating : 0}</Text>
                    </View>

                    <View style={styles.ratingBar}>
                        <AirbnbRating
                            ratingCount={5}
                            size={12}
                            isDisabled={true}
                            showRating={false}

                            unSelectedColor={color.primaryDark}
                            selectedColor={color.yellow}

                        />
                        <Text style={[globalStyle.titleBold, { marginTop: metrics.m1 }]}>{item?.imdb_votes ? item?.imdb_votes : 0}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default index

const styles = StyleSheet.create({
    container: {
        width: '96%',
        backgroundColor: color.postBackground,
        flexDirection: 'row',
        padding: metrics.p4,
        marginTop: metrics.m4,
        borderRadius: metrics.r4
    },
    posterContainer: {
        flex: 4,
        height: metrics.screenWidth * 0.50,
        minHeight: 200,
    },
    postr: {
        width: '100%',
        height: '100%',
        borderRadius: metrics.r4,
        overflow: 'hidden'
    },
    detail: {
        flex: 6,
        marginStart: metrics.m4,
        justifyContent: 'space-between'
    },
    imdbBox:
    {
        width: 65,
        height: 65,
        backgroundColor: color.primaryDark,
        borderRadius: metrics.r4,
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: metrics.m2

    },
    imdbText: {
        fontSize: 20, color: color.yellow, fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row'
    },
    ratingBar: {
        justifyContent: 'center', alignItems: 'flex-start'
    }

})
