//@flow
import React from 'react'
import './SubmitButton.scss'

type Props = {
  disabled?: boolean,
  progress?: boolean,
  children: Function|string
}

export const SubmitButton = ({disabled = false, progress = false, children}: Props) =>
  <button type="submit" disabled={disabled}
    className={`SubmitButton btn btn-lg ${progress ? 'progress-bar-striped progress-bar-animated' : ''}`}>{children}
  </button>
