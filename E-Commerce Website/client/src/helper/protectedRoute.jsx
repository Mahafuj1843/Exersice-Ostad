import { Navigate } from "react-router-dom"
import { getToken } from "./sessionHelper"

export function ProtectedRoute(props)
{
    const { Component } = props
    if(getToken())
    {
      return (
        <div>
            <Component />
        </div>
      )
    }
    else{
      return <Navigate to='/signin'/>
    }
}