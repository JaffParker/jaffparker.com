//@flow
import React from 'react'
import {Input} from './Input'

type EmailInputProps = {
  name: string,
  label?: string,
  placeholder?: string,
}

export const EmailInput = (props: EmailInputProps) =>
  <Input {...props} />
