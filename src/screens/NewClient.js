
import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Content, Form, Item, Input, Label } from 'native-base';
import {Image, StatusBar} from 'react-native';
import { color } from 'react-native-reanimated';
export default class NewClient extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
          <Header style={{backgroundColor: '#103662'}}>
          <StatusBar backgroundColor="#103662" />
          <Left>
            <Button onPress={() =>  this.props.navigation.openDrawer() } transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style = {{color: '#000000'}}>Add a New Client </Title>
          </Body>
        </Header>
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
            <Item regular style = {marginTop=60}>
            <Input placeholder='Additional information' />
          </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}