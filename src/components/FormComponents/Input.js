//@flow
import React from 'react'
import {Field} from 'react-form'
import {FormGroup, Label, Input as BsInput, FormFeedback} from 'reactstrap'
import './Input.scss'

type InputProps = {
  name: string,
  label?: string,
  placeholder?: string,
  format?: Function
}

export const Input = ({name, label, placeholder, format = value => value}: InputProps) =>
  <Field field={name}>
    {({touched, error, setTouched, setValue}) =>
      <FormGroup className="Input">
        <Label htmlFor="name">{label}</Label>
        <BsInput placeholder={placeholder} name={name} invalid={touched && error}
          onFocus={() => setTouched(true)} onChange={({target: {newValue}}) => setValue(format(newValue))} />
        {error && <FormFeedback>{error}</FormFeedback>}
      </FormGroup>
    }
  </Field>
