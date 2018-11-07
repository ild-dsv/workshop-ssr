import React from 'react'
import flushChunks from 'webpack-flush-chunks'
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet'
import { flushChunkNames } from 'react-universal-component/server'

export default ({ clientStats }) => (req, res) => {
  const lang = 'en'
  const context = {}

  const app = renderToString(
    <div>Wellcome to SSR!!</div>
  )

  const helmet = Helmet.renderStatic()

  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames(),
  })

  const status = context.status || 200

  if (status === 400) {
    console.error('Error 404: ', req.originalUrl)
  }

  if (context.url) {
    const redirectStatus = context.status || 302
    res.redirect(redirectStatus, context.url)
    return
  }

  res.setHeader('Cache-Control', 'public, max-age=2628000')

  res
    .status(status)
    .send(
      `<!doctype html><html lang=${lang}><head>${styles}${helmet.title}${helmet.meta.toString()}${helmet.link.toString()}</head><body><div id="react-root">${app}</div>${js}${cssHash}</body></html>`
    )
}
