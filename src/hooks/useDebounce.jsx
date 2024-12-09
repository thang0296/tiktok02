import React from 'react'
import { useState, useEffect } from 'react'
function useDebounce(value, delay) {
const [debouncedValue, setDebouncedValue] = useState(value);
useEffect(() => {
    const handler = setTimeout(()=>setDebouncedValue(value),delay)
    
},[value])
  return (
    debouncedValue
  )
}

export default useDebounce
