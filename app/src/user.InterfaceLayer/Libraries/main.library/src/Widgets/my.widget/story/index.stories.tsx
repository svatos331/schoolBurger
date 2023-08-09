import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import MyWidget from "../index";

export default {
	title: "Example/MyWidget",
	component: MyWidget,
} as ComponentMeta<typeof MyWidget>;

const Template: ComponentStory<typeof MyWidget> = (args) => (
	<MyWidget {...args} />
);

export const FirstText = Template.bind({});
FirstText.args = {
	text: "First test text",
};

export const SecondText = Template.bind({});
SecondText.args = {
	text: "Second test text",
};

export const ThirdText = Template.bind({});
ThirdText.args = {
	text: "Third test text",
};
