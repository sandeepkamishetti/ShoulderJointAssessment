import React, { Component } from 'react'
//import Table from './Table.js'
import './Style.css'

class AssessmentForm extends Component {
    constructor(props) {
        super(props);
    }

    onDurationChange = (index, e) => {
        let newArray = [...this.props.values.symptomsForPain]
        newArray[index].duration = parseInt(e.target.value)
        this.setState({
            symptomsForPain: newArray
        }, () => { console.log(this.props.values) })
    }

    onRadioChangeEvent = (index, e) => {
        let newArray = [...this.props.values.symptomsForPain]
        newArray[index].exists = e.target.value
        this.setState({
            symptomsForPain: newArray
        }, () => {
            console.log(this.props.values)
        })
    }

    onRadioBtnChange = (arrayName, index, e) => {
        var x = e.target.name
        switch (arrayName) {
            case "shoulderStrengthExam":
                var newArray = [...this.props.values.shoulderStrengthExam];
                break;
            case "shoulderInstabilityExam":
                newArray = [...this.props.values.shoulderInstabilityExam];
                break;
            case "shoulderImpingementSigns":
                newArray = [...this.props.values.shoulderImpingementSigns];
                break;
            case "labralTearTest":
                newArray = [...this.props.values.labralTearTest];
                break;
            case "grom":
                newArray = [...this.props.values.grom];
                break;
            case "wingingsOfScapula":
                newArray = [...this.props.values.wingingsOfScapula];
                break;
            case "muscleWasting":
                newArray = [...this.props.values.muscleWasting];
                break;
            case "neurovascularExamRP":
                newArray = [...this.props.values.neurovascularExamRP];
                break;
            case "sensoryExam":
                newArray = [...this.props.values.sensoryExam];
                break;
            case "motorExam":
                newArray = [...this.props.values.motorExam];
                break;
            case "patientInfo":
                newArray = [...this.props.values.patientInfo];
                break;
            default: ;
        }
        if (x.includes("right"))
            newArray[index].result.right = e.target.value
        else if (x.includes("left"))
            newArray[index].result.left = e.target.value
        else if (x === "gender")
            newArray[0].gender = e.target.value
        else if (x === "history")
            newArray[0].history = e.target.value
        else if (x === "spurlingtest")
            newArray[0].spurlingtest = e.target.value

        switch (arrayName) {
            case "shoulderStrengthExam":
                this.setState({
                    shoulderStrengthExam: newArray
                }, () => {
                    console.log(this.props.values)
                })
                break;
            case "shoulderInstabilityExam":
                this.setState({
                    shoulderInstabilityExam: newArray
                }, () => {
                    console.log(this.props.values)
                })
                break;
            case "shoulderImpingementSigns":
                this.setState({
                    shoulderImpingementSigns: newArray
                }, () => {
                    console.log(this.props.values)
                })
                break;
            case "labralTearTest":
                this.setState({
                    labralTearTest: newArray
                }, () => {
                    console.log(this.props.values)
                })
                break;
            case "grom":
                this.setState({
                    grom: newArray
                }, () => {
                    console.log(this.props.values)
                })
                break;
            case "wingingsOfScapula":
                this.setState({
                    wingingsOfScapula: newArray
                }, () => {
                    console.log(this.props.values)
                })
                break;
            case "neurovascularExamRP":
                this.setState({
                    neurovascularExamRP: newArray
                }, () => {
                    console.log(this.props.values)
                })
                break;
            case "muscleWasting":
                this.setState({
                    muscleWasting: newArray
                }, () => {
                    console.log(this.props.values)
                })
                break;
            case "sensoryExam":
                this.setState({
                    sensoryExam: newArray
                }, () => {
                    console.log(this.props.values)
                })
                break;
            case "motorExam":
                this.setState({
                    motorExam: newArray
                }, () => {
                    console.log(this.props.values)
                })
                break;
            case "patientInfo":
                this.setState({
                    patientInfo: newArray
                }, () => {
                    console.log(this.props.values)
                })
                break;
            default: ;
        }
    }

