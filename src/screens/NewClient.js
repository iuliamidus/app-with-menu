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
  Picker,
  ListItem,
  CheckBox,
} from 'native-base';
import {Image, StatusBar} from 'react-native';
import {color} from 'react-native-reanimated';
import CSHeader from '../components/CSHeader';

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }

  render() {
    const line = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          strokeWidth: 2, // optional
        },
      ],
    };

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

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#103662',
              marginBottom: 10,
              marginTop: 20,
              marginStart: 15,
            }}>
            Onboarding 
          </Text>

          <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Residential Address " style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Date of Birth" style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Mailing Adress" style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  placeholder="Transit Account Holder"
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  placeholder="Transit Account Number"
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Source of Wealth" style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Text style={{fontSize:20, marginTop: 10, marginStart:5}}>Client Knowledge</Text>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  style={{width: 300, color: 'black'}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Please Select" value="key1" />
                  <Picker.Item label="Professional" value="key0" />
                  <Picker.Item label="Private" value="key2" />
                </Picker>
              </Form>
              <Text style={{fontSize:20, marginTop: 10, marginStart: 5}}>PEP Check</Text>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  style={{width: 300, color: 'blue', fontSize:20}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Please Select" value="key1" />
                  <Picker.Item label="Clear" value="key0" />
                  <Picker.Item label="In Progress" value="key2" />
                  <Picker.Item label="Not Done" value="key3" />
                  <Picker.Item label="Problematic" value="key4" />
                </Picker>
              </Form>
              <Text style={{fontSize:20,marginTop: 10}}> Government Documents?</Text>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize:20}}>Yes</Text>
                </Body>
              </ListItem>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize:20}}>No</Text>
                </Body>
              </ListItem>
              <Text style={{fontSize:20,marginTop: 10}}> Paper Mailing?</Text>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize:20}}>Yes</Text>
                </Body>
              </ListItem>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize:20}}>No</Text>
                </Body>
              </ListItem>
        </Content>
      </Container>
    );
  }
}
 
