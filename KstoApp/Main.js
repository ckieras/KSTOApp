import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
      render() {
        return (
          <Text style={styles.baseText}>
            <Text style={styles.titleText} onPress={this.onPressTitle}>
                KSTO
            </Text>
            <Text style={styles.titleText2} onPress={this.onPressTitle}>
                RADIO{'\n'}{'\n'}
            </Text>
          </Text>
        );
      }
}

const styles = StyleSheet.create({
    baseText: {
        marginTop: 40,
        textAlign: 'center',
        fontFamily: 'serif',
        fontSize: 40,
        fontWeight: 'bold',
    },
    titleText: {
      color: '#F4603E', 

    },
    titleText2: {
        color: '#BEE5F6', 
    },
  });

