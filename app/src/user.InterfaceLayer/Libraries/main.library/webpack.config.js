const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
	entry: {
		main: "./src/index.ts", // Главная точка входа вашей библиотеки
	},
	output: {
		path: path.resolve(__dirname, "dist"), // Путь к выходной директории
		clean: true,
		filename: "[name].js", // Имя выходного файла будет соответствовать ключу entry
		library: "YourLibraryName", // Имя, под которым ваша библиотека будет доступна
		libraryTarget: "umd", // Цель экспорта - Universal Module Definition (UMD)
		umdNamedDefine: true,
		globalObject: "this", // Глобальный объект, используемый в UMD
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(ts|tsx)?$/,
				use: ['ts-loader'],
				exclude: /node_modules/
			}
		],
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "package.json"), // Путь к вашему package.json
					to: path.resolve(__dirname, "../../../../node_modules/your-library-name-test-aserbekov/package.json"), // Путь, куда нужно скопировать
				},
				{
					from: path.resolve(__dirname, "dist"), // Путь к вашему package.json
					to: path.resolve(__dirname, "../../../../node_modules/your-library-name-test-aserbekov/dist"), // Путь, куда нужно скопировать
				},
			],
		}),
	],
	resolve: {
		extensions: ['.ts', '.tsx']
	},
	externals: {
		react: "react", // Внешние зависимости, которые пользователи должны предоставить сами
		"react-dom": "ReactDOM",
	},
};
