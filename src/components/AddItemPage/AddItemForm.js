import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
    user: state.user,
  });

  class AddItemForm extends Component {
      constructor() {
          super();
          this.state = 
              {

                description: '',
                image_url: ''

              } 
          
      }

      handleChange = (value) => (event) => {
          this.setState({
              ...this.state, [value]: event.target.value
          });
      }

      handleSubmit = (event) => {
          event.preventDefault();
          this.sendItemToRedux();
          console.log('This is being sent:', this.state);
      }

      sendItemToRedux = () => {
        //   const body = this.state;
          const action = {type: 'ADD_ITEM', payload: {...this.state}};

          this.props.dispatch(action)
        //   console.log(body);
      }

      handleOnClick = () => {
          this.sendItemToRedux();
          alert('Thanks for adding your item to the shelf!');
      }

      render() {
          return(
              <div>
                <div>
                    <h2>What magical item would you like to add?</h2>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input onChange={this.handleChange('description')} placeholder="Item Description" value={this.state.description} name="Description" />
                        </div>
                        <div>
                            <input onChange={this.handleChange('image_url')} placeholder="Image URL" value={this.state.image_url} name="Image" />
                        </div>
                        <button>
                        Add your item!
                        </button>
                    </form>

                </div>    
              </div>
        );
      }
  }

  export default connect(mapStateToProps)(AddItemForm);