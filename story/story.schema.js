module.exports = (config) => {
    return {
        alias: ["story"],
        filename: "{{ARGS.NAME}}.stories",
        template: config.LoadTemplate(__dirname, "story.template.tsx"),
        inject: {
            import: [
                "import { Meta, StoryObj } from \"@storybook/react\";"
            ]
        },
        overrides: [

        ],
        dependencies: []
    }
};