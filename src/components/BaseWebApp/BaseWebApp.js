import React from 'react';
import {useStyletron, styled} from 'baseui';
import {Button} from "baseui/button";
import {StyledLink} from 'baseui/link';

const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '25px'
});

function BaseWebApp() {
    const [, theme] = useStyletron(); // if you want to use theme variables

    return (
        <>
            <h2>BaseWeb</h2>
            <Container>
                <Button overrides={{
                    Root: {
                        style: {
                            color: theme.colors.accent
                        }
                    }
                }}>
                    Hello World
                </Button>
                <Button kind="secondary">
                    Hello World
                </Button>
                <StyledLink>Link to something</StyledLink>
            </Container>
        </>
    );
}

export default BaseWebApp;
