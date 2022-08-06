export default class IGamesProvider {
  constructor() {
    hasMethods(this, "get", "getById", "getBySlug")
  }

  get = async (start = null, limit = null) => { }

  getById = async (id) => { }

  getBySlug = async (slug) => { }
}

const hasMethods = function (obj, ...methods) {
  let i = 1;
  let methodName;
  while ((methodName = arguments[i++])) {
    if (!methods.includes(methodName))
      continue;

    if (typeof obj[methodName] != 'function') {
      return false;
    }

    const methodIdx = methods.indexOf(methodName)
    methods.splice(methodIdx, 1);
  }
  return methods.length === 0;
}