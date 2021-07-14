module.exports = function(RED) {
	function LowerCaseNode(config){
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input',function(msg){
//			msg.payload = msg.payload.toLowerCase();
			msg.payload = msg.payload + " text added"
			node.send(msg);
		});
	}
	RED.nodes.registerType("lower-case",LowerCaseNode)
}
