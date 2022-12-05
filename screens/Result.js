import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    Image,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants";
import Card from '../components/Card';

const ListRecipe = ({ navigation, idRecipes }) => {
    const [idMeal, setIdMeal] = useState([]);

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipes}`)
        .then(response => response.json())
        .then((responsedata) => {
            setIdMeal(responsedata.meals)
        })

    return (
        <FlatList
            data={idMeal}
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
    )
}

const Result = ({ navigation, route }) => {
    const [isLoading, setLoading] = useState(true);
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [selectedList, setSelectedList] = useState(null);
    const [listFood, setListFood] = useState([]);

    useEffect(() => {
        let { result } = route.params
        setSelectedIngredient(result)
        let { list } = route.params
        setSelectedList(list)
    }, [])

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${selectedList}=${selectedIngredient}`)
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

                        <ListRecipe
                            navigation={navigation}
                            idRecipes={item.idMeal}
                        />
                    )
                }}
            />
        </SafeAreaView>
    );

}

export default Result;