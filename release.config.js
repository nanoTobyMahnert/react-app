module.exports = {
	repositoryUrl: 'https://github.com/nanoTobyMahnert/react-app',
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		["@semantic-release/github", {"assets": ["coverage.zip", "build.zip"]}],
        "@semantic-release/git"
	],
};
