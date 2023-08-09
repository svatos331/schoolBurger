import React from 'react';

type MyWidgetTypeProps = {
    text: string,
}

const MyWidget: React.FC<MyWidgetTypeProps> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    );
};

export default MyWidget;