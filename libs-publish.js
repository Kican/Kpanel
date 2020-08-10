const {readFileSync, writeFileSync} = require('fs');
const {execSync, exec, spawnSync} = require("child_process");

const getLibraries = () => {
	const items = [];
	const data = JSON.parse(readFileSync('angular.json')).projects;
	const keys = Object.keys(data);
	Object.values(data).forEach((value, key) => {
		if (value.projectType == 'library')
			items.push({key: keys[key], value: value});
	})
	return items;
}
for (let library of getLibraries()) {
	try {
		console.log(`start building [${library.key}] ...`)
		execSync(`ng build --project ${library.key} --prod`)
		execSync(`npm i`)
		execSync(`npm publish dist/${library.key}`)
	} catch (e) {
		console.error(e);
	}
}
