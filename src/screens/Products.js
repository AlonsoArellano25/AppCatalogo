import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import NewProducts from '../components/Home/NewProducts';
import Search from '../components/Search';
import StatusBarCustom from '../components/StatusBar';
import {COLOR_PRINCIPAL_2} from '../styles/colors';

export default function Products() {
  return (
    <>
      <StatusBarCustom backgroundColor={'#000'} barStyle="light-content" />
      <Search />
      <ScrollView>
        <NewProducts />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
