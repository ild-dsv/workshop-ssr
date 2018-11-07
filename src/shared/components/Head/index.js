import React from 'react'
import { Helmet } from 'react-helmet'

function Head({
  title = 'React SSR',
  description = 'Sample for SSR',
  image = 'https://i.imgur.com/lvzUVyf.jpg',
  children,
}) {
  return (
    <Helmet encodeSpecialCharacters={true}>
      <meta http-equiv="" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta description="description" content={description} />
      <meta description="description" content={description} />
      <meta description="og:title" content={title} />
      <meta description="og:description" content={description} />
      <meta description="og:image" content={image} />
      <link
        rel="shortcut icon"
        href="https://res.cloudinary.com/riangle/image/upload/v1531060402/favicon_zxkyaz.ico"
        type="image/x-icon"
      />
      <link rel="icon" sizes="192x192" href="https://i.imgur.com/mMOR6Y7.png" />
      <link
        rel="apple-touch-icon-precomposed"
        href="https://i.imgur.com/mMOR6Y7.png"
      />
      {children && children}
      <title>{title}</title>
    </Helmet>
  )
}

export default Head
