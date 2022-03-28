module.exports = async function pluginTailwindDocusaurus() {
    return {
        name: 'plugin-tailwind-docusaurus',
        configurePostCss(postcssOptions) {
            console.log('plugin-tailwind-docusaurus');
            postcssOptions.plugins.push(require('tailwindcss'));
            postcssOptions.plugins.push(require('autoprefixer'));
            return postcssOptions;
        },
    };
};
