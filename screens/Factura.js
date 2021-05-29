import React, { Component } from "react";
import ModalDropdown from 'react-native-modal-dropdown';

import {Alert, Modal, Pressable,View,ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs,tabs2, c } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const { width } = Dimensions.get("screen");

class Factura extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 0,
      date: new Date(),
      mode: 'date', //Se puede utilizar time tambien
      showFechaFactura: false,
      showFechaVencimiento: false,
      fechaFactura: '',
      fechaVencimiento: '',
      modalVisible:false,
      categories: {},
    };
  }

  anadirItem() {
      key = 'linea' + (Object.keys(this.state.categories).length + 1);
      this.state.categories[key] = [
        { id: 'id', title: (Object.keys(this.state.categories).length + 1) },
        { id: 'Descripcion', title: 'Bicicleta Nueva' },
        { id: 'Cantidad', title: 'Cantidad: ' + this.state.cantidad},
        { id: 'Precio', title: 'Precio: 150000' },
        { id: 'Descuento', title: 'Descuento: ¢50000' },
        { id: 'Impuesto', title: 'Impuesto: ¢13000' },
        { id: 'Total', title: 'Total: ¢113000' },
      ];
      this.setState({ cantidad: 0 });
  }

  showPickerFechaFactura = () => {
    this.setState({
      showFechaFactura: true,
    })
  }

  onChangeFechaFactura = (event, selectedDate) => {
    this.setState({
      fechaFactura: moment(selectedDate).format("DD/MM/YYYY"),
      showFechaFactura: false
    })
  }

  showPickerFechaVencimiento = () => {
    this.setState({
      showFechaVencimiento: true
    })
  }

  onChangeFechaVencimiento = (event, selectedDate) => {
    this.setState({
      fechaVencimiento: moment(selectedDate).format("DD/MM/YYYY"),
      showFechaVencimiento: false
    })
  }

  setModalVisible=(visible)=>{
    this.setState({
      modalVisible: visible
    })
  }

  onTextChanged(value) {
    const numericRegex = /^([0-9]{1,100})+$/
    if(numericRegex.test(value)) {
      this.setState({ cantidad: value });
    }  
  }
  
  state = {
    "switch-1": true,
    "switch-2": false
  };

  toggleSwitch = switchId =>
    this.setState({ [switchId]: !this.state[switchId] });

  renderButtons = () => {
    return (
      <Block flex>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Cliente
          </Text>


        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>


          <Block >

            <Block center>
              <Select
                style={styles.button}
              
                options={["Adrian González Hernández  ", 
                          "Gilberto Duran Luna", 
                          "Laura Acevedo Rodríguez", 
                          "Miriam Fernández Campos", 
                          "Naomy Barrientos Chacón", 
                          "Paola Nuñez Guerrero", 
                          "Pedro Flores Camacho",
                          "Teresa Perez Asturias",
                          "Zamira Bolaños Sánchez"]}
              />
            </Block>
          </Block>
        </Block>

        

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Fecha Factura
          </Text>


        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>


          <Block row space="evenly">

            <Block flex left style={{ marginTop: 8 }}>
              <Input
                  right
                  placeholder="Ingrese fecha de factura"
                  value={this.state.fechaFactura}
                  editable = {true}
                  onFocus={this.showPickerFechaFactura}
                  iconContent={
                    <Block
                      middle
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 10
                      }}
                    >
                      <Icon
                        size={11}
                        color={argonTheme.COLORS.ICON}
                        name="calendar-date"
                        family="ArgonExtra"
                      />
                    </Block>
                  }
              />
              { this.state.showFechaFactura && <DateTimePicker
                  minimumDate={new Date(1980, 1, 1)}
                  maximumDate={new Date(2099, 12, 31)}
                  onChange={this.onChangeFechaFactura}
                  value={this.state.date}
                />
              }
            </Block>
          </Block>
        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Fecha de Vencimiento
          </Text>


        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>


          <Block row space="evenly">

            <Block flex left style={{ marginTop: 8 }}>
              <Input
                  right
                  placeholder="Ingrese fecha de vencimiento"
                  value={this.state.fechaVencimiento}
                  editable = {true}
                  onFocus={this.showPickerFechaVencimiento}
                  iconContent={
                    <Block
                      middle
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 10
                      }}
                    >
                      <Icon
                        size={11}
                        color={argonTheme.COLORS.ICON}
                        name="calendar-date"
                        family="ArgonExtra"
                      />
                    </Block>
                  }
              />
              { this.state.showFechaVencimiento && <DateTimePicker
                  minimumDate={new Date(1980, 1, 1)}
                  maximumDate={new Date(2099, 12, 31)}
                  onChange={this.onChangeFechaVencimiento}
                  value={this.state.date}
                />
              }
            </Block>
          </Block>
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Condición de Venta
          </Text>


        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>


          <Block >

            <Block center>
              <Select
              style={styles.button}
              
                options={["Contado",
                          "Crédito",
                          "Consignación",
                          "Apartado",
                          "Arrendamiento con opción de compra  ",
                          "Arrendamiento en función financiera"
                ]}
              />
            </Block>
          </Block>
        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Moneda
          </Text>


        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>


