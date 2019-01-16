import React from 'react';
import {withRouter} from 'react-router-dom'
import { Button, Form, Message } from "semantic-ui-react";
import {Link} from 'react-router-dom'

class Login extends React.Component {

  state = {
      username: "",
      password: ""
    };

    handleChange = (e, { name, value }) => {
      this.setState({ [name]: value });
    };

    handleLoginSubmit = () => {
      fetch(`http://localhost:3001/login`, {
        method:"POST",
        headers: {
          "Content-type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }).then(res => res.json())
      .then(data => {
        if(data.error){
          alert('Incorrect username or password')
        }else{
          console.log(data)
          this.props.setCurrentUser(data.user_info)
          localStorage.setItem('token', data.token)
        }
      })
    };

  render() {
    return (
      <div>
      <div className='black'>
        <Form
          onSubmit={this.handleLoginSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
        >

          <Message
            error
            header={this.props.failedLogin ? this.props.error : null}
          />

          <Form.Group widths="equal">
            <Form.Input
              label="Username"
              placeholder="Username"
              name="username"
              className='inputs'
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              label="Password"
              placeholder="Password"
              className='inputs'
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <button className='log'type="submit">Login</button>
        </Form>
        <Link className='item' to='/signup'>
            NOT A MEMBER?
        </Link>
      </div>
      </div>
    )
  }
}

export default withRouter(Login);
