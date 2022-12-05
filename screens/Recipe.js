import React, { useCallback, useRef } from 'react';
import {
    View,
    Text,
    Animated,
    Image,
    TouchableOpacity,
    Linking,
    ScrollView
} from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";

const HEADER_HEIGHT = 350;

const RecipeCreatorCardDetail = ({ selectedRecipe }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 80,
                width: SIZES.width,
                paddingHorizontal: 10,
                paddingVertical: 10,
                alignItems: 'center'
            }}
        >
            <View
                style={{
                    flex: 1.5,
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h2
                    }}
                >
                    {selectedRecipe?.strMeal}
                </Text>
                <Text
                    style={{
                        marginTop: 5,
                        color: COLORS.white2,
                        ...FONTS.body4
                    }}
                >
                    {selectedRecipe?.strCategory} | {selectedRecipe?.strArea}
                </Text>
            </View>
        </View>
    )
}

const RecipeCreatorCardInfo = ({ selectedRecipe }) => {
    return (
        <View
            style={{
                flex: 1,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.transparentBlack9
            }}
        >
            <RecipeCreatorCardDetail
                selectedRecipe={selectedRecipe}
            />
        </View>
    )
}

const RecipeIngredient = ({ selectedRecipe }) => {
    return (
        <View>
            <RecipeIngredientDetails
                ingredient={selectedRecipe?.strIngredient1}
                measure={selectedRecipe?.strMeasure1}
            />

            {selectedRecipe?.strIngredient2 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient2}
                    measure={selectedRecipe?.strMeasure2}
                /> : null}

            {selectedRecipe?.strIngredient3 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient3}
                    measure={selectedRecipe?.strMeasure3}
                /> : null}

            {selectedRecipe?.strIngredient4 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient4}
                    measure={selectedRecipe?.strMeasure4}
                /> : null}

            {selectedRecipe?.strIngredient5 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient5}
                    measure={selectedRecipe?.strMeasure5}
                /> : null}

            {selectedRecipe?.strIngredient6 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient6}
                    measure={selectedRecipe?.strMeasure6}
                /> : null}

            {selectedRecipe?.strIngredient7 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient7}
                    measure={selectedRecipe?.strMeasure7}
                /> : null}

            {selectedRecipe?.strIngredient8 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient8}
                    measure={selectedRecipe?.strMeasure8}
                /> : null}

            {selectedRecipe?.strIngredient9 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient9}
                    measure={selectedRecipe?.strMeasure9}
                /> : null}

            {selectedRecipe?.strIngredient10 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient10}
                    measure={selectedRecipe?.strMeasure10}
                /> : null}

            {selectedRecipe?.strIngredient11 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient11}
                    measure={selectedRecipe?.strMeasure11}
                /> : null}

            {selectedRecipe?.strIngredient12 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient12}
                    measure={selectedRecipe?.strMeasure12}
                /> : null}

            {selectedRecipe?.strIngredient13 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient13}
                    measure={selectedRecipe?.strMeasure13}
                /> : null}

            {selectedRecipe?.strIngredient14 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient14}
                    measure={selectedRecipe?.strMeasure14}
                /> : null}

            {selectedRecipe?.strIngredient15 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient15}
                    measure={selectedRecipe?.strMeasure15}
                /> : null}

            {selectedRecipe?.strIngredient16 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient16}
                    measure={selectedRecipe?.strMeasure16}
                /> : null}

            {selectedRecipe?.strIngredient17 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient17}
                    measure={selectedRecipe?.strMeasure17}
                /> : null}

            {selectedRecipe?.strIngredient18 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient18}
                    measure={selectedRecipe?.strMeasure18}
                /> : null}

            {selectedRecipe?.strIngredient19 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient19}
                    measure={selectedRecipe?.strMeasure19}
                /> : null}

            {selectedRecipe?.strIngredient20 ?
                <RecipeIngredientDetails
                    ingredient={selectedRecipe?.strIngredient20}
                    measure={selectedRecipe?.strMeasure20}
                /> : null}
        </View>
    )
}

