const meta: Meta<typeof {{ARGS.NAME}}> = {
    title: "{{ARGS.NAME}}",
    component: {{ARGS.NAME}}
};

export default meta;

type Story = StoryObj<typeof {{ARGS.NAME}}>;

export const Primary: {{ARGS.NAME}} = {
    render: () => <{{ARGS.NAME}} />,
};