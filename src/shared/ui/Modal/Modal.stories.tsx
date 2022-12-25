import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from 'shared/ui/Modal/Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'lorem',
};

export const Dart = Template.bind({});
Dart.args = {
    isOpen: true,
    children: 'lorem',
};
Dart.decorators = [ThemeDecorator(Theme.DARK)];
