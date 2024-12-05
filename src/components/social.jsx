import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Social = ({ icon, text, url }) => {
    return (
        <div>
            {
                url ? (
                    <a href="https://github.com/C0WAL/GW2Calc" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={icon} className="text-2xl" />
                        <span className="ml-2 font-semibold">{text} </span>
                    </a >
                ) : (
                    <>
                        <FontAwesomeIcon icon={icon} className="text-2xl" />
                        <span className="ml-2 font-semibold">{text} </span>
                    </>
                )}
        </div>
    )
}

export default Social