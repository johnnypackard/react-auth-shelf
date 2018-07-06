import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
  shelf: state.item.shelf
});

class InfoPage extends Component {

  getShelf = () => {
    this.props.dispatch({type: 'GET_SHELF'});
  }
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    this.getShelf();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    //will only load  if logged in
    if (this.props.user.userName) {
      content = (
        <div>
          <h1>CHECK OUT THIS SHELF!</h1>
          {JSON.stringify(this.props.shelf)}
          {
            this.props.shelf.map( item => 
              <div key={item.id}>
                <img src={item.image_url} alt=""/>
                <p>{item.description}</p>
                <button>Delete</button>
              </div>
            )
          }
        </div>
      );
    } //end

    //always shown
    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
