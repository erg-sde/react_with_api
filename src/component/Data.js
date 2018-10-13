import React, { Component } from 'react';
import axios from 'axios';

class Data extends Component{
    constructor() {
		super();
		this.state = { users: [] };
	}

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(myApiResponse => {
            const users = myApiResponse.data;
            this.setState({ users: users });
          })
      }

      render() {
        return (
          <ul>
            { this.state.users.map(user => <li>{user.name}, {user.email}</li>)}
          </ul>
        )
      }
}

export default Data