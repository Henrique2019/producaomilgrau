import React, { Component } from 'react';
import Prod from '../service/Prod';
import DataTable from '../components/data-table';




export default class Users extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        Prod.get('/postes')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data: any, i: React.Key | null | undefined) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <>
            <div className="wrapper-users grid justify-items-center ">
                <div className="container grid justify-items-center ">
                    
                    <table aria-label="custom pagination table" className="table table-striped table-dark">
                        <thead className="text-medra-300">
                            <tr>
                                <td className="grid justify-items-center bg-medra-100">Cidade</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="grid justify-items-center bg-medra-100">Quadricula</td>
                                <td></td>
                                <td></td>
                                <td className="grid justify-items-center bg-medra-100">Produçao</td>
                                <td></td>
                                <td></td>
                                <td className="grid justify-items-center bg-medra-100">Data</td>
                            </tr>
                        </thead>
                        <tbody >
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
                 
    </>
        )
    }
}
