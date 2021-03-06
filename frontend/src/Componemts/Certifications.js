import React, { useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, mdbWavesEffect } from 'mdbreact';
import { useFormik, Field } from 'formik';
import { Card, CardContent, MenuItem } from '@material-ui/core'
import { TextField } from "formik-material-ui"
import * as Yup from 'yup'
import axios from 'axios'

import './Certifications.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { makeStyles } from '@material-ui/core/styles';



//now check that the value get correct to the database
const Certifications = () => {
    //state             //Setstate
    const [fieldApproveOptions, setFieldApproveOptions] = useState([])

    //useEffect Hooks 
    useEffect(() => {

        axios.get('/api/certifications/fieldApproveOptions?userId=1234567&rank=Colonel&force=Moran')
            .then(response => {

                setFieldApproveOptions(response.data.fieldApproveOptions)

            })
            .catch(err => console.log(err))
    }, [])
    console.table(fieldApproveOptions)
    const formik = useFormik({



        onSubmit: values => {
            axios.post('/api/certifications', values)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    })

    return (

        <Card className="bg1" >
            <CardContent >
                <div className="Pedding">
                    <MDBContainer fluid  >

                        <MDBRow center  >
                            <MDBCol md="4"  >
                                <div className="MDBColor">
                                    <form className="form"/*onSubmit={formik.onSubmit}*/ autoComplete="off">
                                        <p className="h1 text-center" style={{ paddingBottom: "10px", fontWeight: "bold" }}>Certifications</p>
                                        <div className="Certifications">


                                            <Field
                                              style = {{width: 400}}
                                                Field="Exercise name"
                                                component={TextField}
                                                name={"exerciseName"}
                                                label="Exercise name"
                                                type="text"
                                              
                                                helperText="Please enter exercise name"

                                            />

                                            <Field
                                                component={TextField}
                                                type="text"
                                                name="exerciseType"
                                                label="Exercise type"
                                                select
                                                variant="standard"
                                                helperText="Please select your exercise type "
                                                margin="normal"
                                                style = {{width: 400}}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
  >
                                                
                                                <MenuItem value="Open-terrain">Open Terrain</MenuItem>
                                                <MenuItem value="Urban-warfare" >Urban warfare</MenuItem>
                                                <MenuItem value="Armoured fighting vehicle" >Armoured fighting vehicle</MenuItem>
                                                <MenuItem value="unplanned" >unplanned</MenuItem>
                                                <MenuItem value="live military exercise" >live military exercise</MenuItem>
                                                
                                            </Field>

                              
                                            <Field
                                           
                                                label="Order of battle"
                                                component={TextField}
                                                name="exerciseOOB"
                                                type="number"
                                                min="20"
                                                style = {{width: 400}}
                                                helperText="Please enter Order of battle "

                                            />
                          


                                            {/*FieldApprove button */}
                                            <MDBInput
                                                label="fieldApprove"
                                                name="fieldApprove"
                                                list="fieldApproves"
                                                outline
                                                size="lg"
                                            //     {...formik.getFieldProps('fieldApprove')}
                                            />
                                            <datalist id="fieldApproves" defaultValue>

                                                {fieldApproveOptions.map((option, i) =>
                                                    <option key={i++} value={option.id}>
                                                        {option.rank + " " + option.firstName + " " + option.lastName}
                                                    </option>)}
                                            </datalist>




                                            <MDBInput
                                                label="fileApprove"
                                                name="fileApprove"
                                                type="text"
                                                outline
                                                size="lg"
                                            //  {...formik.getFieldProps('fileApprove')}
                                            />
                                            <MDBInput
                                                label="artilleryApprove"
                                                name="artilleryApprove"
                                                type="text"
                                                outline
                                                size="lg"
                                            //  {...formik.getFieldProps('artilleryApprove')}
                                            />
                                            <MDBInput
                                                label="exerciseManager"
                                                name="exerciseManager"
                                                type="text"
                                                outline
                                                size="lg"
                                                component={TextField}
                                            //  {...formik.getFieldProps('exerciseManager')}
                                            />


                                            <MDBInput
                                                label="trainerOfficerApprove"
                                                name="trainerOfficerApprove"
                                                type="text"
                                                outline
                                                size="lg"
                                            //  {...formik.getFieldProps('trainerOfficerApprove')}
                                            />



                                            <div style={{ fontSize: "large", fontWeight: "bold" }} className="custom-control custom-checkbox">

                                                <input type="checkbox"
                                                    className="custom-control-input"
                                                    name="exerciseLive"
                                                    id="live"
                                                    value="on"
                                                //    {...formik.getFieldProps('exerciseLive')}

                                                />
                                                <label className="custom-control-label" htmlFor="live"> live exercise</label>
                                            </div>




                                            {/** 
                                            /*pod section
                                            <span style={{ fontSize: "large", fontWeight: "bold", float: "left" }} >part of the day:</span>
                                            <div className="forms" style={{ fontWeight: "bold" }}   {...formik.getFieldProps('exercisePOD')} >
                                                /*night button
                                                <label htmlFor="rdo1">
                                                    <input type="radio" id="rdo1" name="exercisePOD" value="night" />
                                                    <span className="rdo"></span>
                                                    <span>night</span>
                                                </label>
                                                
                                                /*day button
                                                <label htmlFor="rdo2">
                                                    <input type="radio" id="rdo2" name="exercisePOD" value="day" />
                                                    <span className="rdo"></span>
                                                    <span>day</span>
                                                </label>

                                            </div>

                                            <div className="text-center">
                                             <MDBBtn type="submit" color="yellow">Send</MDBBtn>
                                            </div>
                                            */}



                                        </div >
                                    </form >
                                </div>
                            </MDBCol>
                        </MDBRow>

                    </MDBContainer >

                </div>
            </CardContent>
        </Card>

    );


}

export default Certifications;