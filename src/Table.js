import React, { Component } from "react";
import "./Style.css"

class Table extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      students: [
        {
          id: 1,
          name: "Wasif",
          age: 21,
          offl: "wasif@email.com",
          pers: "waf@email.com"
        },
        {
          id: 2,
          name: "Ali",
          age: 19,
          offl: "wasif@email.com",
          pers: "waf@email.com"
        },
        {
          id: 3,
          name: "Saad",
          age: 16,
          offl: "wasif@email.com",
          pers: "waf@email.com"
        },
        {
          id: 4,
          name: "Asad",
          age: 25,
          offl: "wasif@email.com",
          pers: "waf@email.com"
        }
      ]
    };
  }
  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);

    return (
      <>
        <tr>
          <th rowspan="2">ID</th>
          <th rowspan="2">name</th>
          <th rowspan="2">age</th>
          <th colspan="2">mail</th>
        </tr>
        <tr>
          <th>off</th>
          <th>Pers</th>
        </tr>
      </>
    );
  }
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, offl, pers } = student; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{offl}</td>
          <td>{pers}</td>
        </tr>
      );
    });
  }
  render() {
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <h1>React Dynamic Table</h1>
        <table id="students">
          <tbody>
            {this.renderTableHeader()}
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;