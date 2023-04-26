export default function mergeDeep(target, source) {
    function isObject(item) {
      return item && typeof item === 'object' && !Array.isArray(item);
    }
  
    function cloneDeep(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  
    if (isObject(source) && Object.keys(source).length === 0) {
      return cloneDeep({ ...target, ...source });
    }
  
    const output = { ...target, ...source };
  
    if (isObject(source) && isObject(target)) {
      Object.keys(source).forEach((key) => {
        if (isObject(source[key]) && key in target && isObject(target[key])) {
          output[key] = mergeDeep(target[key], source[key]);
        } else {
          output[key] = isObject(source[key]) ? cloneDeep(source[key]) : source[key];
        }
      });
    }
  
    return output;
  }