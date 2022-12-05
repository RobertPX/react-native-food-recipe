import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import { FONTS, COLORS, SIZES } from "../constants";

const CategoryCard = ({ categoryItem, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '41%',
                marginTop: 10,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.darkGreen,
                marginLeft: SIZES.padding,
                marginRight: 1
            }}
            onPress={onPress}
        >
            <Image
                source={{ uri: categoryItem.strCategoryThumb }}
                style={{
                    width: '100%',
                    height: 100,
                    borderRadius: SIZES.radius,
                }}
            />
            <View>
                <Text
                    style={{
                        ...FONTS.h2
                    }}
                >
                    {categoryItem.strCategory}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard;
