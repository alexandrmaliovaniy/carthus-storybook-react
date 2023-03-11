module.exports = (config) => config.Override('cm', (schema) => {
    const dep = [];
    if (config.hasFlag('sb')) {
        dep.push({
            alias: 'story',
            path: "./Story",
            inject: {
                import: [
                    "import {{ARGS.NAME}} from './{{PATH_TO.PARENT_FOLDER}}';"
                ]
            }
        })
    }
    return {
        ...schema,
        dependencies: [
            ...schema.dependencies,
            ...dep
        ]
    };
})