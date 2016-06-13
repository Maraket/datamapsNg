/**
 * 
 */
(function(ng) {
	"use strict";

	var _OPTIONAL_ = "=?";
	var _REQUIRED_ = "=";
	var _FUNCTION_ = "&";
	var _OPTIONAL_FUNCTION_ = "&?";
	var _UNDEFINED_ = "undefined";
	function directive(window) {
		this.restrict = "A";
		this.scope = {
			dataUrl : _OPTIONAL_+"url",
			scope : _REQUIRED_,
			setProjection : _OPTIONAL_FUNCTION_,
			projection : _OPTIONAL_,
			fills : _OPTIONAL_,
			responsive : _OPTIONAL_,
			dataType : _OPTIONAL_,
			done : _OPTIONAL_FUNCTION_,
			height : _OPTIONAL_,
			width : _OPTIONAL_,
			geographyConfig : _OPTIONAL_,
			bubblesConfig : _OPTIONAL_,
			arcConfig : _OPTIONAL_,
			data : _OPTIONAL_,
			legend : _OPTIONAL_

		};
		this.bindToController = true;
		this.controllerAs = "$dataMapsCtrl";
		this.controller = [ "$scope", "$element", controller ];
	}

	function controller(scope, element) {
		var ctrl = this;
		var mapOpt = {
			element : element[0]
		};

		for ( var key in this)
			if (this.hasOwnProperty(key) && this[key])
				mapOpt[key] = this[key];

		if (typeof mapOpt.setProjection === "function")
			mapOpt.setProjection = mapOpt.setProjection(element[0]);

		this.map = new Datamap(mapOpt);

		if (this.responsive) {
			window.addEventListener('resize', function() {
				ctrl.map.resize();
			});
		}

		if (this.legend)
			this.map.legend();

		if (this.data)
			scope.$watch("$dataMapsCtrl.data", function(newVal, oldVal) {
				ctrl.map.updateChoropleth(newVal);
			}, true);
		if (this.dataUrl) {
			var temp = this.dataUrl;
			Object.defineProperty(this, "dataUrl", {
				configurable : true,
				get : function() {
					return this._dataUrl;
				},
				set : function(val) {
					this._dataUrl = val;
					this.map.options.dataUrl = val;
					d3[this.map.options.dataType](val, function(data) {
						// In the case of csv, transform data to object
						if (ctrl.map.options.dataType === 'csv'
								&& (data && data.slice)) {
							var tmpData = {};
							for (var i = 0; i < data.length; i++) {
								tmpData[data[i].id] = data[i];
							}
							data = tmpData;
						}
						ctrl.map.updateChoropleth.call(ctrl.map, data);
					});
				}
			});
			this.datUrl = temp;
		}
	}

	ng.directive("datamap", [ "$window", function(window) {
		return new directive(window);
	} ])

})(angular.module("datamapsNg", []))