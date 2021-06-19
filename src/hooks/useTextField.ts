import { ChangeEvent, useState } from 'react'

export const useTextField = () => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValue(e.target.value)

  return { value, onChange }
}
