import React, {useState, useEffect} from 'react';
import {View, ImageBackground, Text, ScrollView, Pressable, StyleSheet} from 'react-native';

import {observer} from 'mobx-react';
import {ProductStore} from '../store/store';

export const Categories = observer(() => {
  const {
    state: {categories, category},
    setCategory,
    getCategories,
  } = ProductStore;

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ScrollView horizontal={true} style={styles.categoryList}>
      <Pressable style={styles.category} onPress={() => setCategory(null)}>
        <Text
          style={
            category === null
              ? styles.categoryTextSelected
              : styles.categoryText
          }>
          All
        </Text>
      </Pressable>
      {categories.map((x, i) => (
        <Pressable
          style={styles.category}
          key={i}
          onPress={() => setCategory(x.id)}>
          <Text
            style={
              category && category === x.id
                ? styles.categoryTextSelected
                : styles.categoryText
            }>
            {x.name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
    categoryList: {
        marginLeft: 20,
        marginBottom: 10,
      },
    
      category: {
        paddingVertical: 5,
        marginHorizontal: 3,
        borderRadius: 5,
        backgroundColor: '#eee',
      },
    
      categoryText: {
        fontSize: 16,
        color: '#A2A0A1',
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: 15,
      },
    
      categoryTextSelected: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        backgroundColor: PrimaryColor,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
    
})
