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
        global.pageMeta = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /**
     * Module : kero dataTable page meta
     * Author : liuyk(liuyk@yonyou.com)
     * Date   : 2016-08-08 09:59:01
     */

    /**
     * 设置指定行的meta信息
     * @param  {number} rowIndex  行索引
     * @param  {string} fieldName 字段名
     * @param  {string} metaName       meta名称
     * @param  {string} value meta值
     * @return {object}           meta信息
     * @example
     * page.setRowMeta(1,'field1','type','string')
     */
    const setRowMeta = function (rowIndex, fieldName, metaName, value) {
        var row = this.rows[rowIndex];
        if (row) {
            var meta = row[fieldName].meta;
            if (!meta) meta = row[fieldName].meta = {};
            meta[metaName] = value;
            if (row.status != Row.STATUS.NEW) row.setStatus(Row.STATUS.UPDATE);
        }
    };

    const pageMetaFunObj = exports.pageMetaFunObj = {
        setRowMeta: setRowMeta
    };
});