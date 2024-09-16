import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center
`;

export const Title = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.color};
`;

export const SubTitle = styled.Text`
    font-style: italic;
    color: ${props => props.theme.color};;
    background-color: ${props => props.theme.primeira};
    padding: 8px 12px; 
`;

