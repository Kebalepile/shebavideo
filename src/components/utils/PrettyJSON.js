

/**
 * 
 * @param {object} object 
 * @param {*} space 
 */
function PrettyJSON(object, space = 5) {
    return JSON.stringify(object, null, space)
}
export default PrettyJSON