<Block >

  <Block center>
    <Select
    style={styles.button}
    
      options={["CRC",
                "USD"
      ]}
    />
  </Block>
</Block>
</Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Medio de Pago
          </Text>


        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>


          <Block >

            <Block center>
              <Select
                style={styles.button}
                options={["Efectivo",
                  "Tarjeta",
                  "Cheque",
                  "Transferencia - depósito bancario  ",
                  "Recaudado por terceros",
                  "Otros"
                ]}
              />
            </Block>
          </Block>
        </Block>


      </Block>
    );
  };

  renderText = () => {
    return (
      
      <Block flex style={styles.group}>
           <Block center>
              <Button color="default" style={styles.button}  onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                Agregar Línea
              </Button>
              <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
         this.setModalVisible(!this.state.modalVisible);
        }}
      > 
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Nueva Línea!</Text>
          <Input right placeholder="Número de Línea" editable={false} style={styles.disabled} iconContent={<Block />} />    
          <Input right placeholder="Cantidad" keyboardType="numeric" onChangeText={(value)=> this.onTextChanged(value)} iconContent={<Block />} />
        <ModalDropdown textStyle={styles.dropdown_text} dropdownTextStyle={styles.dropdown_dropdownTextStyle}
                       dropdownStyle={styles.dropdown_dropdown} style={[styles.dropdown, styles.input]}
                       defaultValue="Unidad de medida..." 
                       options={['Unidad', 'Metro','Kilogramo','Libro','Servicios Profesionales']}/>
        <Input right placeholder="Descripción" iconContent={<Block />} />
        <Input right placeholder="Precio Unitario" keyboardType="numeric" iconContent={<Block />} />
   
        <Input right placeholder="Porcentaje de Descuento" keyboardType="numeric" iconContent={<Block />} />
        <ModalDropdown textStyle={styles.dropdown_text} dropdownTextStyle={styles.dropdown_dropdownTextStyle}
                       dropdownStyle={styles.dropdown_dropdown} style={[styles.dropdown, styles.input]}
                       defaultValue="Impuesto" options={[
                        "Impuesto General de Ventas",
                        "Impuesto Selectivo de Consumo",
                        "Impuesto Único a los combustibles",
                        "Impuesto Específico a bebidas alcohólicas",
                        "Impuesto a los productos del tabaco",
                        "Arrendamiento de función financiera",
                        "Impuesto Específico sobre las bebidas envasadas sin contenido alcohólico y jabones de tocador",
                       ]}/>        
        <Input right placeholder="Porcentaje de Impuesto" keyboardType="numeric" iconContent={<Block />} />
        <Input right placeholder="Total" editable={false} iconContent={<Block />} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => { this.setModalVisible(!this.state.modalVisible); this.anadirItem();}}
            >
                 
              <Text style={styles.textStyle}>Agregar Artículo</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            >
                 
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>

          </View>
          
        </View>
      </Modal>
            </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Artículos
          </Text>


        </Block>
            
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          
        <Block>
          {
            Object.keys(this.state.categories).map(item => (
              <Block style={{ marginBottom: theme.SIZES.BASE }}>
                <Header tabs={this.state.categories[item]} title={this.state.categories[item][1].title} />
              </Block>
            ))
          }
        </Block>
     
          <Text
            p
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Subtotal 0
          </Text>
          <Text
            p
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Descuento 0
          </Text>
          <Text
            p
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Impuestos 0
          </Text>
          <Text
            p
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Total 0
          </Text>
     
        </Block>
      </Block>
    );
  };

  renderInputs = () => {
    return (
       
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Block center>
              <Button color="default" style={styles.button}>
                Guardar
              </Button>
            </Block>
            <Block center>
              <Button
                color="secondary"
                textStyle={{ color: "black", fontSize: 12, fontWeight: "700" }}
                style={styles.button}
              >
                Cancelar
              </Button>
            </Block>
           
          </Block>
        </Block>
      );
    
  };

  renderSwitches = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Switches
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block
            row
            middle
            space="between"
            style={{ marginBottom: theme.SIZES.BASE }}
          >
            <Text size={14}>Switch is ON</Text>
            <Switch
              value={this.state["switch-1"]}
              onValueChange={() => this.toggleSwitch("switch-1")}
            />
          </Block>
          <Block row middle space="between">
            <Text size={14}>Switch is OFF</Text>
            <Switch
              value={this.state["switch-2"]}
              onValueChange={() => this.toggleSwitch("switch-2")}
            />
          </Block>
        </Block>
      </Block>
    );
  };

  renderTableCell = () => {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Table Cell
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block style={styles.rows}>
            <TouchableOpacity onPress={() => navigation.navigate("Pro")}>
              <Block row middle space="between" style={{ paddingTop: 7 }}>
                <Text size={14}>Manage Options</Text>
                <Icon
                  name="chevron-right"
                  family="entypo"
                  style={{ paddingRight: 5 }}
                />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    );
  };

  renderSocial = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Social
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block row center space="between">
            <Block flex middle right>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="facebook"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.FACEBOOK}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle center>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="twitter"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.TWITTER}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle left>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="dribbble"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.DRIBBBLE}
                style={[styles.social, styles.shadow]}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };

  renderNavigation = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Navigation
        </Text>
        <Block>
          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header back title="Title" navigation={this.props.navigation} />
          </Block>

          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header white back title="Title" navigation={this.props.navigation} bgColor={argonTheme.COLORS.ACTIVE} titleColor="white" iconColor="white" />
          </Block>

          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header search title="Title" navigation={this.props.navigation} />
          </Block>

          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header tabs={tabs.categories} search title="Title" navigation={this.props.navigation} />
          </Block>

          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
              options
              search
              title="Title"
              optionLeft="Option 1"
              optionRight="Option 2"
              navigation={this.props.navigation}
            />
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30, width }}>
          {this.renderButtons()}
          {this.renderText()}
          {this.renderInputs()}
        </ScrollView>
      </Block>
    );
  }

  /*
       {this.renderInputs()}
          {this.renderSocial()}
          {this.renderSwitches()}
          {this.renderNavigation()}
          {this.renderTableCell()}
  */
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  disabled: {
    color: argonTheme.COLORS.WARNING,
  },
  dropdown: {
    width: width - theme.SIZES.BASE * 7,
    margin: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 3,  
  },
  dropdown_dropdownTextStyle: {
    color: argonTheme.COLORS.PLACEHOLDER,
    fontSize: 14
  },
  dropdown_dropdown: {
    width: width - theme.SIZES.BASE * 7,
  },
  dropdown_text: {
    marginVertical: 10,
    marginHorizontal: 16,
    fontSize: 14,
    color: argonTheme.COLORS.PLACEHOLDER,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  input: {
    borderBottomWidth: 1
  },
  inputDefault: {
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputInfo: {
    borderBottomColor: argonTheme.COLORS.INFO
  },
  inputSuccess: {
    borderBottomColor: argonTheme.COLORS.SUCCESS
  },
  inputWarning: {
    borderBottomColor: argonTheme.COLORS.WARNING
  },
  inputDanger: {
    borderBottomColor: argonTheme.COLORS.ERROR
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Factura;