import React, { Component } from "react";

export default class Chessboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [0, 1, 2, 3],
    };
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.employees.map((emp) => (
              <tr key= {emp} >
                {this.state.employees.map((emp1) => {
                  <td>hoasas</td>
                 
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
