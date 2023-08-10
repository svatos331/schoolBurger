import React from 'react';

type MyWidgetTypeProps = {
    text: string,
}

const MyWidget: React.FC<MyWidgetTypeProps> = ({text}) => {
    return (
        <div data-testid="my-widget">
            {text}
        </div>
    );
};

export default MyWidget;