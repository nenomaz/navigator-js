var Navigator = {
	actions: [],
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
		backAction[0](arguments[1], arguments[2], arguments[3]);
	}
};
