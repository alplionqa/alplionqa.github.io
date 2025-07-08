/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            instagram
            email
            medium
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="https://avatars.githubusercontent.com/u/15653983?v=4"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          <strong>{author.name}</strong> <br />
          {author?.summary || null}
          {` `}
          <br />
          <a href={`mailto:${social?.email || ``}`}>Send me an email</a>
          {` | `}
          <a href={`https://instagram.com/${social?.instagram || ``}`}>
            Follow me on Instagram
          </a>
          {` | `}
          <a href={`https://medium.com/${social?.medium || ``}`}>Follow me on Medium</a>
        </p>
      )}
    </div>
  )
}

export default Bio
