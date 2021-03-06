import React from 'react';
import {
  Container, Form, FormGroup, Button,
} from 'react-bootstrap';
import formDuxCont from '../../store/duxContainers/forms/formDuxCont';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      image: '',
      category: '',
      description: '',
      bakeTime: '',
    };
    this.loadData();
  }

  oninputChange = (e) => {
    // Use the event to retrieve the input
    const { changedinput } = e;
    // Get the value of the input
    const inputValue = changedinput.value;
    // Get the input name
    const { inputName } = changedinput;
    // Set the state to the name and the value
    this.setState({
      [inputName]: inputValue,
    });
  };

  loadData = async () => {
    const { match: { params: { id } }, fetchProd } = this.props;
    // If there is no ID, don't load the item
    if (!id) return;
    await fetchProd(id);
    // Update the state with the data from the updated item
    const { prod } = this.props;
    this.setState({ ...prod });
  };

  save = (e) => {
    // Ensure the form doesn't submit with browser
    e.preventDefault();
    const { createProd, updateProd, match: { params: { id } } } = this.props;
    const {
      name, price, image, category, description, bakeTime,
    } = this.state;
    if (id) {
      updateProd({
        id, name, price, image, category, description, bakeTime,
      });
    } else {
      createProd({
        name, price, image, category, description, bakeTime,
      });
    }
  };

  render() {
    // Pull the data from the state.
    const {
      name, price, image, category, description, bakeTime,
    } = this.state;

    return (
      <Container>
        <h1>Product Form</h1>
        <Form onSubmit={this.save}>
          <FormGroup>
            <input type={'text'} name={'prodtName'} id={'prodName'} onChange={this.oninputChange} value={name} placeholder={'Name'} />
            <input type={'number'} name={'prodPrice'} id={'prodPrice'} onChange={this.oninputChange} value={price} placeholder={'Price'} />
            <input type={'text'} name={'prodImage'} id={'prodImage'} onChange={this.oninputChange} value={image} placeholder={'Image URL'} />
            <input type={'select'} name={'catSelect'} id={'catSelect'} onChange={this.oninputChange} value={category}>
              <option value={'Cookies'}>Cookies</option>
              <option value={'Cakes'}>Cakes</option>
              <option value={'Pies'}>Pies</option>
            </input>
            <input type={'textarea'} name={'prodDesc'} id={'prodDesc'} onChange={this.oninputChange} value={description} placeholder={'Description'} />
            <input type={'textarea'} name={'prodBTime'} id={'prodBTime'} onChange={this.oninputChange} value={bakeTime} placeholder={'Bake time and temp'} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default formDuxCont(ProductForm);