    onTextChanges = (arrayName, index, e) => {
        var targetName = e.target.name;
        var targetValue = e.target.value;
        if ((arrayName !== "neurovascularExamDCR") && (arrayName !== "patientInfo"))
            targetValue = parseInt(targetValue);

        if (arrayName === "shoulderRangeOfMotionP")
            var newArray = [...this.props.values.shoulderRangeOfMotionP];
        else if (arrayName === "shoulderRangeOfMotionN")
            newArray = [...this.props.values.shoulderRangeOfMotionN];
        else if (arrayName === "neurovascularExamDCR")
            newArray = [...this.props.values.neurovascularExamDCR];
        else if (arrayName === "patientInfo")
            newArray = [...this.props.values.patientInfo];

        switch (targetName) {
            case "rightActive":
                newArray[index].right.active = targetValue;
                break;
            case "rightPassive":
                newArray[index].right.passive = targetValue;
                break;
            case "leftActive":
                newArray[index].left.active = targetValue;
                break;
            case "leftPassive":
                newArray[index].left.passive = targetValue;
                break;
            case "rightLess":
                newArray[index].right.less = targetValue;
                break;
            case "rightGreater":
                newArray[index].right.greater = targetValue;
                break;
            case "leftLess":
                newArray[index].left.less = targetValue;
                break;
            case "leftGreater":
                newArray[index].left.greater = targetValue;
                break;
            case "patientName":
                newArray[0].patientName = targetValue;
                break;
            case "yhNum":
                newArray[0].yhNum = "YH" + targetValue;
                break;
            default: ;
        }

        if (arrayName === "shoulderRangeOfMotionP")
            this.setState({
                shoulderRangeOfMotionP: newArray
            }, () => {
                console.log(this.props.values)
            })
        else if (arrayName === "shoulderRangeOfMotionN")
            this.setState({
                shoulderRangeOfMotionN: newArray
            }, () => {
                console.log(this.props.values)
            })
        else if (arrayName === "neurovascularExamDCR")
            this.setState({
                neurovascularExamDCR: newArray
            }, () => {
                console.log(this.props.values)
            })
        else if (arrayName === "patientInfo")
            this.setState({
                patientInfo: newArray
            }, () => {
                console.log(this.props.values)
            })
    }

    onDateChange = (e) => {
        var targetValue = e.target.value;
        var newArray = [...this.props.values.patientInfo];
        newArray[0].Date = targetValue;
        this.setState({
            patientInfo: newArray
        }, () => {
            console.log(this.props.values)
        })

    }

    onRadioChange = (index, e) => {
        let newArray = [...this.props.values.tenderness]
        newArray[index].result = e.target.value
        this.setState({
            tenderness: newArray
        }, () => {
            console.log(this.props.values)
        })
    }

