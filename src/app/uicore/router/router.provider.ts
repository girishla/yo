'use strict';


/* @ngInject */
export default    function routeProvider() {
  // Provider
  var settings = {
    docTitle: '',
    separator: ''
  };

  this.setTitle = setTitle;
  this.setSeparator = setSeparator;
  this.$get = routeHelper;

  function setTitle(title) {
    settings.docTitle = title;
  }

  function setSeparator(separator) {
    settings.separator = separator;
  }

  // Service
  function routeHelper() {
    return {
      title: settings.docTitle,
      separator: settings.separator
    };
  }
}
