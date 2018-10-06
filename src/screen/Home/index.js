import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'

import {
    Container,
    Text,
    Button,
} from './styled'

const Wrapper = (options) => (Component) => (props) => {
    return (
        <Container>
            <Component {...props} />
            <Text>
                Footer
            </Text>
        </Container>
    )
}

const enhance = compose(
    Wrapper({ get: 1 }),
    withState('cat', 'setCat', 'dog'),
    withState('dog', 'setDog', 'cat'),
    withHandlers({
        goToSetting: props => () => {
            props.setCat('cat')
        },
    }),
)

export default enhance(props =>
    <Container>
        <Text>{props.cat}</Text>
        <Button onPress={props.goToSetting}>
            <Text>Go to Setting</Text>
        </Button>
    </Container> 
)
