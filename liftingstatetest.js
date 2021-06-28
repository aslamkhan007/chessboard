import React from "react";

class OrderComponent extends React.Component {
  componentDidMount(props) {
    super(props);
    this.state = {
      quantity: "",
      address: "",
    };
  }
  orderinfoChanged = (val) => {
    this.setState({ quantity: val });
  };
  addresChanged = (val) => {
    this.setState({ quantity: val });
  };
  render() {
    return (
      <div>
        <h1>Orderinfo</h1>
        <ProductInfoComponent
          value={this.state.quantity}
          onChange={this.orderinfoChanged}
        ></ProductInfoComponent>
        <AddressedComponent
          value={this.state.address}
          onChange={this.addresChanged}
        ></AddressedComponent>
        <SummaryComponent
          value={this.state.quantity}
          onchange={this.orderinfoChanged}
        ></SummaryComponent>
      </div>
    );
  }
}

class ProductInfoComponent extends React.Component {
  componentDidMount(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.onQuantityChange(e.target.value);
  };
  render() {
    return (
      <div>
        <h1>ProductInfo </h1>
        <p>
          <label>
            Product Name:
            <select>
              <option value="product1">Product1</option>
              <option value="product2">Product2</option>
              <option value="product3">Product3</option>
              <option value="product4">Product4</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Enter Quantity:
            <input
              type="text"
              value={this.props.quantity}
              onChange={this.handleChange}
            ></input>
          </label>
        </p>
      </div>
    );
  }
}

class AddressedComponent extends React.Component {
  componentDidMount(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onAddresChange(e.target.value);
  };
  render() {
    return (
      <div>
        <p>
          <label>
            Address:
            <textarea
              value={this.props.address}
              onchange={this.handleChange}
            ></textarea>
          </label>
        </p>
      </div>
    );
  }
}

class SummaryComponent extends React.Component {
  componentDidMount(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.onQuantityChange(e.target.value);
  };

  render() {
    return (
      <div>
        <p>
          <label>
            {" "}
            product name: <b>Product-1</b>
          </label>
        </p>
        <p>
          <label>
            <input
              type="text"
              value={this.props.quantity}
              onChange={this.handleChange}
            ></input>
          </label>
        </p>
      </div>
    );
  }
}



export default OrderComponent;