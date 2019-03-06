// import merge from 'lodash-es/merge'
import * as deepmerge from 'deepmerge'
import { VuexOrmPluginConfig } from '../support/interfaces'

export default class Context {
  /**
   * Private constructor, called by the setup method
   *
   * @constructor
   * @param {Components} components The Vuex-ORM Components collection
   * @param {Options} options The options passed to VuexORM.install
   */
  constructor(components, options) {
    this.components = components
    this.options = deepmerge.all([{}, VuexOrmPluginConfig, options])
    this.database = options.database

    if (!options.modelHttpConfigs) {
      throw new Error('At least one modelHttpConf required')
    }
    this.modelHttpConfigs = options.modelHttpConfigs

    if (!options.database) {
      throw new Error('database option is required to initialise!')
    }
  }

  /**
   * This is called only once and creates a new instance of the Context.
   * @param {Components} components The Vuex-ORM Components collection
   * @param {Options} options The options passed to VuexORM.install
   * @returns {Context}
   */
  static setup(components, options) {
    this.instance = new Context(components, options)
    return this.instance
  }

  /**
   * Get the singleton instance of the context.
   * @returns {Context}
   */
  static getInstance() {
    return this.instance
  }

  /**
   * Get Model from State
   * @param {object} state
   */
  getModelFromState(state) {
    return this.database.entities.find(({ name }) => name == state.$name).model
  }

  /**
   * Returns an HTTPConf object for a given entity name
   * @param {string} entityName
   */
  getHttpConfigForModel(entityName) {
    if (this.modelHttpConfigs.hasOwnProperty(entityName)) {
      return this.modelHttpConfigs[entityName]
    } else {
      throw new Error(`No HTTPconfig found for entity: ${entityName}`)
    }
  }
}
