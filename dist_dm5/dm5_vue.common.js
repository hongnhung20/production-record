/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=2f84ed45&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('HelloWorld')], 1);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=4d1d14be&
var HelloWorldvue_type_template_id_4d1d14be_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "production"
  }, [_c('p', {
    staticClass: "mixer",
    staticStyle: {
      "color": "brown",
      "background-color": "thistle",
      "width": "auto",
      "margin-left": "25px"
    }
  }, [_vm._v(" Mixer recorder ")]), _c('p', {
    staticClass: "please",
    staticStyle: {
      "color": "brown",
      "background-color": "silver",
      "width": "auto"
    }
  }, [_vm._v(" Please keep the record paper tidy ")]), _c('label', [_vm._v("Search by Sugar Box:")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters,
      expression: "filters"
    }],
    attrs: {
      "id": "sugarbox-filter"
    },
    domProps: {
      "value": _vm.filters
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.filters = $event.target.value;
      }
    }
  }), _c('button', {
    attrs: {
      "id": "button"
    },
    on: {
      "click": _vm.filterBySugarBox
    }
  }, [_vm._v("filter")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedTime,
      expression: "selectedTime"
    }],
    attrs: {
      "id": "sugarbox-filter"
    },
    domProps: {
      "value": _vm.selectedTime
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.selectedTime = $event.target.value;
      }
    }
  }), _c('label', [_vm._v("Search by savour:")]), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedSavour,
      expression: "selectedSavour"
    }],
    attrs: {
      "id": "savour-filter"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedSavour = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("ALL")]), _c('option', {
    attrs: {
      "value": "original"
    }
  }, [_vm._v("Original")]), _c('option', {
    attrs: {
      "value": "sugarfree"
    }
  }, [_vm._v("Sugar Free")]), _c('option', {
    attrs: {
      "value": "blacksesame"
    }
  }, [_vm._v("Black Sesame")]), _c('option', {
    attrs: {
      "value": "lowsugar"
    }
  }, [_vm._v("Low Sugar")])]), _c('button', {
    attrs: {
      "id": "button"
    },
    on: {
      "click": _vm.filterSavour
    }
  }, [_vm._v("filter")]), _c('button', {
    staticClass: "btnExcel",
    on: {
      "click": function ($event) {
        return _vm.exportToCsv('myTable.csv', _vm.data);
      }
    }
  }, [_vm._v(" Export to Excel ")]), _c('ul', {
    staticClass: "pagination"
  }, [_c('table', {
    attrs: {
      "id": "customers"
    }
  }, [_vm._m(0), _c('tbody', _vm._l(_vm.UpdatedTable, function (post, index) {
    return _c('tr', {
      key: post.id
    }, [_c('td', [_vm._v(_vm._s(index + 1))]), _c('td', [_vm._v(" " + _vm._s(new Date(post.Time).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    })) + " ")]), _vm._l(post.Capacity, function (post2) {
      return _c('td', {
        key: post2.id
      }, [_vm._v(" " + _vm._s(post2.value) + " ")]);
    }), _c('td', [_vm._v(" " + _vm._s(post.soaker) + " ")]), _c('td', [_vm._v(_vm._s(post.Sugarbox))]), _c('td', [_vm._v(_vm._s(post.savour[0].value))]), _c('td', [_vm._v(_vm._s(post.discharge))]), _c('td', [_vm._v(" " + _vm._s(post.pureebrix) + " ")]), _c('td', [_vm._v(_vm._s(post.cylinder))]), _c('td', [_vm._v(_vm._s(post.Finished))]), _c('td', [_vm._v(_vm._s(post.Productbriz))]), _c('td', [_vm._v(_vm._s(post.Colleagues))]), _c('td', [_vm._v(_vm._s(post.Remark))]), _c('td', [_c('button', {
      attrs: {
        "id": "button"
      },
      on: {
        "click": function ($event) {
          return _vm.editRow(post._id);
        }
      }
    }, [_vm._v("Edit")]), _vm._v("   "), _c('button', {
      attrs: {
        "id": "button"
      },
      on: {
        "click": function ($event) {
          return _vm.requestApiSoftDeleteDoc('SoftDeleteDoc', post._id);
        }
      }
    }, [_vm._v(" Delete ")])])], 2);
  }), 0)]), _c('li', {
    staticClass: "pagination_item"
  }, [_c('button', {
    attrs: {
      "id": "button",
      "disabled": _vm.isInFirstPage
    },
    on: {
      "click": _vm.onClickFirstPage
    }
  }, [_vm._v(" First ")])]), _c('li', {
    staticClass: "pagination_item"
  }, [_c('button', {
    attrs: {
      "id": "button",
      "disabled": _vm.isInFirstPage
    },
    on: {
      "click": _vm.onClickPreviousPage
    }
  }, [_vm._v(" Previous ")])]), _vm._l(_vm.pages, function (page) {
    return _c('li', {
      key: page,
      staticClass: "pagination_item"
    }, [_c('button', {
      class: {
        active: _vm.isPageActive(page)
      },
      attrs: {
        "id": "button",
        "disabled": page.isDisabled
      },
      on: {
        "click": function ($event) {
          return _vm.onClickPage(page);
        }
      }
    }, [_vm._v(" " + _vm._s(page) + " ")])]);
  }), _c('li', {
    staticClass: "pagination_item"
  }, [_c('button', {
    attrs: {
      "id": "button",
      "disabled": _vm.isInLastPage
    },
    on: {
      "click": _vm.onClickNextPage
    }
  }, [_vm._v(" Next ")])]), _c('li', {
    staticClass: "pagination_item"
  }, [_c('button', {
    attrs: {
      "id": "button",
      "disabled": _vm.isInLastPage
    },
    on: {
      "click": _vm.onClickLastPage
    }
  }, [_vm._v(" Last ")])])], 2), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.date,
      expression: "date"
    }],
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.date
    },
    on: {
      "change": _vm.updateDate,
      "click": _vm.filterDate,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.date = $event.target.value;
      }
    }
  }), _c('p', [_vm._v("date: " + _vm._s(_vm.formatDate))])])]);
};
var HelloWorldvue_type_template_id_4d1d14be_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('tr', {
    staticClass: "title"
  }, [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("BoxID")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Sauce cooking time")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Capacity 4L bag")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Bean soaker tank number")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Sugar box number")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Savour")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Cylinder discharge temperature")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Puree brix")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Sugar cylinder temperature")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Finished product storage cylinder temperature")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Product brix")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Colleagues record")]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Remark")]), _c('th')]);
}];

;// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=template&id=4d1d14be&

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=js&

/* harmony default export */ var HelloWorldvue_type_script_lang_js_ = ({
  setup() {
    const date = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(new Date());
    function updateDate(event) {
      date.value = new Date(event.target.value);
    }
    const formatDate = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      };
      return date.value.toLocaleDateString("en-GB", options).split("/").join("/");
    });
    return {
      date,
      updateDate,
      formatDate
    };
  },
  data() {
    return {
      currentPage: 1,
      maxVisibleButtons: 5,
      perPage: 10,
      data_table: [],
      currentPageCode: "production",
      data: [],
      filters: "",
      dataFilter: [],
      selectedSavour: "",
      selectedCapacity: "",
      selectedTime: "",
      selecteddate: "",
      dataTime: []
    };
  },
  mounted() {
    this.requestApiGetDocs("GetDocs");
  },
  computed: {
    displayedItems() {
      let result = this.data_table.filter(item => item.Ng_SysIsDeleted !== true);
      console.log(result);
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return result.slice(start, end);
    },
    UpdatedTable() {
      if (this.dataFilter !== undefined && this.dataFilter !== null && this.dataFilter.length >= 1) {
        console.log(1);
        return this.dataFilter;
      } else {
        console.log("test", this.displayedItems);
        return this.displayedItems;
      }
    },
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.pages) {
        return this.pages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      let result = this.data_table.filter(item => item.Ng_SysIsDeleted !== true);
      return Math.ceil(result.length / this.perPage);
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.pages;
    }
  },
  methods: {
    requestApiGetDocs: function (api) {
      var requestPara = {
        PageCode: this.currentPageCode,
        Size: 1000,
        Index: 0,
        Offset: 0
      };
      this.callApi(api, requestPara).then(response => {
        this.data_table = response?.data?.items;
      });
    },
    requestApiSoftDeleteDoc: function (api, id) {
      var requestPara = {
        PageCode: this.currentPageCode,
        DocId: id
      };
      this.callApi(api, requestPara).then(data => {
        var info = data;
        console.log(info);
      });
      this.requestApiGetDocs("GetDocs");
    },
    filterBySugarBox() {
      if (this.filters === "") {
        return this.dataFilter = this.displayedItems;
        //console.log("test", this.displayedItems);
      } else {
        return this.dataFilter = this.data_table.filter(item => parseInt(item.Sugarbox) === parseInt(this.filters));
      }
    },
    filterSavour() {
      if (this.selectedSavour === "") {
        return this.dataFilter = this.displayedItems;
        //console.log("test", this.displayedItems);
      } else {
        this.dataFilter = this.displayedItems.filter(item => item.savour[0].key === this.selectedSavour);
        return this.dataTime = this.dataFilter.filter(item => item.Time = this.selectedTime);
      }
    },
    filterDate() {
      if (this.formatDate === "") {
        return this.dataFilter = this.displayedItems;
        //console.log("test", this.displayedItems);
      } else {
        return this.dataFilter = this.data_table.filter(item => item.Time === this.formatDate);
      }
    },
    editRow: function (id) {
      location.href = `https://app-dev.digiqal.com/isvtrials/vtl8/form/${this.currentPageCode}/Edit/${id}?env=dev`;
    },
    onPageChange(page) {
      this.currentPage = page;
    },
    onClickFirstPage() {
      this.onPageChange(1);
    },
    onClickPreviousPage() {
      this.onPageChange(this.currentPage - 1);
    },
    onClickPage(page) {
      this.onPageChange(page);
    },
    onClickNextPage() {
      this.onPageChange(this.currentPage + 1);
    },
    onClickLastPage() {
      this.onPageChange(this.pages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
    //Hàm xuất dữ liệu ra file CSV
    exportToCsv() {
      console.log(1);
      this.data = this.UpdatedTable.map(item => {
        return {
          Time: new Date(item.Time).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
          }),
          Capacity: item.Capacity[0].value,
          soaker: item.soaker,
          Sugarbox: item.Sugarbox,
          savour: item.savour[0].value,
          discharge: item.discharge,
          pureebrix: item.pureebrix,
          cylinder: item.cylinder,
          Finished: item.Finished,
          Productbriz: item.Productbriz,
          Colleagues: item.Colleagues,
          Remark: item.Remark
        };
      });
      let csvContent = "data:text/csv;charset=utf-8,";
      let rows = this.data;
      if (!Array.isArray(rows)) {
        console.error("Invalid data type for rows");
        return;
      }

      // Get the header row
      let headerRow = Object.keys(rows[0]).join(",");

      // Add the header row to the CSV content
      csvContent += headerRow + "\r\n";

      // Add each row of data to the CSV content
      rows.forEach(row => {
        let values = Object.values(row).join(",");
        csvContent += values + "\r\n";
      });

      // Download the CSV file
      let encodedUri = encodeURI(csvContent);
      let link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "data.xlsx");
      document.body.appendChild(link); // Required for FF
      link.click();
    }

    //Sử dụng hàm xuất dữ liệu
  }
});
;// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HelloWorldvue_type_script_lang_js_ = (HelloWorldvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=style&index=0&id=4d1d14be&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=style&index=0&id=4d1d14be&prod&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/HelloWorld.vue



;


/* normalize component */

var component = normalizeComponent(
  components_HelloWorldvue_type_script_lang_js_,
  HelloWorldvue_type_template_id_4d1d14be_render,
  HelloWorldvue_type_template_id_4d1d14be_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HelloWorld = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: "App",
  components: {
    HelloWorld: HelloWorld
  }
});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=2f84ed45&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=2f84ed45&prod&lang=css&

;// CONCATENATED MODULE: ./src/App.vue



;


/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (App);


module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=dm5_vue.common.js.map