    render() {
        var arrayName = "patientInfo";
        var isLeftRightBoth = this.props.values.patientInfo[0].history;
        const checkedL = (isLeftRightBoth === "Left" ? false : true);
        const checkedR = (isLeftRightBoth === "Right" ? false : true);
        const checkedB = (isLeftRightBoth === "Both" ? true : false);
        //const disableL = checkedL && checkedB
        //const disableR = checkedR && checkedB

        return (<div>
            <h1>SHOULDER JOINT ASSESSMENT FORM</h1>
            <div>
                {<div id="lDefaults">
                        <label className="abcd">Patinent's Name</label>
                        <input className="abcd" type="text" placeholder="Enter your Name" name="patientName" value={this.props.values.patientName} onChange={(e) => this.onTextChanges(arrayName, 0, e)} ></input>
                    </div>}
                {<div id="rDefaults">
                    <label className="abcd">YH Number</label>
                    <input className="abcd" type="text" placeholder="Enter your YH Number if any" name="yhNum" value={this.props.values.yhNum} onChange={(e) => this.onTextChanges(arrayName, 0, e)} ></input>
                </div>}
                <br /><br />
                {<div id="rDefaults">
                    <label className="abcd">Gender</label>
                    <input type="radio" className="radioButton" name="gender" value="Male" onChange={(e) => this.onRadioBtnChange(arrayName, 0, e)}></input>
                    <label className="abcd">MALE</label>
                    <input type="radio" className="radioButton" name="gender" value="Female" onChange={(e) => this.onRadioBtnChange(arrayName, 0, e)}></input>
                    <label>FEMALE</label>
                </div>}<br />
                {<div id="lDefaults">
                    <label className="abcd">Date</label>
                    <input className="abcd" type="date" name="Date" value={this.props.values.Date} onChange={(e) => this.onDateChange(e)} ></input>
                </div>}
                <br />
            </div><br /><br />
            {<div>
                <label>History</label>
                <input type="radio" className="radioButton" name="history" value="Left" onChange={(e) => this.onRadioBtnChange(arrayName, 0, e)}></input>
                <label>LEFT</label>
                <input type="radio" className="radioButton" name="history" value="Right" onChange={(e) => this.onRadioBtnChange(arrayName, 0, e)}></input>
                <label>RIGHT</label>
                <input type="radio" className="radioButton" name="history" value="Both" onChange={(e) => this.onRadioBtnChange(arrayName, 0, e)}></input>
                <label>BOTH</label><br />
            </div>
            }
            <div>
                <h4>SYMPTOMS</h4>
                <table id="tests">
                    <thead>
                        <tr>
                            <th><h5>REASON</h5></th>
                            <th><h5>EXISTS</h5></th>
                            <th><h5>DURATION (in days)</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.values.symptomsForPain.map((symptom, index) => {
                                return <tr key={index}>
                                    <td>
                                        {symptom.reason.toUpperCase()}
                                    </td>
                                    <td>
                                        <input type="radio" className="radioButton" name={symptom.reason} value="Yes" onChange={(e) => this.onRadioChangeEvent(index, e)}></input>
                                        <label>YES</label>
                                        <input type="radio" className="radioButton" name={symptom.reason} value="No" onChange={(e) => this.onRadioChangeEvent(index, e)}></input>
                                        <label>NO</label><br />
                                    </td>
                                    <td>
                                        <input type="text" name="duration" value={this.props.values.symptomsForPain.duration} placeholder="in Days" onChange={(e) => this.onDurationChange(index, e)} ></input>
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
                            this.props.values.tenderness.map((tender, index) => {
                                return <tr key={index}>
                                    <td>
                                        {tender.type}
                                    </td>
                                    <td>
                                        <input type="radio" className="radioButton" name={tender.type} value="Positive" onChange={(e) => this.onRadioChange(index, e)}></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" className="radioButton" name={tender.type} value="Negative" onChange={(e) => this.onRadioChange(index, e)}></input>
                                        <label>NEGATIVE</label><br />
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
                            this.props.values.shoulderStrengthExam.map((exam, index) => {
                                var arrayName = "shoulderStrengthExam"
                                return <tr key={index}>
                                    <td>
                                        {exam.examName}
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
                                    </td>

                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
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
                            this.props.values.shoulderInstabilityExam.map((exam, index) => {
                                var arrayName = "shoulderInstabilityExam"
                                return <tr key={index}>
                                    <td>
                                        {exam.examName}
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
                                    </td>

                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
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
                            this.props.values.shoulderImpingementSigns.map((test, index) => {
                                var arrayName = "shoulderImpingementSigns"
                                return <tr key={index}>
                                    <td>
                                        {test.testName}
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
                                    </td>

                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
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
                            this.props.values.labralTearTest.map((test, index) => {
                                var arrayName = "labralTearTest"
                                return <tr key={index}>
                                    <td>
                                        {test.testName}
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
                                    </td>

                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
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
                            <th colSpan="2"> <h5>RESULT</h5> </th>
                        </tr>
                        <tr>
                            <th> <h5>LEFT</h5> </th>
                            <th> <h5>RIGHT</h5> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.values.neurovascularExamRP.map((exam, index) => {
                                var arrayName = "neurovascularExamRP"
                                return <tr key={index}>
                                    <td>
                                        {exam.examName}
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Yes"></input>
                                        <label>YES</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="No"></input>
                                        <label>NO</label><br />
                                    </td>

                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Yes"></input>
                                        <label>YES</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="No"></input>
                                        <label>NO</label><br />
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
                            <th colSpan="2"> <h5>RESULT</h5> </th>
                        </tr>
                        <tr>
                            <th> <h5>LEFT</h5> </th>
                            <th> <h5>RIGHT</h5> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.values.neurovascularExamDCR.map((exam, index) => {
                                var arrayName = "neurovascularExamDCR";
                                var Label1 = "< 2 Sec";
                                var Label2 = "> 2 Sec";
                                return <tr key={index}>
                                    <td>
                                        {exam.examName}
                                    </td>
                                    <td>
                                        <label>{Label1}</label>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedL} placeholder="YES or NO" type="text" name={"leftLess"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>
                                        <br />
                                        <label>{Label2}</label>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedL} placeholder="YES or NO" type="text" name={"leftGreater"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>

                                    </td>
                                    <td>
                                        <label>{Label1}</label>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedR} placeholder="YES or NO" type="text" name={"rightLess"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>
                                        <br />
                                        <label>{Label2}</label>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedR} placeholder="YES or NO" type="text" name={"rightGreater"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>

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
                            this.props.values.shoulderRangeOfMotionP.map((test, index) => {
                                var arrayName = "shoulderRangeOfMotionP";
                                return <tr key={index}>
                                    <td>
                                        {test.testName}
                                    </td>
                                    <td>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedL} type="text" placeholder="0 to 180 degrees" name={"leftActive"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>
                                    </td>
                                    <td>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedL} type="text" placeholder="0 to 180 degrees" name={"leftPassive"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>
                                    </td>
                                    <td>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedR} type="text" placeholder="0 to 180 degrees" name={"rightActive"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>
                                    </td>
                                    <td>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedR} type="text" placeholder="0 to 180 degrees" name={"rightPassive"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>
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
                            <th colSpan="2"> <h5>RIGT</h5> </th>
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
                            this.props.values.shoulderRangeOfMotionN.map((test, index) => {
                                var arrayName = "shoulderRangeOfMotionN";
                                return <tr key={index}>
                                    <td>
                                        {test.testName}
                                    </td>
                                    <td>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedL} type="text" placeholder="-60 to 90 degrees" name={"leftActive"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>
                                    </td>
                                    <td>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedL} type="text" placeholder="-60 to 90 degrees" name={"leftPassive"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>
                                    </td>
                                    <td>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedR} type="text" placeholder="-60 to 90 degrees" name={"rightActive"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>
                                    </td>
                                    <td>
                                        <input className="textBox" disabled={(isLeftRightBoth === "Both") ? false : checkedR} type="text" placeholder="-60 to 90 degrees" name={"rightPassive"} onChange={(e) => this.onTextChanges(arrayName, index, e)}></input>
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
                            this.props.values.grom.map((test, index) => {
                                var arrayName = "grom"
                                return <tr key={index}>
                                    <td>
                                        {test.testName}
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
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
                            this.props.values.wingingsOfScapula.map((test, index) => {
                                var arrayName = "wingingsOfScapula"
                                return <tr key={index}>
                                    <td>
                                        {test.testName}
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} value="Yes" onChange={(e) => this.onRadioBtnChange(arrayName, index, e)}></input>
                                        <label>YES</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} value="No" onChange={(e) => this.onRadioBtnChange(arrayName, index, e)}></input>
                                        <label>NO</label><br />
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} value="Yes" onChange={(e) => this.onRadioBtnChange(arrayName, index, e)}></input>
                                        <label>YES</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} value="No" onChange={(e) => this.onRadioBtnChange(arrayName, index, e)}></input>
                                        <label>NO</label><br />
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
                            this.props.values.muscleWasting.map((test, index) => {
                                var arrayName = "muscleWasting"
                                return <tr key={index}>
                                    <td>
                                        {test.testName}
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Yes"></input>
                                        <label>YES</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="No"></input>
                                        <label>NO</label><br />
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Yes"></input>
                                        <label>YES</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="No"></input>
                                        <label>NO</label><br />
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
                            this.props.values.motorExam.map((test, index) => {
                                var arrayName = "motorExam"
                                return <tr key={index}>
                                    <td>
                                        {test.whichNerve}
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
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
                            this.props.values.sensoryExam.map((test, index) => {
                                var arrayName = "sensoryExam"
                                return <tr key={index}>
                                    <td>
                                        {test.whichNerve}
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedL} className="radioButton" name={arrayName + "left" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
                                    </td>
                                    <td>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Positive"></input>
                                        <label>POSITIVE</label>
                                        <input type="radio" disabled={(isLeftRightBoth === "Both") ? false : checkedR} className="radioButton" name={arrayName + "right" + index} onChange={(e) => this.onRadioBtnChange(arrayName, index, e)} value="Negative"></input>
                                        <label>NEGATIVE</label><br />
                                    </td>
                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <h4>CERVICAL SPINE</h4>
                <label>SPURLING TEST</label>
                <input type="radio" className="radioButton" name="spurlingtest" value="Positive" onChange={(e) => this.onRadioBtnChange("patientInfo", 0, e)}></input>
                <label>POSITIVE</label>
                <input type="radio" className="radioButton" name="spurlingtest" value="Negative" onChange={(e) => this.onRadioBtnChange("patientInfo", 0, e)}></input>
                <label>NEGATIVE</label>

            </div>
            <button value={1} onClick={this.props.clickBtn}>SUBMIT</button>
        </div>)
    }
}
export default AssessmentForm;
