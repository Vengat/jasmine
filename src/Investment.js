function Investment(params) {
	var params = params || {};
	this.stock = params.stock;
	this.shares = params.shares;
	this.sharePrice = params.sharePrice;
	this.cost = params.sharePrice * params.shares;
};

Investment.prototype = {

	roi : function() {
		return (this.stock.sharePrice - this.sharePrice)/this.sharePrice;
	},

	isGood : function() {
        return this.roi() > 0;
        //return false;
	}
};

