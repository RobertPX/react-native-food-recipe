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



const Bookmark = ({ navigation }) => {

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <Text>Bookmark</Text>
        </SafeAreaView>
    )

}



export default Bookmark;
