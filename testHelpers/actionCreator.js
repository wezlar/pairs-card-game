// @ts-check

/**
 * @typedef Action
 * @property {object} payload
 * @property {object} type
 * @property {object} meta
 *
 * Reusable way to create actions, pass in the type when defining the action and then the next arguments become the payload and meta props respectively
 * @param  {string} type A string constant that is matched in a reducer to update state
 * @name payload - An object that is added to a reducer
 * @name meta - An object containing data NOT added to the reducer
 * @returns {(payload: Object, meta: Object={}) => Action}
 */

const actionCreator = (type) => (payload, meta = {}) => ({
  type,
  payload,
  meta,
})

export default actionCreator
