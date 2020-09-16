const {readFileSync, writeFileSync} = require('fs');

const appVer = '0.0.27'
const versions = [
	{
		packages: [
			"@ngx-k-panel/core",
			"@ngx-k-panel/auth",
			"@ngx-k-panel/dashboard",
			"@ngx-k-panel/data-table",
			"@ngx-k-panel/entity-manager",
			"@ngx-k-panel/form-builder"
		],
		version: "^" + appVer
	},
	{
		packages: [
			"@ngx-k/components",
			"@ngx-k/components-bootstrap",
			"@ngx-k/core",
			"@ngx-k/auth",
			"@ngx-k/form-builder",
			"@ngx-k/form-builder-bootstrap",
		],
		version: "^0.0.40"
	},
	{
		packages: ["@angular/cdk"],
		version: "^10.2.0"
	},
	{
		packages: ["@angular/common", "@angular/core", "@angular/animations", "@angular/router"],
		version: "^10.1.0"
	}
]

const getLibraries = () => {
	const items = [];
	const data = JSON.parse(readFileSync('angular.json')).projects;
	Object.values(data).forEach((value, key) => {
		if (value.projectType == 'library')
			items.push(value.root);
	})
	return items;
}
const getPackageVersion = (name) => {
	for (let version of versions) {
		if (version.packages.indexOf(name) >= 0)
			return version.version;
	}
	return null;
}
const updatePackageJson = (path) => {
	const data = JSON.parse(readFileSync(path + '/package.json'));

	data.version = appVer;
	for (let key of Object.keys(data.peerDependencies)) {
		const ver = getPackageVersion(key);
		if (ver)
			data.peerDependencies[key] = ver;
	}
	writeFileSync(path + '/package.json', JSON.stringify(data, '\t', 4))
}

for (let library of getLibraries()) {
	updatePackageJson(library)
}
console.log("packages updated ...")
