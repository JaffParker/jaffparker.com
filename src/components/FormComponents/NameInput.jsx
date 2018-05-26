//@flow
import React from 'react'
import {Input} from './Input'
import {capitalize} from 'lodash/string'

type InputProps = {
  name: string,
  label?: string,
  placeholder?: string
}

export const NameInput = (props: InputProps) =>
  <Input {...props} format={value => capitalize(value)} />
