/**
 * Created by gxx on 2017/5/14.
 */
import $http from './services'
import api from './api/'

export const test = ()=>{
    return $http('get',api.test)
}
