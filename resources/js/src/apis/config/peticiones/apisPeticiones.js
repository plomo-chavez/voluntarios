import config from './apisPeticionesConfig'
export default class apiPeticiones {
  // Will be used by this service for making API calls
  axiosIns = null

  // apisConfig <= Will be used by this service
  apisConfig = { ...config }
  constructor(axiosIns, jwtOverrideConfig) {
    this.axiosIns = axiosIns
    this.apisConfig = { ...this.apisConfig, ...jwtOverrideConfig }
  }
  getUsuarios(...args) {
    return this.axiosIns.post(this.apisConfig.apiUsuarios, ...args)
  }
  adminUsuarios(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminUsuarios, ...args)
  }
}
