import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    background-color: lightblue;
    align-items: center;
    justify-content: center;
`

const FixedContainer = styled.View`
    position: fixed;
    background-color: red;
    align-items: center;
    justify-content: end;
    bottom: 0;
    right: 0;
`

const Title = styled.Text`
    color: #000;
    text-align: center;
    font-size: 16px;
`

export const App = () => {
    return (
        <Container>
            <Title>Hello</Title>
            <View>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
            <FixedContainer>
                <Text>Yeet</Text>
            </FixedContainer>
        </Container>
    )
}
