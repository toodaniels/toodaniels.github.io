import * as React from "react"
import { Link } from "gatsby"
import { Stack, Badge, Box } from "@chakra-ui/react"

const Job = ({
    title,
    company,
    description,
    dates, 
    technologies
}) => {
    return (
        <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
            >
            <header>
                <h2>
                <Link to={'/'} itemProp="url">
                    <span itemProp="headline">{title}</span>
                </Link>
                </h2>
                <p>{company}</p> 
                <small>{dates}</small>
            </header>
            <section>
                <p itemProp="description">
                {description}
                </p>
            </section>
            <section>
                <Stack direction="row">
                    { 
                    technologies.map((t,i) =>(
                        <Badge  variant="outline" color="blue.700" key={t+i}>
                        {t}
                        </Badge>
                    ))
                    }
                </Stack>
            </section>
        </article>
    )
}

export default Job
