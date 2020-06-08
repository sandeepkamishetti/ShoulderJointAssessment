import React, { Component } from 'react';
import './App.css';
import AssessmentForm from './AssessmentForm.js';
import Submit from './Submit';
//import Main from './Main'
//import Table from './Table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      renderView: 0,
      patientInfo: [
        {
          patientName: "",
          Date: "",
          yhNum: "",
          gender: "",
          history: "",
          spurlingtest: "",
          isRightLeftBoth:""
        }],
      symptomsForPain:
        [{
          reason: "pain",
          exists: "",
          duration: 0
        },
        {
          reason: "difficulty In Lifting",
          exists: "",
          duration: 0
        },
        {
          reason: "dislocation",
          exists: "",
          duration: 0
        },
        {
          reason: "sleepLess Nights",
          exists: "",
          duration: 0
        },
        {
          reason: "swelling",
          exists: "",
          duration: 0
        }],
      tenderness: [
        {
          type: "ANGLE OF ACROMION",
          result: ""
        },
        {
          type: "STERNO CLAVICULAR JOINT",
          result: ""
        },
        {
          type: "A-C JOINT",
          result: ""
        },
        {
          type: "BICIPITL GROOVE",
          result: ""
        },
        {
          type: "SPINE OF SCAPULA",
          result: ""
        },
        {
          type: "G-T OF THE HUMERUS",
          result: ""
        }

      ],
      shoulderRangeOfMotionP: [
        {
          testName: "FORWARD FLEXION",
          right: { active: 0, passive: 0 },
          left: { active: 0, passive: 0 },
        },
        {
          testName: "ABDUCTION",
          right: { active: 0, passive: 0 },
          left: { active: 0, passive: 0 },
        }
      ],
      shoulderRangeOfMotionN: [
        {
          testName: "EXTERNAL ROTATION",
          right: { active: 0, passive: 0 },
          left: { active: 0, passive: 0 },
        },
        {
          testName: "INTERNAL ROTATION",
          right: { active: 0, passive: 0 },
          left: { active: 0, passive: 0 },
        }
      ],
      grom: [
        {
          testName: "GLOBAL RANGE OF MOTIONS",
          result: { left: "", right: "" },
        }
      ],
      shoulderStrengthExam: [
        {
          examName: "FRENCH HORN SHOULDER TEST",
          result: { left: "", right: "" },
        },
        {
          examName: "LIFT OFF SUBSCAPULARIS TEST",
          result: { left: "", right: "" },
        },
        {
          examName: "EMPTY CAN TEST",
          result: { left: "", right: "" },
        },
        {
          examName: "FULL CAN TEST",
          result: { left: "", right: "" },
        },
        {
          examName: "DROP ARM SIGN",
          result: { left: "", right: "" },
        },
        {
          examName: "SPEEDS TEST",
          result: { left: "", right: "" },
        },
        {
          examName: "YERGASON TEST",
          result: { left: "", right: "" },
        },
        {
          examName: "ROTATOR CUFF TRIAD TEST",
          result: { left: "", right: "" },
        }
      ],
      shoulderInstabilityExam: [
        {
          examName: "APPREHENSION",
          result: { left: "", right: "" },
        },
        {
          examName: "SHOULDER CROSSOVER MANNEOUVER",
          result: { left: "", right: "" },
        },
        {
          examName: "SULCUS SIGN",
          result: { left: "", right: "" },
        }
      ],
      shoulderImpingementSigns: [
        {
          testName: "NEER TEST",
          result: { left: "", right: "" },
        },
        {
          testName: "HAWKINS TEST",
          result: { left: "", right: "" },
        },
        {
          testName: "EMPTY CANS TEST",
          result: { left: "", right: "" },
        }

      ],
      labralTearTest: [

        {
          testName: "SPEED TEST",
          result: { left: "", right: "" },
        },
        {
          testName: "YERGASON TEST",
          result: { left: "", right: "" },
        },
        {
          testName: "OBRIENS TEST",
          result: { left: "", right: "" },
        },
        {
          testName: "LABRAL CRANK TEST",
          result: { left: "", right: "" },
        }
      ],
      motorExam: [

        {
          whichNerve: "AXILLARY NERVE",
          result: { left: "", right: "" },
        },
        {
          whichNerve: "RADIAL NERVE",
          result: { left: "", right: "" },
        },
        {
          whichNerve: "ULNAR NERVE",
          result: { left: "", right: "" },
        },
        {
          whichNerve: "MEDIAN NERVE",
          result: { left: "", right: "" },
        }
      ],
      sensoryExam: [

        {
          whichNerve: "AXILLARY NERVE",
          result: { left: "", right: "" },
        },
        {
          whichNerve: "RADIAL NERVE",
          result: { left: "", right: "" },
        },
        {
          whichNerve: "ULNAR NERVE",
          result: { left: "", right: "" },
        },
        {
          whichNerve: "MEDIAN NERVE",
          result: { left: "", right: "" },
        }
      ],
      neurovascularExamRP: [
        {
          examName: "RADIAL PULSE",
          result: { left: "", right: "" },
        },
      ],
      neurovascularExamDCR: [
        {
          examName: "DISTAL CAPILLARY REFILL",
          right: { less: "", greater: "" },
          left: { less: "", greater: "" }
        },
      ],
      wingingsOfScapula: [
        {
          testName: "WINGINGS OF SCAPULA",
          result: { left: "", right: "" },
        }
      ],
      muscleWasting: [
        {
          testName: "MUSCLE WASTING",
          result: { left: "", right: "" },
        }
      ]
    }
  }
  clickBtn = e => {
    this.setState({
      renderView: +e.target.value
    }, console.log(this.state));
  };
  render() {
    switch (this.state.renderView) {
      case 1:
        return <Submit list={this.state} />;
      default:
        return <AssessmentForm clickBtn={this.clickBtn} values={this.state} />;
    }
  }
}
export default App;

/* import React from "react";
import { useTable, usePagination } from "react-table";

const firstNames = ["jane", "john", "alex"];
const lastName = ["smith", "jones"];

const data = Array(100)
  .fill()
  .map(a => ({
    firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
    lastName: lastName[Math.floor(Math.random() * lastName.length)],
    age: Math.ceil(75 * Math.random())
  }));

const columns = [
  {
    Header: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      }
    ]
  },
  {
    Header: "Other Info",
    columns: [
      {
        Header: "Age",
        accessor: "age"
      }
    ]
  }
];

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    usePagination
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
} */
