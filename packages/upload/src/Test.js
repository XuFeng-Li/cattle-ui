import React from 'react';

export const B = (props) => {
    const { children, ...rest } = props;
    return <div {...rest}>test111111111111111{children}</div>
}

export default class A extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        const {children, ...rest} = this.props;
    return <div {...rest}>899 {children}</div>
    }
}

