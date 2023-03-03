import { createServer } from 'http'
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { renderSpladeApp, SpladePlugin, startServer } from 'splade'

startServer(createServer, renderToString, (props) => {
  return createSSRApp({
    render: renderSpladeApp(props),
  }).use(SpladePlugin)
})
