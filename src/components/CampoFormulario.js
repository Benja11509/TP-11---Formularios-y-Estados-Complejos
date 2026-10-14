import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../styles/styles";

export default function CampoFormulario({
  label,
  value,
  onChangeText,
  error,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "sentences",
  secureTextEntry = false
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8D93A6"
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}