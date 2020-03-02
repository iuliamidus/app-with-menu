
import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Content, Form, Item, Input, Label, Text } from 'native-base';
import {Image, StatusBar} from 'react-native';
import { color } from 'react-native-reanimated';
import CSHeader from '../components/CSHeader';
import { useNavigation } from '@react-navigation/native';

export default class NewClient extends Component {
  render() {
    const pageTitle='Add New Client';
    return (
      <Container>
        <CSHeader pageTitle={pageTitle}/>
        <Content>
          <Form>
          
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item  floatingLabel last style = {marginTop=40} >
              <Label>Middle Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last style = {marginTop=40}>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last style = {marginTop=40} >
              <Label>E-mail Address</Label>
              <Input />
            </Item>
            <Item floatingLabel last style = {marginTop=40, marginBottom=60}>
              <Label>Phone number</Label>
              <Input />
            </Item>
            <Item regular style = {marginTop=60, marginBottom=60}>
            <Input placeholder='Additional information' />
          </Item>
          </Form>

          <Button success style={{marginTop: 30, width: 120, marginLeft: 250}}>
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}