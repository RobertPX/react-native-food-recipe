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


const SearchSectionAlphabet = ({ navigation }) => {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const keyboard = alphabet.map((letter) =>
        <TouchableOpacity
            style={{
                padding: 10,
                height: 50,
                overflow: 'hidden',
                borderRadius: 4,
                margin: 2,
                backgroundColor: COLORS.darkGreen
            }}
            onPress={() => navigation.navigate("Alphabet", { alphabet: letter })}
        >
            <Text
                style={{
                    ...FONTS.h2
                }}
            >
                {letter}
            </Text>
        </TouchableOpacity>
    );
    return (
        <View
            style={{
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginLeft: 5,
                    marginRight: 5,
                }}
            >
                {keyboard}
            </View>
        </View>
    )
}

const Search = ({ navigation }) => {
    const [food, setFood] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getFood = async (searchTerm) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const json = await response.json();
            setFood(json.meals);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getFood();
    }, []);

    const SearchingFood = () => {
        getFood(searchTerm);
    }

    function renderSearchBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    alignItems: 'center',
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray
                }}
            >
                <Image
                    source={icons.search}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                />
                <TextInput
                    style={{
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholder="Buscar"
                    placeholderTextColor={COLORS.gray}
                    onChangeText={(value) => {
                        setSearchTerm(value)
                        SearchingFood()
                    }}
                    clearButtonMode={(value) => {
                        SearchingFood()
                    }}
                />
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
            {renderSearchBar()}

            {searchTerm ?
                <FlatList
                    data={food}
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
                :
                <SearchSectionAlphabet
                    navigation={navigation}
                />
            }
        </SafeAreaView>
    )

}

export default Search;