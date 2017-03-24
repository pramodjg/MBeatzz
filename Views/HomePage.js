import React, { Component } from 'react';
import { Container, Content, Grid,Card,Button, Col,Row,CardItem, Body, Text,Thumbnail,Header,Title,Left,Right } from 'native-base';
import appTheme from '../Theme/appTheme';
import { View,  Dimensions } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');


var Sound = require('react-native-sound');

export default class HomePage extends Component {
    render() {
        return (
            <Container style={appTheme.mainTheme}>
            <Header>
                  <Left>
                  <Button transparent>
                     <Icon name="md-menu" style={{color: '#FFFFFF'}}/>
               </Button>
                  </Left>
                  <Body>
                      <Title>Header</Title>
                  </Body>
                  <Right />
              </Header>
                <Content>

                    <Card style={appTheme.card_outer_view}>
                        <CardItem style={appTheme.player_card_view}>
                                <ResponsiveImage source={require('../images/album_cover.png')} style={appTheme.thumbnail_style} initWidth="138" initHeight="138"/>
                        </CardItem>
                        <CardItem style={appTheme.player_navigation_view}>
                        <Button style={appTheme.player_navigation_button}>
                                             <Icon name="play-arrow" style={{color: '#FFFFFF'}}/>
                        </Button>
                        <Button style={appTheme.player_navigation_button}>
                                             <Icon name="skip-next" style={{color: '#FFFFFF'}}/>
                       </Button>
                       <Button style={appTheme.player_navigation_button}>
                                            <Icon name="skip-previous" style={{color: '#FFFFFF'}}/>
                      </Button>
                      <Button style={appTheme.player_navigation_button}>
                                          <Icon name="stop" style={{color: '#FFFFFF'}}/>
                     </Button>
                     <Button style={appTheme.player_navigation_button}>
                                         <Icon name="volume-up" style={{color: '#FFFFFF'}}/>
                    </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
module.exports=HomePage;
