export default {
    title: "{{ARGS.NAME}}",
    component: {{ARGS.NAME}}
} as ComponentMeta<typeof {{ARGS.NAME}}>;

const Template = (args: ComponentProps<typeof {{ARGS.NAME}}>) => <{{ARGS.NAME}} {...args} />;

export const Default: ComponentStory<typeof {{ARGS.NAME}}> = Template.bind({});

Default.args = {};