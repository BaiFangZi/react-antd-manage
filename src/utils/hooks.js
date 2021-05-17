import { useState, useEffect, useCallback } from 'react'
// import { queryTableData } from '@/api/table'

// export const useRequest = (request, config = {}) => {
//   const [result, setResult] = useState({})
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')
//   useEffect(() => {
//     setLoading(true)
//     request({ ...config })
//       .then((res) => {
//         setResult(res.data)
//         console.log(2)
//       })
//       .catch((error) => {
//         setError(error)
//       })
//       .finally(() => setLoading(false))
//   }, [])
//   // console.log(3)
//   return {
//     result,
//     loading,
//     error,
//   }
// }

// export const useEchart = (dom, config) => {}
