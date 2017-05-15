/**
 * Created by gxx on 2017/5/14.
 */
/**
 * 获取location search参数
 * @param param key值
 * @returns {null} value值
 */
const get_location_params = param=>{
    let reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
};


export {
    get_location_params
}
