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
  _isMounted= false;
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    this._isMounted = true;

    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=9cb1bba31aa54d038eb01b75da21cd94";

    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          if(this._isMounted) {
          this.setState({
            isLoaded: true,
            items: result.articles
          });
        }
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { error, isLoaded, items } = this.state;
    const pageTitle = 'Dashboard';

    return (
      <Container>
        <CSHeader pageTitle={pageTitle}/>
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
              <Text>
              {items.length}
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
              }}>
        </CardItem>
          </Card>
          <Card>
          {items.map(item => (
            <CardItem>
              <Text key={item.title}>
              </Text>
              <Icon active name="logo-googleplus" />
              <Text>{item.title}</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
            ))}
           </Card>
        </Content>
      </Container>
    );
  }
}