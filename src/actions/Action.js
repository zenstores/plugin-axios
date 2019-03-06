// import merge from 'lodash-es/merge'
import * as deepmerge from 'deepmerge'
import Context from '../common/context'
import { ModuleConfig, ModelConfig } from '../support/interfaces'

export default class Action {
  /**
   * Transform Module to include ModuleConfig
   * @param {object} model
   */
  static transformModule(module) {
    return deepmerge.all([{}, ModuleConfig, module])
  }

  /**
   * Transform Model to include ModelConfig
   * @param {object} model
   */
  static transformModel(model) {
    const context = Context.getInstance()
    ModelConfig.http = deepmerge.all([{}, ModelConfig.http, context.options.http])
    model.methodConf = deepmerge.all([{}, ModelConfig, model.methodConf])
    model.methodConf.http.url = model.methodConf.http.url === '/' ? `/${model.entity}` : model.methodConf.http.url

    /**
     * Add Model Interface to each model
     */
    model.getFields = () => {
      if (!model.cachedFields) {
        model.cachedFields = deepmerge.all([
          {},
          {
            $id: model.attr(undefined),
            $isUpdating: model.boolean(false),
            $updateErrors: model.attr([]),
            $isDeleting: model.boolean(false),
            $deleteErrors: model.attr([]),
          },
          model.fields()
        ])
      }

      return model.cachedFields
    }

    return model
  }

  /**
   * Transform Params and Return Endpoint
   * @param {string} type
   * @param {object} HttpConf
   * @param {object} config e.g. {params: {id:1}, query: {limit: 10, offset: 0}}
   */
  static transformParams(type, HttpConf, config = {}) {
    // e.g. endpoint = `/batch/:id/mark`
    let endpoint = `${HttpConf.http.url}${HttpConf.methods[type].http.url}`

    // Create array of matching `/:id` params from endpoint, remove `/`.
    // e.g. params = [":id"]
    let params = (endpoint.match(/(\/?)(:)([A-z]*)/gm) || []).map(param => {
      return param.replace('/', '')
    })

    // For each extracted param (e.g. `:id`) then try replace it with a value
    // from config.params.
    params.forEach(param => {
      let paramName = param.replace(':', '')
      const paramValue = paramName in config.params ? config.params[paramName] : ''
      endpoint = endpoint.replace(param, paramValue).replace('//', '/')
    })

    const context = Context.getInstance()
    let suffix = context.options.http.suffix
    if (suffix) endpoint += suffix

    // If any keys in the `config.query` dictionary then encode them correctly
    // and attach to the end of the string.
    if (config.query)
      endpoint += `?${Object.keys(config.query)
        .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(config.query[k])}`)
        .join('&')}`

    console.log(`endpoint: ${endpoint}`)
    return endpoint
  }
}
