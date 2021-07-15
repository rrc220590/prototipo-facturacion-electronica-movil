import React, { Component } from "react";

import {Dimensions, StyleSheet } from "react-native";
// Galio components
import { Block, Text } from "galio-framework";
// Argon themed components
import { argonTheme } from "../constants/";
import { Button } from "../components/";

const { width } = Dimensions.get("screen");

class Home extends React.Component {
  onSubmit = () => {
      this.props.navigation.navigate("Crear Factura");
  }
  render() {
    return (
        <Block flex center middle>
          <Button onPress={() => this.onSubmit()} color="primary" style={styles.createButton}>
            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
              CREAR FACTURA
            </Text>
          </Button>
        </Block>
    );
  }

}

const styles = StyleSheet.create({
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});


export default Home;