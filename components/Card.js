import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import { FONTS, COLORS, SIZES } from "../constants";

const Card = ({ containerStyle, categoryItem, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                marginTop: 10,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.gray2,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={{uri: categoryItem.strMealThumb}}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: SIZES.radius,
                }}
            />
            <View
                style={{
                    width: '65%',
                    paddingHorizontal: 20
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}
                >
                    {categoryItem.strMeal}
                </Text>
                <Text
                    style={{
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}
                >
                    {categoryItem.strCategory} | {categoryItem.strArea}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;
