import React from 'react';
import axios from 'axios';

export default class User extends React.Component {
    state = {
        person: []
    }
    componentDidMount() {
        axios.get(`/ttransfer`)
            .then(res => {
                console.log(res);
                this.setState({ person: res.data });
            })
    }
    render() {
        return (
            <>
                <div class="theading">
                    <h2>Spark Transactions </h2>
                </div>
                <div class="ultable">
                    <table class="uldata">
                        <thead>
                            <tr>
                                <th>Credited to</th>
                                <th>Account</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                            <td>
                                {this.state.person.map(persons => (<h6 key={persons.id}>{persons.tname}</h6>))}
                            </td>
                            <td>
                                {this.state.person.map(persons => (<h6 key={persons.id}>{persons.taccount}</h6>))}
                            </td>
                            <td>
                                {this.state.person.map(persons => (<h6 key={persons.id}>{persons.tamount}</h6>))}
                            </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </>
        )
    }

}