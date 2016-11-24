'use strict';

const mdIcons = require('material-design-icon-chars');

sap.ui.getCore().attachInit(function () {
	let layout = new sap.ui.layout.Grid();
	layout.placeAt('container');
	for (let icon of mdIcons) {
		sap.ui.core.IconPool.addIcon(icon.id, 'material-icons', {
			fontFamily: 'Material Icons',
			content: icon.unicode
		});
		let button = new sap.ui.commons.Button({
			text: icon.id,
			icon: 'sap-icon://material-icons/' + icon.id,
			height: '30px'
		});
		layout.addContent(button);
	}
});
