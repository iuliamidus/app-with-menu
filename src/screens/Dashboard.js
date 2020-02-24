import React, {Component} from 'react';
import {Image, StatusBar} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Button,
  Icon,
  Title,
  Thumbnail,
  Right,
} from 'native-base';

import { useNavigation } from '@react-navigation/native';

import CSHeader from '../components/CSHeader';

export default class UpcomingEvents extends Component {
  render() {
    return (
      
      <Container>
        <CSHeader/>
        <Content padder>
          <Card style={{borderRadius: 8}}>
            <CardItem
              header
              bordered
              style={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#103662'}}>
                UPCOMING EVENTS
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button backgroundColor="#103662">
                  <Text> 09{'\n'}APR</Text>
                </Button>
                <Body>
                  <Text>Meeting with Elon</Text>
                  <Text>Credit Suisse Office</Text>
                  <Text>5pm - 7pm</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button backgroundColor="#103662">
                  <Text> 10{'\n'}JUN</Text>
                </Button>
                <Body>
                  <Text>Product Training</Text>
                  <Text>8am - 10am</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem
              bordered
              style={{
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}></CardItem>
          </Card>
          <Card style={{borderRadius: 8}}>
            <CardItem
              header
              bordered
              style={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#103662'}}>
                NOTIFICATIONS
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontSize: 25}}>- EXT.1 up by 0.8%</Text>
                <Text style={{fontSize: 25}}>
                  - FTSE down by 1.7%{' '}
                  <Icon name="alert" style={{fontSize: 30, color: 'red'}} />
                </Text>
              </Body>
            </CardItem>
            <CardItem
              bordered
              style={{
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}></CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}