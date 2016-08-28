import { provider_attributes } from './../routes.json'

export default function getCompany (company) {
  return provider_attributes[company]
}
