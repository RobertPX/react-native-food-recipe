import React, { Component, useState } from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants";

const RecipeCardDetails = ({ recipeItem }) => {
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        width: "70%",
                        color: COLORS.white,
                        ...FONTS.h3,
                        fontSize: 18
                    }}
                >
                    {recipeItem.strMeal}
                </Text>
            </View>
            <Text
                style={{
                    color: COLORS.white,
                    ...FONTS.body4
                }}
            >
                {recipeItem.strArea}
            </Text>
        </View>
    )
}

const RecipeCardInfo = ({ recipeItem }) => {
    return (
        <View
            style={{
                ...styles.recipeCardContainer,
                backgroundColor: COLORS.transparentDarkGray
            }}
        >
            <RecipeCardDetails
                recipeItem={recipeItem}
            />
        </View>
    )
}

const Recommendation = ({ onPress }) => {
    class Recom extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: false,
                rec: [],
                url: 'https://www.themealdb.com/api/json/v1/1/random.php'
            }
        }

        componentDidMount() {
            this.getRec();
        }

        getRec = () => {
            this.setState({ loading: true })
            fetch(this.state.url)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        rec: res.meals,
                        url: res.next,
                        loading: false
                    })
                })
        }
        render() {
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
                        Recommendation
                    </Text>
                    <FlatList
                        data={this.state.rec}
                        keyboardDismissMode="on-drag"
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={{
                                    height: 350,
                                    width: 250,
                                    marginTop: SIZES.radius,
                                    marginRight: 20,
                                    borderRadius: SIZES.radius,
                                    marginLeft: SIZES.padding = 18
                                }}
                                onPress={onPress}
                            >
                                <Image
                                    source={{ uri: item.strMealThumb }}
                                    resizeMode="cover"
                                    style={{
                                        height: 350,
                                        width: 350,
                                        borderRadius: SIZES.radius
                                    }}
                                />
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: 20,
                                        left: 15,
                                        paddingHorizontal: SIZES.radius,
                                        paddingVertical: 5,
                                        backgroundColor: COLORS.transparentGray,
                                        borderRadius: SIZES.radius
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: COLORS.white,
                                            ...FONTS.h4
                                        }}
                                    >
                                        {item.strCategory}
                                    </Text>
                                </View>
                                <RecipeCardInfo
                                    recipeItem={item}
                                />
                            </TouchableOpacity>
                        }
                    />
                </View>
            );
        }

    }
    return <Recom/>
}


const styles = StyleSheet.create({
    recipeCardContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 80,
        width: 320,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius
    }
})

export default Recommendation;