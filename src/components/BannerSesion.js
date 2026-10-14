import React, { useContext } from "react";
import { Text, View } from "react-native";
import { InscripcionContext } from "../context/InscripcionContext";
import styles from "../styles/styles";

// Consume el Context: muestra el último email y cuántas inscripciones se hicieron.
export default function BannerSesion() {
  const { emailGuardado, inscripciones } = useContext(InscripcionContext);

  if (!emailGuardado && inscripciones.length === 0) return null;

  return (
    <View style={styles.savedBox}>
      {emailGuardado ? (
        <Text style={styles.savedText}>
          Último email cargado: {emailGuardado}
        </Text>
      ) : null}
      {inscripciones.length > 0 ? (
        <Text style={styles.savedText}>
          Inscripciones realizadas en esta sesión: {inscripciones.length}
        </Text>
      ) : null}
    </View>
  );
}
