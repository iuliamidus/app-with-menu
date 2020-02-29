import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
} from 'native-base';
import {Image, StatusBar} from 'react-native';
import {color} from 'react-native-reanimated';
import CSHeader from '../components/CSHeader';
export default class NewClient extends Component {
  render() {
    return (
      <Container>
        <CSHeader />
        <Content padder>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#103662',
              marginBottom: 10,
              marginTop: 10,
              marginStart: 15,
            }}>
            Basic Information
          </Text>
          <Item rounded style={{marginTop: 10}}>
            <Input
              placeholder="First Name"
              style={{fontSize: 20, marginStart: 7}}
            />
          </Item>
          <Item rounded style={{marginTop: 10}}>
            <Input
              placeholder="Middle Name"
              style={{fontSize: 20, marginStart: 7}}
            />
          </Item>
          <Item rounded style={{marginTop: 10}}>
            <Input
              placeholder="Last Name"
              style={{fontSize: 20, marginStart: 7}}
            />
          </Item>
          <Item rounded style={{marginTop: 10}}>
            <Input
              placeholder="Email"
              style={{fontSize: 20, marginStart: 7}}
            />
          </Item>
          <Item rounded style={{marginTop: 10}}>
            <Input
              placeholder="Phone Number"
              style={{fontSize: 20, marginStart: 7}}
            />
          </Item>

        </Content>
      </Container>
    );
  }
}
