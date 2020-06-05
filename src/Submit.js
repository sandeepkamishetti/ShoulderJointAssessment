import React,{Component} from 'react'
import './Table.css'

class Submit extends Component{
constructor(props){
    super(props);
}
render(){
    var Label1 = "(< 2 Sec)";
    var Label2 = "(> 2 Sec)";
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
    const patientName = this.props.list.patientName;
    const cervicalSpineSpurlingTest = this.props.list.cervicalSpineSpurlingTest;

    return(
        <div>
            <h1>SHOULDER JOINT ASSESSMENT SUMMARY</h1>
    <h2>{patientName}</h2>
            <div className="container">
                <table className="responsive-table">
                <caption>SYMPTOMS</caption>
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
                <h4>EXAMINATION</h4>
                <table id="tests">

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
                <h4>MUSCLE WASTING</h4>
                <table id="tests">
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
                <h4>SHOULDER RANGE OF MOTION</h4>
                <table id="tests">
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
                <h4>SHOULDER RANGE OF MOTION</h4>
                <table id="tests">
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
                <h4>GLOBAL RESTRICTION OF MOVEMENTS</h4>
                <table id="tests">
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
                <h4>SHOULDER STRENGTH EXAM</h4>
                <table id="tests">
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
                <h4>SHOULDER INSTABILITY EXAM</h4>
                <table id="tests">
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
                <h4>SHOULDER IMPINGEMENT SIGNS</h4>
                <table id="tests">
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
                <h4>TESTS FOR LABRAL TEAR/BICEPS LESION</h4>
                <table id="tests">
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
                <h4>WINGING OF SCAPULA</h4>
                <table id="tests">
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
                <h4>CERVICAL SPINE</h4>
                <table id="tests">
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
                                        {this.props.list.cervicalSpineSpurlingTest}
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>

            </div>
            <div>
                <h4>NEUROVASCULAR EXAM</h4>
                <table id="tests">
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
                <h4>NEUROVASCULAR EXAM</h4>
                <table id="tests">
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
                <h4>SENSORY EXAM</h4>
                <table id="tests">
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
                <h4>MOTOR EXAM</h4>
                <table id="tests">
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