import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem, Thumbnail, Item, Input, StatusBar } from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import CSHeader from '../components/CSHeader';
//import CSHeader from '../components/CSHeader';

export default class ClientList extends Component {
  render() {
    return (
      <Container>
        <CSHeader/>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent >
            <Text style={{color: '#103662'}}>Search</Text>
          </Button>
        </Header>
        <Content>
          <List>
            <ListItem thumbnail style={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://api.time.com/wp-content/uploads/2019/04/mark-zuckerberg-time-100-2019.jpg?quality=85&zoom=2' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Mark Zuckerberg</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail style={{marginTop: 10, marginBottom: 20}} >
            <Left>
                <Thumbnail circular source={{ uri: 'https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Elon Musk</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style ={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15823444_1301814059857341_2563288695286979024_n.jpg?_nc_cat=106&_nc_ohc=AcapZ0bUML8AX9i90J_&_nc_ht=scontent-lht6-1.xx&oh=f7c8acc699dee91dd591d06081ad4d9c&oe=5EC99472' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Dovydas Tamasauskas</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style ={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15823444_1301814059857341_2563288695286979024_n.jpg?_nc_cat=106&_nc_ohc=AcapZ0bUML8AX9i90J_&_nc_ht=scontent-lht6-1.xx&oh=f7c8acc699dee91dd591d06081ad4d9c&oe=5EC99472' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Dovydas Tamasauskas</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style ={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15823444_1301814059857341_2563288695286979024_n.jpg?_nc_cat=106&_nc_ohc=AcapZ0bUML8AX9i90J_&_nc_ht=scontent-lht6-1.xx&oh=f7c8acc699dee91dd591d06081ad4d9c&oe=5EC99472' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Dovydas Tamasauskas</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
         
            <ListItem thumbnail style ={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15823444_1301814059857341_2563288695286979024_n.jpg?_nc_cat=106&_nc_ohc=AcapZ0bUML8AX9i90J_&_nc_ht=scontent-lht6-1.xx&oh=f7c8acc699dee91dd591d06081ad4d9c&oe=5EC99472' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Dovydas Tamasauskas</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style ={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15823444_1301814059857341_2563288695286979024_n.jpg?_nc_cat=106&_nc_ohc=AcapZ0bUML8AX9i90J_&_nc_ht=scontent-lht6-1.xx&oh=f7c8acc699dee91dd591d06081ad4d9c&oe=5EC99472' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Dovydas Tamasauskas</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style ={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15823444_1301814059857341_2563288695286979024_n.jpg?_nc_cat=106&_nc_ohc=AcapZ0bUML8AX9i90J_&_nc_ht=scontent-lht6-1.xx&oh=f7c8acc699dee91dd591d06081ad4d9c&oe=5EC99472' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Dovydas Tamasauskas</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
 
            <ListItem thumbnail style ={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15823444_1301814059857341_2563288695286979024_n.jpg?_nc_cat=106&_nc_ohc=AcapZ0bUML8AX9i90J_&_nc_ht=scontent-lht6-1.xx&oh=f7c8acc699dee91dd591d06081ad4d9c&oe=5EC99472' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Dovydas Tamasauskas</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style ={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15823444_1301814059857341_2563288695286979024_n.jpg?_nc_cat=106&_nc_ohc=AcapZ0bUML8AX9i90J_&_nc_ht=scontent-lht6-1.xx&oh=f7c8acc699dee91dd591d06081ad4d9c&oe=5EC99472' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Dovydas Tamasauskas</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style ={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15823444_1301814059857341_2563288695286979024_n.jpg?_nc_cat=106&_nc_ohc=AcapZ0bUML8AX9i90J_&_nc_ht=scontent-lht6-1.xx&oh=f7c8acc699dee91dd591d06081ad4d9c&oe=5EC99472' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Dovydas Tamasauskas</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style ={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15823444_1301814059857341_2563288695286979024_n.jpg?_nc_cat=106&_nc_ohc=AcapZ0bUML8AX9i90J_&_nc_ht=scontent-lht6-1.xx&oh=f7c8acc699dee91dd591d06081ad4d9c&oe=5EC99472' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Dovydas Tamasauskas</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style ={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15823444_1301814059857341_2563288695286979024_n.jpg?_nc_cat=106&_nc_ohc=AcapZ0bUML8AX9i90J_&_nc_ht=scontent-lht6-1.xx&oh=f7c8acc699dee91dd591d06081ad4d9c&oe=5EC99472' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Dovydas Tamasauskas</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

          </List>
        </Content>
      </Container>
  )}}