import path from 'path'
import { type BuildPaths } from '../build/types/config'
import type webpack from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { type RuleSetRule } from 'webpack'

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')

  }
  config.module.rules = config.module.rules.map((rule: RuleSetRule): RuleSetRule => {
    if (/svg/.test(rule.test as any)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules.push(buildCssLoader(true))
  return config
}
