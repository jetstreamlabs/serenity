import { trans } from 'zora-ssr'
// prettier-ignore
export const ZoraSSR = {
	install: (v, options) => v.mixin({
    methods: {
      __: (key, replace, config = options) => trans(key, replace, config),
      trans: (key, replace, config = options) => trans(key, replace, config)
    }
  })
}
