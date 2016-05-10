angular.module("hamburger_menu",[]).run(["$rootScope","$spMenu",function(a,b){a.$spMenu=b}]).provider("$spMenu",function()
{
	this.$get=[function(){var a={};
	return a.show=function()
	{
		var a=angular.element(document.querySelector("#mobile-nav"));
		console.log(a),a.addClass("show")},a.hide=function()
		{
			var a=angular.element(document.querySelector("#mobile-nav"));
			a.removeClass("show")},a.toggle=function()
			{
				var a=angular.element(document.querySelector("#mobile-nav"));
				a.toggleClass("show")
			},a
		}
	]
});