import React from 'react'
import Typography from '../typography'

interface Props {}

function Footer(props: Props) {
    const {} = props

    return (
        <div className='w-full text-center my-8'>
            <Typography variant='p'>@ 2023 Vladimir-Dragos Damian. All rights reserved.</Typography>
        </div>
    )
}

export default Footer
