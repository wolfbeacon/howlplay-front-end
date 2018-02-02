import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <form id="login-form">
        <h3>{this.props.title}</h3>

        {this.props.input.map(function(item, key) {
          return (
            <div className="login-input-section" key={key}>
              <label className="login-form-label" htmlFor="{item.name}-input">{item.name}: </label>
              <input type="{item.type}" className="login-input" id="{item.name}-input"/>
            </div>
          );
        })}

        <div id="login-controls">
          <button id="login-submit">{this.props.button}</button>
          <span id="button-message"></span>
        </div>
      </form>
    );
  }
}

export default LoginForm;
