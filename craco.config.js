// eslint-disable-next-line no-undef
const path = require("path");

// eslint-disable-next-line no-undef
const CracoLessPlugin = require("craco-less");

// eslint-disable-next-line no-undef
const resolve = (dir) => path.resolve(__dirname, dir);

// eslint-disable-next-line no-undef
module.exports = {
	webpack: {
		// 配置路径别名
		alias: {
			"@": resolve("src")
		}
	},
	plugins: [{ plugin: CracoLessPlugin }]
};
