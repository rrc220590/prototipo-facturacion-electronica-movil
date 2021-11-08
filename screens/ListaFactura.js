import React, { Component } from "react";

import { Dimensions, StyleSheet, FlatList, View } from 'react-native';
// Galio components
import { Block, Text,theme } from "galio-framework";
// Argon themed components
import { argonTheme } from "../constants/";
import { Button, Input, Icon } from "../components/";

const { width } = Dimensions.get("screen");

const ListHeader = () => {
  //Vista para establecer el Header
  return (
    <View style={styles.headerFooterStyle}>
      <Text style={styles.textStyle}>
          Listado de Facturas
      </Text>
    </View>
  );
};
const ListFooter = () => {
  //Vista para establecer el
  return (
    <View style={styles.headerFooterStyle}>
      <Text style={styles.textStyle}>
          
      </Text>
    </View>
  );
};  

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.arrayListaFacturas = [
      { numeroFactura: '  #           ', cliente: 'Cliente                  ', fechaFactura: '11/08/2021', total:          ' Total  ' },
      { numeroFactura: '765995', cliente: '115457878 Adrian González   ', fechaFactura: '11/08/2021', total:    '$299.99   ' },
      { numeroFactura: '765994', cliente: '123655687 Gilberto Duran       ', fechaFactura: '10/08/2021', total: '₡2550.00' },
      { numeroFactura: '765993', cliente: '145203698 Laura Acevedo      ', fechaFactura: '30/07/2021', total:   '$26.00    ' },
      { numeroFactura: '765992', cliente: '154799603 Carmen Chacón      ', fechaFactura: '30/07/2021', total:   '$40.99    ' },
      { numeroFactura: '765991', cliente: '145877965 Miriam Fernández', fechaFactura: '23/07/2021', total:      '₡83500.00 ' },
    ],
    this.state = {
      listaFacturas: [],
    };
  }
  componentDidMount() { 
    this.setState({ listaFacturas: [...this.arrayListaFacturas] })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  onSubmit = () => {
      this.props.navigation.navigate("Crear Factura");
  }
  render() {
    return (
        <Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Búsqueda Rápida"
            iconContent={
              <Icon
                size={11}
                color={argonTheme.COLORS.ICON}
                name="search-zoom-in"
                family="ArgonExtra"
              />
            }
          />
        </Block>
          <Block>
            <FlatList
              data={this.state.listaFacturas}
              width='100%'
              extraData={this.state.listaFacturas}
              keyExtractor={(item, index) => String(index)}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              ListHeaderComponent={ListHeader}
              ListFooterComponent={ListFooter}
              renderItem={({ item }) => 
               <Text style={styles.item}> {item.numeroFactura} {item.cliente} {item.total} </Text>}
             />
            </Block>
            <Block flex center>
              <Button onPress={() => this.onSubmit()} color="primary" style={styles.createButton}>
                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                  CREAR FACTURA
                </Text>
              </Button>
            </Block>
          </Block>
    );
  }

}

const styles = StyleSheet.create({
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },

  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2
  },
 
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  headerFooterStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
  },

  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
  
});


export default Home;