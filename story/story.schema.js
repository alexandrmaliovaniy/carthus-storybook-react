module.exports = (config) => {
    return {
        alias: ["story"],
        filename: "{{ARGS.NAME}}.stories",
        template: config.LoadTemplate(__dirname, "story.template.tsx"),
        inject: {
            import: [
                "import { BaseInput } from \"@ui/index\";",
                "import { ComponentMeta, ComponentStory } from \"@storybook/react\";",
                "import { ComponentProps } from \"react\";"
            ]
        },
        overrides: [

        ],
        dependencies: []
    }
};