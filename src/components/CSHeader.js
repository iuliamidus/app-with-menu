import React, { Component } from 'react';
import { Header, Text, Title, Left, Right, Body, Icon, Button, StatusBar} from 'native-base';

import { useNavigation } from '@react-navigation/native';


export default function CSHeader() {

    const navigation = useNavigation();

      return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' onPress={() => {navigation.openDrawer()}}/>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
          );
}