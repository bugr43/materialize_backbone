var CommentaryModel = Backbone.Model.extend({
    defaults: {
        nameuser: "",
        commentary: ""
    }
});

var CommentaryView = Backbone.View.extend({
    clasName: "com",

    events: {
        "click .bt": "renderCommentary"
    },

    template: _.template($('#commentaryBlock').html()),

    initialize: function(){
        this.render();
        this.listenTo(this.model, "change", this.render);
    },

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    },

    renderCommentary: function(){
        this.render();
    }

});

var commentary = new CommentaryModel();
var viewCommentary = new CommentaryView({model: commentary});

commentary.on('change:nameuser', function(model, nameuser){
    model.set(nameuser, $('.nameuser').val());
});
commentary.on('change:commentary', function(model, commentary){
    model.set(commentary, $('.commentary').val());});

//
//$('.bt').on('click', '.bt', function(){
//    viewCommentary.render();
//});
$('body').append(viewCommentary.el);