import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_MOVIES } from '../../gqlOperation/mutation'
const ADDMOVIES = () => {
     const [formData, setFormData] = useState({})
     const [addMovie, { data, loading, error }] = useMutation(ADD_MOVIES);

     if (loading) return <h1>Loading</h1>
     console.log({ data, loading, error })
     const handleChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value
          })
     }
     const handleSubmit = (e) => {
          e.preventDefault()
          console.log({ ...formData })

          addMovie({
               variables: { ...formData }
          })
     }

     return (
          <div className="container my-container">
               {
                    error &&
                    <div className="red card-panel">{error.message}</div>
               }

               {
                    data && data.user &&
                    <div className="green card-panel">{data.user.firstName} is SignedUp. You can login now!</div>
               }
               <h5>Signup!!</h5>
               <form onSubmit={handleSubmit}>
                    <input
                         type="text"
                         placeholder="First Name"
                         name="name"
                         onChange={handleChange}
                         required
                    /><br />
                    <input
                         type="text"
                         placeholder="producer"
                         name="producer"
                         onChange={handleChange}
                         required
                    /><br />
                    <input
                         type="number"
                         placeholder="rating"
                         name="rating"
                         onChange={handleChange}
                         required
                    /><br />
                    <button type="submit">Submit</button>
               </form>
          </div>
     )
}
export default ADDMOVIES;