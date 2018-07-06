import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
    user: state.user,
  });

  class AddItemForm extends Component {
      constructor() {
          super();
          this.state = { item:
              {
                user: this.props.user, // should be getting user_id from SQL
                description: '',
                image_url: '',
                person_id: this.props.person_id    
              } 
          }
      }

      handleChange = (event) => {
          this.setState({
              ...this.state, description: event.target.value, image_url: event.target.value
          });
      }

      handleSubmit = (event) => {
          event.preventDefault();
          this.props.sendItemToRedux(this.state);
          console.log('This is being sent:', this.state);
      }

      sendItemToRedux = () => {
          const body = this.state;
          const action = {type: 'ADD_ITEM', payload: body};

          this.props.description(action)
          console.log(body);
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
                            <input onChange={this.handleChange} placeholder="Item Description" value={this.state.item.description} name="Description" />
                        </div>
                        <div>
                            <input onChange={this.handleChange} placeholder="Image URL" value={this.state.item.image_url} name="Image" />
                        </div>
                    </form>
                    <button onClick={this.handleOnClick}>
                    Add your item!
                    </button>
                </div>    
              </div>
        );
      }
  }