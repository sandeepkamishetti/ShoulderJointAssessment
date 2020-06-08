import React, { Component } from 'react'
import './Submit.css'

class Submit extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var Label1 = "(< 2 Sec)";
        var Label2 = "(> 2 Sec)";
        const patientInformation = this.props.list.patientInfo;
        const symptoms = this.props.list.symptomsForPain;
        const tenderness = this.props.list.tenderness;
        const shoulderRangeOfMotionP = this.props.list.shoulderRangeOfMotionP;
        const shoulderRangeOfMotionN = this.props.list.shoulderRangeOfMotionN;
        const grom = this.props.list.grom;
        const shoulderStrengthExam = this.props.list.shoulderStrengthExam;
        const shoulderInstabilityExam = this.props.list.shoulderInstabilityExam;
        const shoulderImpingementSigns = this.props.list.shoulderImpingementSigns;
        const labralTearTest = this.props.list.labralTearTest;
        const motorExam = this.props.list.motorExam;
        const sensoryExam = this.props.list.sensoryExam;
        const neurovascularExamRP = this.props.list.neurovascularExamRP;
        const neurovascularExamDCR = this.props.list.neurovascularExamDCR;
        const wingingsOfScapula = this.props.list.wingingsOfScapula;
        const muscleWasting = this.props.list.muscleWasting;
        const cervicalSpineSpurlingTest = this.props.list.cervicalSpineSpurlingTest;

        return (
            <div>
                <h1>SHOULDER JOINT ASSESSMENT SUMMARY</h1>
                <h2>{patientInformation[0].patientName}</h2>
                <h5>{patientInformation[0].yhNum}</h5>
                <h5>{patientInformation[0].gender}</h5>
                <h5>{patientInformation[0].history}</h5>
                <div className="container">
                    <h3>SYMPTOMS</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th scope="col"><h5>REASON</h5></th>
                                <th scope="col"><h5>EXISTS</h5></th>
                                <th scope="col"><h5>DURATION (in days)</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                symptoms.map((symptom, index) => {
                                    return <tr key={index}>
                                        <td scope="row">
                                            {symptom.reason.toUpperCase()}
                                        </td>
                                        <td scope="row">
                                            {symptom.exists}
                                        </td>
                                        <td scope="row">
                                            {symptom.duration}
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3>EXAMINATION</h3>
                    <table className="responsive-table">

                        <thead>
                            <tr>
                                <th><h5>TYPE OF TENDERNESS </h5></th>
                                <th><h5>RESULT</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tenderness.map((tender, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {tender.type}
                                        </td>
                                        <td>
                                            {tender.result}
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>MUSCLE WASTING</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="2"> <h5>TEST NAME</h5> </th>
                                <th colSpan="2"> <h5>RESULT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>LEFT</h5> </th>
                                <th> <h5>RIGHT</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                muscleWasting.map((test, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {test.testName}
                                        </td>
                                        <td>
                                            {test.result.left}
                                        </td>
                                        <td>
                                            {test.result.right}
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>SHOULDER RANGE OF MOTION</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="3"> <h5>TEST NAME</h5> </th>
                            </tr>
                            <tr>
                                <th colSpan="2"> <h5>LEFT</h5> </th>
                                <th colSpan="2"> <h5>RIGHT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>ACTIVE</h5> </th>
                                <th> <h5>PASSIVE</h5> </th>

                                <th> <h5>ACTIVE</h5> </th>
                                <th> <h5>PASSIVE</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shoulderRangeOfMotionP.map((test, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {test.testName}
                                        </td>
                                        <td>
                                            {test.left.active}
                                        </td>
                                        <td>
                                            {test.left.passive}
                                        </td>
                                        <td>
                                            {test.right.active}
                                        </td>
                                        <td>
                                            {test.right.passive}
                                        </td>

                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>SHOULDER RANGE OF MOTION</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="3"> <h5>TEST NAME</h5> </th>
                            </tr>
                            <tr>
                                <th colSpan="2"> <h5>LEFT</h5> </th>
                                <th colSpan="2"> <h5>RIGHT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>ACTIVE</h5> </th>
                                <th> <h5>PASSIVE</h5> </th>

                                <th> <h5>ACTIVE</h5> </th>
                                <th> <h5>PASSIVE</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shoulderRangeOfMotionN.map((test, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {test.testName}
                                        </td>
                                        <td>
                                            {test.left.active}
                                        </td>
                                        <td>
                                            {test.left.passive}
                                        </td>
                                        <td>
                                            {test.right.active}
                                        </td>
                                        <td>
                                            {test.right.passive}
                                        </td>

                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>GLOBAL RESTRICTION OF MOVEMENTS</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="2"> <h5>TEST NAME</h5> </th>
                                <th colSpan="2"> <h5>RESULT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>LEFT</h5> </th>
                                <th> <h5>RIGHT</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                grom.map((test, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {test.testName}
                                        </td>
                                        <td>
                                            {test.result.left}
                                        </td>
                                        <td>
                                            {test.result.right}
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>SHOULDER STRENGTH EXAM</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="2"> <h5>TEST NAME</h5> </th>
                                <th colSpan="2"> <h5>RESULT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>LEFT</h5> </th>
                                <th> <h5>RIGHT</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shoulderStrengthExam.map((exam, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {exam.examName}
                                        </td>
                                        <td>
                                            {exam.result.left}
                                        </td>
                                        <td>
                                            {exam.result.right}
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>SHOULDER INSTABILITY EXAM</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="2"> <h5>TEST NAME</h5> </th>
                                <th colSpan="2"> <h5>RESULT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>LEFT</h5> </th>
                                <th> <h5>RIGHT</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shoulderInstabilityExam.map((exam, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {exam.examName}
                                        </td>
                                        <td>
                                            {exam.result.left}
                                        </td>
                                        <td>
                                            {exam.result.right}
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>SHOULDER IMPINGEMENT SIGNS</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="2"> <h5>TEST NAME</h5> </th>
                                <th colSpan="2"> <h5>RESULT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>LEFT</h5> </th>
                                <th> <h5>RIGHT</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shoulderImpingementSigns.map((test, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {test.testName}
                                        </td>
                                        <td>
                                            {test.result.left}
                                        </td>

                                        <td>
                                            {test.result.right}
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>TESTS FOR LABRAL TEAR/BICEPS LESION</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="2"> <h5>TEST NAME</h5> </th>
                                <th colSpan="2"> <h5>RESULT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>LEFT</h5> </th>
                                <th> <h5>RIGHT</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                labralTearTest.map((test, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {test.testName}
                                        </td>
                                        <td>
                                            {test.result.left}
                                        </td>

                                        <td>
                                            {test.result.right}
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>


                <div>
                    <h3>WINGING OF SCAPULA</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="2"> <h5>TEST NAME</h5> </th>
                                <th colSpan="2"> <h5>RESULT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>LEFT</h5> </th>
                                <th> <h5>RIGHT</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wingingsOfScapula.map((test, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {test.testName}
                                        </td>
                                        <td>
                                            {test.result.left}
                                        </td>
                                        <td>
                                            {test.result.right}
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>CERVICAL SPINE</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th > <h5>TEST NAME</h5> </th>
                                <th > <h5>RESULT</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr>
                                    <td>
                                        <h5>SPURLING TEST</h5>
                                    </td>
                                    <td>
                                        {patientInformation[0].spurlingtest}
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>

                </div>
                <div>
                    <h3>NEUROVASCULAR EXAM</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="2"> <h5>TEST NAME</h5> </th>
                                <th colSpan="2"> <h5>RESULT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>LEFT</h5> </th>
                                <th> <h5>RIGHT</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                neurovascularExamRP.map((exam, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {exam.examName}
                                        </td>
                                        <td>
                                            {exam.result.left}
                                        </td>

                                        <td>
                                            {exam.result.right}
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>NEUROVASCULAR EXAM</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="2"> <h5>TEST NAME</h5> </th>
                                <th colSpan="4"> <h5>RESULT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>LEFT {Label1}</h5> </th>
                                <th> <h5>LEFT {Label2}</h5> </th>
                                <th> <h5>RIGHT {Label1}</h5> </th>
                                <th> <h5>RIGHT {Label2}</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                neurovascularExamDCR.map((exam, index) => {

                                    return <tr key={index}>
                                        <td>
                                            {exam.examName}
                                        </td>
                                        <td>
                                            {exam.left.less}
                                        </td>
                                        <td>
                                            {exam.left.greater}
                                        </td>
                                        <td>
                                            {exam.right.less}
                                        </td>
                                        <td>
                                            {exam.right.greater}
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>SENSORY EXAM</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="2"> <h5>TEST NAME</h5> </th>
                                <th colSpan="2"> <h5>RESULT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>LEFT</h5> </th>
                                <th> <h5>RIGHT</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sensoryExam.map((test, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {test.whichNerve}
                                        </td>
                                        <td>
                                            {test.result.left}
                                        </td>
                                        <td>
                                            {test.result.right}
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3>MOTOR EXAM</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th rowSpan="2"> <h5>TEST NAME</h5> </th>
                                <th colSpan="2"> <h5>RESULT</h5> </th>
                            </tr>
                            <tr>
                                <th> <h5>LEFT</h5> </th>
                                <th> <h5>RIGHT</h5> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                motorExam.map((test, index) => {
                                    return <tr key={index}>
                                        <td>
                                            {test.whichNerve}
                                        </td>
                                        <td>
                                            {test.result.left}
                                        </td>
                                        <td>
                                            {test.result.right}
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        )
    }

}

export default Submit;
