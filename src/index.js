
/**
 * Assure that the provided function, `fn`,
 * is executed only when its wrapping function is called on a target that matches the `selector`.
 *
 * @name delegate
 * @param {function} fn
 * @param {string} selector
 * 
 * @returns {function}
 */
const delegate = (fn, selector) => {
  return function handler(event) {
    const matchingEl = matches(event.target, selector, this);
    if(matchingEl != null){
      fn.call(matchingEl, event);
    }
  };
};

export default delegate;

/**
 * @name matches
 * @private
 */
const matches = (target, selector, boundElement) => {
  if (target === boundElement){
    return null;
  }
  if (target.matches(selector)){
    return target;
  }
  if (target.parentNode){
    return matches(target.parentNode, selector, boundElement);
  }
  return null;
};
