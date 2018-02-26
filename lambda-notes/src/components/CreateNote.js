import React from 'react';
import { connect } from 'react-redux';

import { add_note, view_button_click } from '../actions/index';

import './css/CreateNote.css';

class CreateNote extends React.Component {
  state = {
    title: '',
    body: '',
  };

  render() {
    return (
      <div className="create">
        <h1 className="create-header"> Create New Note: </h1>
        <form onSubmit={this.handleSumbit}>
          <input
            type="text"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <input
            type="text"
            placeholder="Note Content"
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };
  handleBodyChange = event => {
    this.setState({ body: event.target.value });
  };
  
  handleSumbit = event => {
    event.preventDefault();
    this.props.add_note(this.state);
    this.setState({
      title: '',
      body: '',
    });
    this.props.view_button_click();
  };
}

const mapStateToProps = state => {
  return {
    current: state.current,
  };
};

export default connect(mapStateToProps, { add_note, view_button_click })(CreateNote);
