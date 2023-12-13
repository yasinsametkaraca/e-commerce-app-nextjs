import React from 'react'

const AuthContainer = ({children}: {children: React.ReactNode}) => {

    return (
        <div className="absolute top-0 right-0 left-0 bottom-0 h-full w-full flex items-center justify-center">{children}</div>
    )
}
export default AuthContainer
