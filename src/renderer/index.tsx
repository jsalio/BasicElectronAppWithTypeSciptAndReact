import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { PrimaryButton, DefaultButton, TeachingBubble, DirectionalHint } from '@fluentui/react'

import './style.css'


const Root: React.FC = () => {
    const [showBubble, setBubble] = useState(false);
    useEffect(() => {
        let tId = setTimeout(() => {
            setBubble(true);
        }, 3000);
        return () => clearTimeout(tId);
    }, []);
    return <div className="root">
        <h1>Welcome !</h1>
        <p>Some text here</p>
        <div>
            <PrimaryButton id='primaryB' text='Like' />
            <DefaultButton text='Subscribe' />
        </div>
        {showBubble &&
            <TeachingBubble
                calloutProps={{ directionalHint: DirectionalHint.bottomCenter }}
                target='#primaryB'
                isWide={true}
                hasCloseButton={true}
                onDismiss={() => setBubble(false)}
                headline={'Please read this'}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim est. Suspendisse vehicula ultrices enim, non venenatis eros viverra ac. Donec semper in risus vel ornare.
                Fusce et faucibus ex. Phasellus pharetra urna quis lorem gravida, ut mollis tortor fermentum. Morbi ut pharetra mauris. Nullam ut augue sit amet erat sagittis mollis et sit amet augue.
                In bibendum augue at mi pellentesque porttitor. Mauris placerat turpis non urna pharetra suscipit. Nulla facilisis, erat malesuada luctus elementum, metus est placerat purus, in pharetra leo neque vel arcu.
                Nam sagittis augue eu lobortis facilisis.
                In hac habitasse platea dictumst. Nulla sagittis pharetra libero, a lacinia libero finibus a. Suspendisse laoreet velit augue, quis rutrum nisl commodo sed. Nullam maximus molestie massa id ultricies.
            </TeachingBubble>
        }
    </div>
}

ReactDom.render(
    <Root />,
    document.getElementById('app')
);