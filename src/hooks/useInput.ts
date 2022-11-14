import React, { useState, useEffect, useCallback } from 'react'

const useInput = ({ initialState, reset, validator }: { initialState: any; reset?: boolean; validator?: any }) => {
  const state = initialState === null ? '' : initialState
  const [value, setValue] = useState(state)
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {
        target: { value },
      } = e
      let willUpdate = true
      if (typeof validator === 'function') {
        willUpdate = validator(value)
      }
      if (willUpdate) {
        setValue(value.replace(/(^0+)/, '')) //첫째자리 0 제거
      }
    },
    [value],
  )
  useEffect(() => {
    setValue(state)
  }, [state])
  useEffect(() => {
    setValue(state)
  }, [reset])
  return { value, onChange }
}

export default useInput
