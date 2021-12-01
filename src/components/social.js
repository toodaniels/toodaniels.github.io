import * as React from "react"
import { 
    FaTwitter,
    FaGithub,
    FaFacebook,
    FaLinkedin 
} from 'react-icons/fa'
import { IconContext } from "react-icons";
import { Link } from "gatsby"

const Social = ({social, user}) => {
    const social_icons = {
        twitter : {
            Component: FaTwitter,
            url: "https://twitter.com/" + user
        },
        github: {
            Component: FaGithub,
            url: "https://github.com/" + user
        },
        facebook: {
            Component: FaFacebook,
            url: "https://www.facebook.com/" + user
        },
        linkendin: {
            Component: FaLinkedin,
            url: "https://www.linkedin.com/in/" + user
        },
    }

    const Icon = ({s}) => {
        const Comp = social_icons[s].Component 

        return (
            <Comp />
        )
    } 

    return (
        <IconContext.Provider value={{ className: "media-icon" }}>
            <div>
                <Link to={social_icons[social].url}>
                    <Icon s={social} />
                </Link>
            </div>
        </IconContext.Provider>
    )
} 

export default Social