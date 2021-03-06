(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.getPage = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     * Module : kero dataTable getPage
     * Author : liuyk(liuyk@yonyou.com)
     * Date	  : 2016-08-01 14:34:01
     */

    /**
     * 获取指定索引的Page对象
     * @memberof DataTable
     * @param  {number} pageIndex 需要获取的page对应的索引
     * @return {Page|-1}           获取到的Page对象，不存在则返回-1
     * @example
     * datatable.getPage(1)
     */
    const getPage = function (pageIndex) {
        if (this.pageCache) {
            return this.cachedPages[pageIndex];
        }
        return -1;
    };

    /**
     * 获取所有的Page对象
     * @memberof DataTable
     * @return {array} 所有的Page对象
     * @example
     * datatable.getPages()
     */
    const getPages = function () {
        if (this.pageCache) {
            return this.cachedPages;
        }
        return [];
    };

    const getPageFunObj = exports.getPageFunObj = {
        getPage: getPage,
        getPages: getPages
    };
});