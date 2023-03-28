import React from 'react';
import axios from 'axios';

export default class User extends React.Component {
    state = {
        person: []
    }
    componentDidMount() {
        axios.get(`/users`)                                                     
            .then(res => {
                console.log(res);
                this.setState({ person: res.data });
            })
    }
    render() {
        return (
            <>
                <div class="ulheading">
                    <h2>Spark Users</h2>
                </div>
                <div class="ultable">
                    <table class="uldata">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Account</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                            <td>
                                {this.state.person.map(persons => (<h6 key={persons.id}>{persons.name}</h6>))}
                            </td>
                            <td>
                                {this.state.person.map(persons => (<h6 key={persons.id}>{persons.phone}</h6>))}
                            </td>
                            <td>
                                {this.state.person.map(persons => (<h6 key={persons.id}>{persons.email}</h6>))}
                            </td>
                            <td>
                                {this.state.person.map(persons => (<h6 key={persons.id}>{persons.account}</h6>))}
                            </td>
                            <td>
                                {this.state.person.map(persons => (<h6 key={persons.id}>{persons.amount}</h6>))}
                            </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </>
        )
    }

}