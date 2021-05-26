import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, useStyletron, styled} from 'baseui';
import {Button} from "baseui/button";
import {StyledLink} from 'baseui/link'

const engine = new Styletron();

const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '25px'
});

function BaseWebApp() {
    const [, theme] = useStyletron(); // if you want to use theme variables

    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <h2>BaseWeb</h2>
                <Container>
                    <Button overrides={{
                        Root: {
                            style: {
                                color: 'red'
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
            </BaseProvider>
        </StyletronProvider>
    );
}

export default BaseWebApp;
