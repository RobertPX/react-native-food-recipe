import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Platform,
    StyleSheet
} from 'react-native';

import { FONTS, COLORS, SIZES, icons } from "../constants";
import { BlurView } from 'expo-blur';

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
                        width: "100%",
                        color: COLORS.white,
                        ...FONTS.h2,
                        fontSize: 25
                    }}
                >
                    {recipeItem.strMeal}
                </Text>

            </View>
            <Text
                style={{
                    color: COLORS.white,
                    ...FONTS.body3
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

const TredingCard = ({ containerStyle, recipeItem, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                height: 350,
                width: 350,
                marginTop: SIZES.radius,
                marginRight: 20,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={{ uri: recipeItem.strMealThumb }}
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
                    {recipeItem.strCategory}
                </Text>
            </View>

            <RecipeCardInfo
                recipeItem={recipeItem}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    recipeCardContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius
    }
})

export default TredingCard;