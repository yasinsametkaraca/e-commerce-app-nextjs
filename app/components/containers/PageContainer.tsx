import React from 'react'

const PageContainer = ({children}: {children: React.ReactNode}) => {

    return (
        <div className="px-3 md:px-10 my-3 md:my-10">{children}</div>
    )
}
export default PageContainer