const RecipeIngredientDetails = ({ ingredient, measure }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                marginVertical: 5
            }}
        >
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    width: 50,
                    borderRadius: 5,
                    backgroundColor: COLORS.lightGray
                }}
            >
                <Image
                    source={{ uri: `https://www.themealdb.com/images/ingredients/${ingredient}.png` }}
                    style={{
                        height: 40,
                        width: 40
                    }}
                />
            </View>

            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 20,
                    alignItems: 'baseline',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        ...FONTS.body3
                    }}
                >
                    {ingredient}
                </Text>
            </View>

            <View
                style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        ...FONTS.body3
                    }}
                >
                    {measure}
                </Text>
            </View>
        </View>
    )
}

const RecipeVideoInstructions = ({ selectedRecipe, strYoutube }) => {
    const url = `${strYoutube}`
    return (
        <View
            style={{
                marginTop: SIZES.padding,
                marginBottom: SIZES.padding
            }}
        >
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    borderRadius: 20
                }}
                onPress={useCallback(async () => {
                    await Linking.openURL(url);
                }, [url])}
            >
                <Image
                    source={{ uri: selectedRecipe?.strMealThumb }}
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
                        backgroundColor: COLORS.transparentRed
                    }}
                >
                    <Image
                        source={icons.youtube}
                        style={{
                            width: 80,
                            height: 80,
                        }}
                    />
                </View>
            </TouchableOpacity>

        </View>
    )
}

const Recipe = ({ navigation, route }) => {
    const [selectedRecipe, setSelectedRecipe] = React.useState(null)
    const scrollY = useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        let { recipe } = route.params
        setSelectedRecipe(recipe)
    }, [])

    function renderHeaderBar() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.radius,
                    paddingBottom: 10
                }}
            >

                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: COLORS.black,
                        opacity: scrollY.interpolate({
                            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                            outputRange: [0, 1]
                        })
                    }}
                />

                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingBottom: 10,
                        opacity: scrollY.interpolate({
                            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                            outputRange: [0, 1]
                        })
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white2,
                            ...FONTS.h2
                        }}
                    >
                        {selectedRecipe?.strMeal}
                    </Text>
                </Animated.View>

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

                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 35,
                        height: 35
                    }}
                    onPress={() => console.log('bookmark')}
                >
                    <Image
                        source={icons.bookmark}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.darkGreen
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderRecipeCardHeader() {
        return (
            <View
                style={{
                    marginTop: -1000,
                    paddingTop: 1000,
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                <Animated.Image
                    source={{ uri: selectedRecipe?.strMealThumb }}
                    resizeMode="contain"
                    style={{
                        height: HEADER_HEIGHT,
                        width: '200%',
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                                })
                            }, {
                                scale: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [2, 1, 0.75]
                                })
                            }
                        ]
                    }}
                />

                <Animated.View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        right: 10,
                        height: 80,
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, 170, 250],
                                    outputRange: [0, 0, 100],
                                    extrapolate: 'clamp'
                                })
                            }
                        ]
                    }}
                >
                    <RecipeCreatorCardInfo
                        selectedRecipe={selectedRecipe}
                    />
                </Animated.View>
            </View>
        )
    }

    function renderIngredientHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 30,
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h3
                    }}
                >
                    Ingredients
                </Text>
            </View>
        )
    }

    function renderRecipeInstructions() {
        return (
            <View
                style={{
                    paddingHorizontal: 30,
                    marginTop: SIZES.padding,
                    marginBottom: SIZES.padding
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        marginBottom: SIZES.radius,
                        ...FONTS.h3
                    }}
                >
                    Instructions
                </Text>
                <Text
                    style={{
                        ...FONTS.h5
                    }}
                >
                    {selectedRecipe?.strInstructions}
                </Text>
            </View>
        )
    }

    return (

        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >

            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ], { useNativeDriver: true })}
            >
                <View>
                    {renderRecipeCardHeader()}
                    {renderIngredientHeader()}
                </View>
                <RecipeIngredient
                    selectedRecipe={selectedRecipe}
                />
                <View>
                    {renderRecipeInstructions()}
                </View>
                <RecipeVideoInstructions
                    selectedRecipe={selectedRecipe}
                    strYoutube={selectedRecipe?.strYoutube}
                />

            </Animated.ScrollView>
            {renderHeaderBar()}
        </View>
    )
}

export default Recipe;