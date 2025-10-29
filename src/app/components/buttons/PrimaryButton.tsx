import React from "react";
import { Button, ButtonProps } from "react-native";
import { colors } from "../../theme";

interface Props extends ButtonProps {
  title: string;
}

export default function PrimaryButton({ title, ...props }: Props) {
  return <Button title={title} color={colors.primary} {...props} />;
}
