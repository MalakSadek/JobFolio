import Spinner from "../components/Spinner";
import React from "react";

export default {
    title: 'Components/Spinner',
    component: Spinner,
    argTypes: {
        loading: {control: 'boolean'}
    }
}


const Template = (args) => <Spinner {...args} />    

export const Default = Template.bind({})
Default.args = {loading: false}

export const Loading = Template.bind({})
Loading.args = {loading: true}
