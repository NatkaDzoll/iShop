
var CosmeticsList = React.createClass({
    displayName: 'CosmeticsList',
    propTypes: {
        items:  React.PropTypes.arrayOf(
            React.PropTypes.shape({
                key: React.PropTypes.number.isRequired,
                itemName: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                count: React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,
            }),
        ),
    },

    render: function(){
        var itemList = [];
        this.props.items.forEach(function(el){
            var itemStr = React.createElement("tr", {key: el.key},
                React.createElement("td", {className: CosmeticsList}, el.key),
                React.createElement("td", {className: CosmeticsList}, el.itemName),
                React.createElement("td", {className: CosmeticsList}, 
                    React.createElement("img", {className: CosmeticsList, src: el.url}),
                ),
                React.createElement("td", {className: CosmeticsList}, el.price),
                React.createElement("td", {className: CosmeticsList}, el.count),
            )
            itemList.push(itemStr);
        });
        return React.createElement("table", null,
            React.createElement("caption", null, 'Store of cosmetics'),
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("th", null, '№'),
                    React.createElement("th", null, 'Name'),
                    React.createElement("th", null, 'Photo'),
                    React.createElement("th", null, 'Price, $'),
                    React.createElement("th", null, 'Count in the store'),),
                itemList
            )
        )
    }
})
