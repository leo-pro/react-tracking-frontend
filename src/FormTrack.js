import React from 'react';
import { withFormik, Form, Field, ErrorMessage}  from 'formik';
import * as Yup from 'yup';


const state  = {
    trackCode: "",
    events : [],
}

const schema = Yup.object().shape({
    trackCode: Yup.string()
        .required("Informe o código de rastreamento.")
        .min(13, "O código deve conter no máximo 13 caracteres.")
})

const enhanceWithFormik = withFormik({
    mapPropsToValues: () => ({ trackCode: ''}),
    handleSubmit: values => {

        fetch(`http://localhost:3001/?tracking=${state.trackCode}`)
            .then(response => response.json())
            .then((data) => {
                const events = data.events || [];

                this.setState({ events });
            })
            .catch(console.error);
    },
    isInitialValid: false,
    validateOnChange: true,
    validateOnBlur: true,
    displayName: 'FormTrack',
    validationSchema: schema
})

const FormTrack = props => {
    return (
        <div className="container">
            <h1>React Tracking</h1>
            <Form>
                <div className="form-group">
                    <Field type="text" name="trackCode" placeholder="Insira o numero do objeto de rastreamento." className="form-control" value={state.trackCode}/>
                    
                    <ErrorMessage name="trackCode"></ErrorMessage>
                </div>
                <button type="submit" className="btn btn-primary">Track</button>
            </Form>
        </div>
    );
}

export default enhanceWithFormik(FormTrack);