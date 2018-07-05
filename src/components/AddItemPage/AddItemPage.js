import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { fetchUser } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class AddItemPage extends Component {

    
    //will get user from redux on load
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  render() {
    //content will be empty if not logged in
    let content = null;

    //create code to show if logged in here
    if (this.props.user.userName) {
      content = (
        <div>
           {/* create your page here, access elements of user as below
        { this.props.user.id }! */}
          
          

        </div>
      );
    }

    //will return content defined above.
    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddItemPage);