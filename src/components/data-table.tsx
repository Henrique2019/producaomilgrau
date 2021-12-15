import React, { Component } from 'react';

class DataTable extends Component<any, any> {
     render() {
        return (
            <tr>
                <td className="grid justify-items-center bg-gray-200"  >
                    {this.props.obj.Cidade}
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="grid justify-items-center bg-gray-300">
                    {this.props.obj.Quadricula}
                </td>
                <td></td>
                <td></td>
                <td className="grid justify-items-center bg-gray-400">
                    {this.props.obj.Produçao}
                </td>
                <td></td>
                <td></td>
                <td className="grid justify-items-center bg-gray-500">
                {this.props.obj.createdAt}
                </td>
            </tr>
        );
    }
}

export default DataTable