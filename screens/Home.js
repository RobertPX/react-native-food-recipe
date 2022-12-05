import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants";
import { CategoryCard, TredingCard } from "../components";
import { StatusBar } from 'react-native';

import Card from '../components/Card';
import Recommendation from '../components/Recommendation';

const Home = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [random, setRandom] = useState([]);
    const [categories, setCategories] = useState([]);

    const getRecommendation = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const json = await response.json();
            setRandom(json.meals);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const getCategories = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const json = await response.json();
            setCategories(json.categories);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCategories();
        getRecommendation();
    }, []);

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height: 80
                }}
            >
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGreen,
                            ...FONTS.h2
                        }}
                    >
                        Hello Welcome
                    </Text>
                    <Text
                        style={{
                            marginTop: 3,
                            color: COLORS.gray,
                            ...FONTS.body3
                        }}
                    >
                        What are you going to cook today?
                    </Text>
                </View>

            </View>
        )
    }

    function renderRecommendation() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h2
                    }}
                >
                    Recent trends
                </Text>
                <FlatList
                    data={random}
                    renderItem={({ item }) => {
                        return (
                            <TredingCard
                                containerStyle={{
                                    marginLeft: SIZES.padding
                                }}
                                recipeItem={item}
                                onPress={() => navigation.navigate("Recipe", { recipe: item })}
                            />
                        )
                    }}
                />
            </View>
        )
    }

    function renderIngredients() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        marginHorizontal: SIZES.padding,
                        borderRadius: 20
                    }}
                    onPress={() => navigation.navigate("Ingredient")}
                >
                    <Image
                        source={images.ingredients}
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: SIZES.radius,
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: 200,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.transparentlightGreen
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.largeTitle
                            }}
                        >
                            Ingredients
                        </Text>
                        <Image
                            source={icons.rightArrow}
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </View>
                </TouchableOpacity>

            </View>
        )
    }

    function renderHeaderCategory() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h2
                    }}
                >
                    Categories
                </Text>
            </View>
        )
    }

    function renderAreas() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        marginHorizontal: SIZES.padding,
                        borderRadius: 20
                    }}
                >
                    <Image
                        source={images.area}
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: SIZES.radius,
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: 200,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.transparentyellow
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.largeTitle
                            }}
                        >
                            Areas
                        </Text>
                        <Image
                            source={icons.rightArrow}
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </View>
                </TouchableOpacity>

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
            <StatusBar/>
            <FlatList
                data={categories}
                ListHeaderComponent={
                    <View>
                        {renderHeader()}
                        {renderRecommendation()}
                        {renderIngredients()}
                        {renderHeaderCategory()}
                    </View>
                }
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <CategoryCard
                            categoryItem={item}
                            onPress={() => navigation.navigate("Result", { result: item?.strCategory, list: 'c' })}
                        />
                    )
                }}
                ListFooterComponent={
                    <View>
                        {renderAreas()}
                        <View
                            style={{
                                marginBottom: 100
                            }}
                        />
                    </View>

                }
            />


        </SafeAreaView>
    )
}

export default Home;