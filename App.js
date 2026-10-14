import React from "react";
import { StatusBar } from "expo-status-bar";
import InscripcionScreen from "./src/screens/InscripcionScreen";
import { InscripcionProvider } from "./src/context/InscripcionContext";

export default function App() {
  return (
    <InscripcionProvider>
      <StatusBar style="light" />
      <InscripcionScreen />
    </InscripcionProvider>
  );
}
