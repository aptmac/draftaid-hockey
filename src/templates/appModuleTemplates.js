angular.module('apf.appModule').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/app/directives/lists/list-columns.html',
    "<div class=\"apf-list-row\"><div ng-repeat=\"column in columns track by $index\"><div ng-switch=\"\" on=\"column.columnType\"><div class=\"apf-column\" ng-class=\"column.columnClass\" style=\"{{getColumnStyle(column, $index)}}\" ng-switch-default=\"\"><span class=\"apf-label\">{{item[column.field]}}</span></div><div class=\"apf-column\" ng-class=\"column.columnClass\" style=\"{{getColumnStyle(column, $index)}}\" ng-switch-when=\"titleLabel\"><span class=\"apf-label apf-title\">{{column.title}}</span> <span class=\"apf-label\">{{item[column.field]}}</span></div><div class=\"apf-column\" ng-class=\"column.columnClass\" style=\"{{getColumnStyle(column, $index)}}\" ng-switch-when=\"objectLabel\"><span ng-if=\"item[column.iconField]\" class=\"pficon {{item[column.iconField]}} apf-icon-label\"></span> <img ng-if=\"item[column.iconImage]\" ng-src=\"{{item[column.iconImage]}}\" alt=\"\" class=\"apf-column-image\"> <span class=\"apf-label\">{{item[column.field]}}</span></div><div class=\"apf-column usage-column\" ng-class=\"column.columnClass\" style=\"{{getColumnStyle(column, $index)}}\" ng-switch-when=\"usage\"><div><span class=\"apf-label apf-title\" style=\"width: {{column.titleWidth}}px\">{{column.usedLabel}}</span> <span class=\"apf-label apf-value\">{{item[column.usedDataField].used}}</span></div><div><span class=\"apf-label apf-title\" style=\"width: {{column.titleWidth}}px\">{{column.totalLabel}}</span> <span class=\"apf-label apf-value\">{{item[column.usedDataField].total}}</span></div></div><div class=\"apf-column label-value-column\" ng-class=\"column.columnClass\" style=\"{{getColumnStyle(column, $index)}}\" ng-switch-when=\"labelValues\"><div ng-repeat=\"field in column.fields\" class=\"label-value-container\"><span class=\"apf-label apf-title\" style=\"width: {{column.titleWidth}}px\">{{field.label}}</span> <span class=\"apf-label apf-value\">{{item[field.value]}}</span></div></div><div class=\"apf-column apf-object-column\" ng-class=\"column.columnClass\" style=\"{{getColumnStyle(column, $index)}}\" ng-switch-when=\"objectCount\"><span class=\"apf-icon-label pficon\" ng-class=\"item[column.infoField].iconClass\"></span> <span class=\"apf-icon-label apf-value\">{{item[column.infoField].count}}</span> <span class=\"apf-label\">{{item[column.infoField].name}}</span></div></div></div></div>"
  );


  $templateCache.put('src/app/directives/lists/object-list.html',
    "<div pf-list-view=\"\" ng-class=\"listClass\" id=\"{{listId}}\" config=\"listConfig\" items=\"items\"><div list-columns=\"\" columns=\"config.columns\" item=\"item\"></div></div>"
  );


  $templateCache.put('src/draft/draft.html',
    "<div class=\"col-xs-12\"><h1><b>Current Draft Pick:</b> {{pickNumber}}</h1></div><div class=\"col-xs-12 col-sm-6 col-md-3\"><h1>Centers:</h1><div pf-toolbar=\"\" class=\"row\" config=\"toolbarConfig\"></div><div object-list=\"\" list-class=\"centers-list row\" list-id=\"centersList\" list-config=\"listConfig\" items=\"centers\" columns=\"columns\"></div></div><div class=\"col-xs-12 col-sm-6 col-md-3\"><h1>Wings:</h1><div pf-toolbar=\"\" class=\"row\" config=\"toolbarConfig\"></div><div object-list=\"\" list-class=\"wings-list row\" list-id=\"wingsList\" list-config=\"listConfig\" items=\"wings\" columns=\"columns\"></div></div><div class=\"col-xs-12col-sm-6 col-md-3\"><h1>Defence:</h1><div pf-toolbar=\"\" class=\"row\" config=\"toolbarConfig\"></div><div object-list=\"\" list-class=\"defence-list row\" list-id=\"defenceList\" list-config=\"listConfig\" items=\"defence\" columns=\"columns\"></div></div><div class=\"col-xs-12 col-sm-6 col-md-3\"><h1>Goalies:</h1><div pf-toolbar=\"\" class=\"row\" config=\"toolbarConfig\"></div><div object-list=\"\" list-class=\"goalies-list row\" list-id=\"goaliesList\" list-config=\"listConfig\" items=\"goalies\" columns=\"columns\"></div></div>"
  );


  $templateCache.put('src/help/help.html',
    "<div class=\"blank-slate-pf\" id=\"\"><div class=\"blank-slate-pf-icon\"><span class=\"fa fa-question-circle\"></span></div><h1>Help</h1><p align=\"left\">The <b>'Draft'</b> page of this web-application provides tables for each of the draftable positions for fantasy hockey: \"Left Wing, Center, Right Wing, Defense, Goalie\". Using ranking information, it organizes each of the players within a certain position, such that you can view the best available options at any given point in time. Clicking on a player in a table will remove them (i.e., they've been drafted), and they will join the pool of players who have been drafted in the 'drafted' table.</p><p align=\"left\">The <b>'Your Team'</b> page is incomplete, but will allow you to see your team as you are drafting, and will supply charts showing you what positions you have filled and what positions you should focus on.</p><p><b>Learn more about Draft Aid: Fantasy Hockey by visiting <a href=\"https://github.com/aptmac/draftaid-hockey\">the project on GitHub</a>.</b></p><p>I welcome you to modify the source code to your liking, and if you want to make a fix/change to this application, feel free to open a Pull Request (or post an issue on the GitHub page).</p><p>Special shoutout to the Angular-PatternFly team for creating the seed project that this website was based on, you da real MVP.</p></div>"
  );


  $templateCache.put('src/team/team.html',
    "<div class=\"blank-slate-pf\" id=\"\"><div class=\"blank-slate-pf-icon\"><span class=\"pficon pficon pficon-add-circle-o\"></span></div><h1>Your Team!</h1><p>This is where you'll be able to see your drafted team.</p></div>"
  );


  $templateCache.put('src/templates/404.html',
    "<div class=\"alert alert-danger\"><span class=\"pficon pficon-error-circle-o\"></span> <strong>404: Page not found</strong></div><div class=\"blank-slate-pf\" id=\"\"><div class=\"blank-slate-pf-icon\"><span class=\"fa fa-frown-o fa-lg\"></span></div><h1>404: The page you were looking for doesn't exist</h1><p>What were you doing ... ?</p></div>"
  );

}]);
