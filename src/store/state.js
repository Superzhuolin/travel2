// 使用localStorage外面要包裹try catch
//防止用户关闭本地存储功能或者使用隐身模式,浏览器会抛出异常,使代码无法运行
let defaultCity = "上海"
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
    city: defaultCity
}