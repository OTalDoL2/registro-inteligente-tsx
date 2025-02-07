import { Text, View } from "react-native";
import styled from "styled-components/native";


interface Props {
    label: string; 
    setValue: any; 
    value: any; 
    size?: number; 
}

export default function Input({ label, value, setValue, size = 200 }: Props) {
    return (
        <InputField>
            <Text>{label}: </Text>
            <TextInput onChangeText={setValue} value={value} />
        </InputField>
    );
}

export const TextInput = styled.TextInput`
    background-color: #ffffff;
    border: 1px solid black;
    `

export const InputField = styled.View<Props>`
    width: ${(props: Props) => props.size};
    `