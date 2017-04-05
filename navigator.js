var Navigator = {
	actions: [],
	to: function(action) {
		action(arguments[1], arguments[2], arguments[3]);
		arguments.shift();
		this.actions.push({
			action: action,
			'arguments': arguments
		});
	},
	back: function() {
		this.actions.pop();
		var backAction = this.actions.pop();
		backAction();
	}
};
