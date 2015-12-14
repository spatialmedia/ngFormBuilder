app.config([
  'formioComponentsProvider',
  function(formioComponentsProvider) {
    formioComponentsProvider.register('table', {
      fbtemplate: 'formio/formbuilder/table.html',
      documentation: 'http://help.form.io/userguide/#table',
      noDndOverlay: true,
      confirmRemove: true,
      views: [
        {
          name: 'Display',
          template: 'formio/components/table/display.html'
        }
      ]
    });
  }
]);
app.run([
  '$templateCache',
  function($templateCache) {
    var tableClasses = "{'table-striped': component.striped, ";
    tableClasses += "'table-bordered': component.bordered, ";
    tableClasses += "'table-hover': component.hover, ";
    tableClasses += "'table-condensed': component.condensed}";
    $templateCache.put('formio/formbuilder/table.html',
      '<div class="table-responsive">' +
        '<table ng-class="' + tableClasses + '" class="table">' +
          '<thead ng-if="component.header.length"><tr>' +
            '<th ng-repeat="header in component.header">{{ header }}</th>' +
          '</tr></thead>' +
          '<tbody>' +
            '<tr ng-repeat="row in component.rows">' +
              '<td ng-repeat="component in row">' +
                '<form-builder-list></form-builder-list>' +
              '</td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
      '</div>'
    );

    $templateCache.put('formio/components/table/display.html',
      '<ng-form>' +
        '<form-builder-table></form-builder-table>' +
        '<form-builder-option property="striped"></form-builder-option>' +
        '<form-builder-option property="bordered"></form-builder-option>' +
        '<form-builder-option property="hover"></form-builder-option>' +
        '<form-builder-option property="condensed"></form-builder-option>' +
      '</ng-form>'
    );
  }
]);
