import React, { Component } from 'react'
import './Submit.css'

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
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

        return (
            <div>
                <h1>SHOULDER JOINT ASSESSMENT SUMMARY</h1>
                <div><h2 id="name">{patientInformation[0].patientName}</h2>
                    <h5 id="yhNum">{patientInformation[0].yhNum}</h5></div>
                <div><h5 id="gender">{patientInformation[0].gender}</h5></div>
                <div><h5 id="date">{patientInformation[0].Date}</h5></div>
                <div><h5 id="history">{patientInformation[0].history}</h5></div>
                
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#symptoms">SYMPTOMS</button></h3>
                    <div id="symptoms" className="collapse">
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
                    <h3><button type="button" className="btn btn-info" data-toggle="collapse" data-target="#examination">EXAMINATION</button></h3>
                    <div id="examination" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#muscleWasting">MUSCLE WASTING</button></h3>
                    <div id="muscleWasting" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#shoulderRangeOfMotionP">SHOULDER RANGE OF MOTION</button></h3>
                    <div id="shoulderRangeOfMotionP" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#shoulderRangeOfMotionN">SHOULDER RANGE OF MOTION</button></h3>
                    <div id="shoulderRangeOfMotionN" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#grom">GLOBAL RESTRICTION OF MOVEMENTS</button></h3>
                    <div id="grom" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#shoulderStrengthExam">SHOULDER STRENGTH EXAM</button></h3>
                    <div id="shoulderStrengthExam" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#shoulderInstabilityExam">SHOULDER INSTABILITY EXAM</button></h3>
                    <div id="shoulderInstabilityExam" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#shoulderImpingementSigns">SHOULDER IMPINGEMENT SIGNS</button></h3>
                    <div id="shoulderImpingementSigns" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#labralTearTest">TESTS FOR LABRAL TEAR/BICEPS LESION</button></h3>
                    <div id="labralTearTest" className="collapse">
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
                </div>


                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#wingingsOfScapula">WINGING OF SCAPULA</button></h3>
                    <div id="wingingsOfScapula" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#spurlingTest">CERVICAL SPINE</button></h3>
                    <div id="spurlingTest" className="collapse">
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
                </div>
                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#neurovascularExamRP">NEUROVASCULAR EXAM</button></h3>
                    <div id="neurovascularExamRP" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#neurovascularExamDCR">NEUROVASCULAR EXAM</button></h3>
                    <div id="neurovascularExamDCR" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#sensoryExam">SENSORY EXAM</button></h3>
                    <div id="sensoryExam" className="collapse">
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
                </div>

                <div>
                    <h3><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#motorExam">MOTOR EXAM</button></h3>
                    <div id="motorExam" className="collapse">
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

            </div>

        )
    }

}

export default Submit;
