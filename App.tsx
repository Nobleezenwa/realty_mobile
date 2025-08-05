import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme/theme';
import type { DefaultTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Hello with Theme!</Title>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: {theme: DefaultTheme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }: {theme: DefaultTheme}) => theme.colors.primary};
`;
