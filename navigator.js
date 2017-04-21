var Navigator = {
	actions: [],
	homeAction: undefined,
	to: function(action) {
		if (typeof action != "function") {
			console.error("Navigator.to(action): first argument isn't a function")
		} else {
			action(arguments[1], arguments[2], arguments[3]);
			this.actions.push(arguments);
		}
	},
	back: function() {
		if (this.actions.length < 2) {
			console.warn("Navigator.back(): isn't possible going back");
			return;
		}
		var currentAction = this.actions.pop();
		var backAction = this.actions[this.actions.length - 1];
		backAction[0](backAction[1], backAction[2], backAction[3]);
	},
	setHome: function() {
		this.homeAction = arguments;
	},
	home: function() {
		this.actions = [];
		if (typeof this.homeAction == "undefined" || typeof this.homeAction[0] != "function") {
			console.error("Navigator.home(): home actions hasn't set");
			return;
		}
		Navigator.to(this.homeAction[0], this.homeAction[1], this.homeAction[2], this.homeAction[3]);
	},
};
