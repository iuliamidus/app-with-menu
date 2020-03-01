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
          <Card transparent style={{borderRadius: 8}}>
            <CardItem
              header
              bordered
              style={{borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomWidth: 1}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#103662'}}>
                Upcoming Events 
              </Text>
            </CardItem>
            <CardItem>
              <Left>
              <Button
                      bordered
                      style={{
                        borderColor: '#103662',
                        borderStartWidth: 2,
                        borderEndWidth: 2,
                        borderTopWidth: 2,
                        borderBottomWidth: 2,
                      }}>
                  <Text style={{fontSize: 20, textAlign: 'center', color: '#103667', fontWeight: 'bold'}}> 09 APR</Text>
                </Button>
                <Body>
                  <Text style={{fontSize: 20,}} >Meeting with Elon</Text>
                  <Text style={{fontSize: 20,}}>Credit Suisse Office</Text>
                  <Text style={{fontSize: 20,}}>5pm - 7pm</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
              <Button
                      bordered
                      style={{
                        borderColor: '#103662',
                        borderStartWidth: 2,
                        borderEndWidth: 2,
                        borderTopWidth: 2,
                        borderBottomWidth: 2,
                      }}>
                  <Text style={{fontSize: 20, textAlign: 'center', color: '#103662', fontWeight: 'bold'}}> 10 JUN</Text>
                </Button>
                <Body>
                  <Text style={{fontSize: 20,}}>Product Training</Text>
                  <Text style={{fontSize: 20,}}>8am - 10am</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card transparent style={{borderRadius: 8}}>
            <CardItem
              header
              bordered
              style={{borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomWidth: 1}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#103662'}}>
                Notifications 
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontSize: 20}}>- EXT.1 up by 0.8%</Text>
                <Text style={{fontSize: 20}}>
                  - FTSE down by 1.7%{' '}
                  <Icon name="alert" style={{fontSize: 30, color: 'red'}} />
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}