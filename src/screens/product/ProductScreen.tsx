import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import Dropdown from '../../components/atoms/Dropdown';
import NavHeader from '../../components/atoms/NavHeader';
import PrimaryTextField from '../../components/atoms/PrimaryTextField';
import PrimaryButton from '../../components/atoms/PrimaryButton';

interface ProductScreenState {
  categories: string[];
  nameValue: string;
  brandValue: string;
  categoryValue: string;
  dropdownCollapsed: boolean;
}

interface ProductScreenProps {
  props?: {};
  navigation: any;
}

const categories = ['Bread, Grains & other Starches', 'Fruit', 'Vegetables'];

const styles = StyleSheet.create({
    button: {
        margin: 16,
        width: 175,
    },

    container: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        marginTop: 50,
    },

    screenContainer: {
        flex: 1,
    },
});

export default class ProductScreen extends React.Component<
  ProductScreenProps,
  ProductScreenState
> {
    constructor(props: ProductScreenProps) {
        super(props);
    }

  public readonly state: ProductScreenState = {
      categories: categories,
      nameValue: '',
      brandValue: '',
      categoryValue: '',
      dropdownCollapsed: false,
  };

  handleNameFieldChange(input: string): void {
      this.setState({
          nameValue: input,
      });
  }

  handleBrandFieldChange(input: string): void {
      this.setState({
          brandValue: input,
      });
  }

  handleCategoryFieldChange(input: number): void {
      console.log('input: ', this.state.categories[input]);
      this.setState({
          categoryValue: this.state.categories[input],
      });
  }

  handleDropdownToggle(): void {
      if (this.state.dropdownCollapsed === false) {
          this.setState({
              dropdownCollapsed: true,
          });
      } else {
          this.setState({
              dropdownCollapsed: false,
          });
      }
  }

  addProduct(): void {
      // TODO: save this in the database
      console.log('button click');
      console.log('nameValue: ', this.state.nameValue);
      console.log('brandValue: ', this.state.brandValue);
      console.log('categoryValue: ', this.state.categoryValue);
      this.props.navigation.navigate('Home');
  }

  render(): JSX.Element {
      return (
          <SafeAreaView style={styles.screenContainer}>
              <NavHeader title={'Add product'} navIcon={true} />
              <View style={styles.container}>
                  <PrimaryTextField
                      onChangeText={input => this.handleNameFieldChange(input)}
                      value={this.state.nameValue}
                      name="product_name"
                      type="name"
                      placeHolder="Name"
                  />
                  <PrimaryTextField
                      onChangeText={input => this.handleBrandFieldChange(input)}
                      value={this.state.brandValue}
                      name="brand_name"
                      type="name"
                      placeHolder="Brand"
                  />

                  <Dropdown
                      onValueChange={input => this.handleCategoryFieldChange(input)}
                      selectedValue={this.state.categoryValue}
                      name="categories"
                      dropdownValues={this.state.categories}
                      onDropdownToggle={() => this.handleDropdownToggle()}
                      isCollapsed={this.state.dropdownCollapsed}
                  />

                  <PrimaryButton
                      title="Add ingredient"
                      type="solid"
                      componentStyle={styles.button}
                      onClick={() => this.addProduct()}
                  />
              </View>
          </SafeAreaView>
      );
  }
}
