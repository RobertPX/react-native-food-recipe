import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants";
import { CategoryCard, TredingCard } from "../components";
import Card from '../components/Card';



const Alphabet = ({ navigation, route }) => {
    const [selectedList, setSelectedList] = useState(null);
    const [listFood, setListFood] = useState([]);

    useEffect(() => {
        let { alphabet } = route.params
        setSelectedList(alphabet)
    }, [])

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedList}`)
        .then(response => response.json())
        .then((responsedata) => {
            setListFood(responsedata.meals)
        })

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                }}
            >
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 35,
                        width: 35,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: COLORS.lightGray,
                        backgroundColor: COLORS.transparentBlack5
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.lightGray
                        }}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        alignItems: 'center',
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h1
                    }}
                >
                    Recipes
                </Text>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {renderHeader()}
            <FlatList
                data={listFood}
                renderItem={({ item }) => {
                    return (
                        <Card
                            containerStyle={{
                                marginHorizontal: SIZES.padding
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate("Recipe", { recipe: item })}
                        />
                    )
                }}
            />
        </SafeAreaView>
    )

}



export default Alphabet;
