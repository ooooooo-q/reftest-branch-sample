var ButtonModel = Backbone.Model.extend({
	defaults:{
		word: "default"
	}
});


var ButtonView = Backbone.View.extend({
	render:function(){
		return _.template($('#button-template').html())(this.model.toJSON());
	}
});


$(function(){
	var view = new ButtonView({model: new ButtonModel});
	view.model.set({word: "diff!"});
	$(".target").append(view.render());

	document.documentElement.className = "";
});