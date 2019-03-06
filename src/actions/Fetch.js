import * as deepmerge from 'deepmerge'
import Axios from '../orm/axios'
import Context from '../common/context'
import Action from './Action'
import { ModelConfig } from '../support/interfaces'

export default class Fetch extends Action {
  /**
   * Call $fetch method
   * @param {object} store
   * @param {object} params
   */
  static async call({ state, commit }, params = {}) {
    const context = Context.getInstance()
    const model = context.getModelFromState(state)
    // Merge default http settings
    ModelConfig.http = deepmerge.all([{}, ModelConfig.http, context.options.http])

    // Get HTTPConf for this model
    const HttpConf = context.getHttpConfigForModel(model.entity)
    const endpoint = Action.transformParams('$fetch', HttpConf, params)

    // New axios instance (with settings)
    const axios = new Axios(ModelConfig.http)
    const request = axios.get(endpoint)

    this.onRequest(commit)

    request
      .then(data => this.onSuccess(commit, model, data))
      .catch(error => this.onError(commit, error))

    return request
  }

  /**
   * On Request Method
   * @param {object} commit
   */
  static onRequest(commit) {
    commit('onRequest')
  }

  /**
   * On Successful Request Method
   * NOTE: At this point the `data` property is just the raw response from the
   * server (other axios response properties have been stripped).
   * @param {object} commit
   * @param {object} model
   * @param {object} data
   */
  static onSuccess(commit, model, data) {
    commit('onSuccess')
    model.insertOrUpdate({data})
  }

  /**
   * On Failed Request Method
   * @param {object} commit
   * @param {object} error
   */
  static onError(commit, error) {
    commit('onError', error)
  }
}
