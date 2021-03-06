var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./ListItem.jsx');

//var ingredients = [{"id":1, "text":"ham"},{"id":2,"text":"cheese"},{"id":3, "text":"potato"}];

var List = createReactClass({
  render: function(){
    var createItem = function(text, index){
      return <ListItem key={index + text} text={text} />;
    };
    return (<ul>{this.props.items.map(createItem)}</ul>);
  }
});

module.exports = List;
