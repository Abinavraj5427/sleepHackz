/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import * as React from 'react';
import SignUpNavig from './components/SignUpNavig';
import Dashboard from './components/Dashboard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: null };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(value) {
    this.setState({ login: value });
  }

  componentDidMount() {
    this.handleLogin(null);
  }

  render() {
    return (
      this.state.login === null ? <SignUpNavig screenProps={{ handleLogin: this.handleLogin }} />
        : <Dashboard handleLogin={(val) => this.handleLogin(val)} />
    );
  }
}

