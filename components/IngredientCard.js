import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import { FONTS, COLORS, SIZES } from "../constants";

const IngredientCard = ({ ingredientItem, strIngredient, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '29.5%',
                marginTop: 10,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.transparentyellow,
                marginLeft: 11,
                marginRight: 1
            }}
            onPress={onPress}
        >
            <Image
                source={{ uri: `https://www.themealdb.com/images/ingredients/${strIngredient}.png` }}
                style={{
                    width: '60%',
                    height: 80,
                    borderRadius: SIZES.radius,
                }}
            />
            <View>
                <Text
                    style={{
                        ...FONTS.h2
                    }}
                >
                    {ingredientItem?.strIngredient}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default IngredientCard;