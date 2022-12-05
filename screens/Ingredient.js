import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants";
import IngredientCard from '../components/IngredientCard';

const Ingredient = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [food, setFood] = useState([]);

    const getFood = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
            const json = await response.json();
            setFood(json.meals);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getFood();
    }, []);

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
                    Ingredients
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
                data={food}
                numColumns={3}
                renderItem={({ item }) => {
                    return (
                        <IngredientCard
                            ingredientItem={item}
                            strIngredient={item?.strIngredient}
                            onPress={() => navigation.navigate("Result", { result: item?.strIngredient, list: 'i' })}
                        />
                    )
                }}
            />
        </SafeAreaView>
    )

}



export default Ingredient;