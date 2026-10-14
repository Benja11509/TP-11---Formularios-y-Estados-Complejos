import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { InscripcionContext } from "../context/InscripcionContext";
import styles from "../styles/styles";

export default function TicketConfirmacion() {
  // Los datos y la acción vienen del Context, sin pasar props.
  const { ticket: datos, nuevaInscripcion } = useContext(InscripcionContext);

  if (!datos) return null;

  return (
    <View style={styles.ticket}>
      <View style={styles.ticketHeader}>
        <Text style={styles.ticketTitle}>SONIDO SUR</Text>
        <Text style={styles.ticketSubtitle}>INSCRIPCIÓN CONFIRMADA</Text>
      </View>

      <View style={styles.ticketLine} />

      <View style={styles.ticketRow}>
        <Text style={styles.ticketLabel}>Nombre</Text>
        <Text style={styles.ticketValue}>{datos.nombreCompleto}</Text>
      </View>

      <View style={styles.ticketRow}>
        <Text style={styles.ticketLabel}>Email</Text>
        <Text style={styles.ticketValue}>{datos.email}</Text>
      </View>

      <View style={styles.ticketRow}>
        <Text style={styles.ticketLabel}>Edad</Text>
        <Text style={styles.ticketValue}>{datos.edad}</Text>
      </View>

      <View style={styles.ticketRow}>
        <Text style={styles.ticketLabel}>Entrada</Text>
        <Text style={styles.ticketValue}>{datos.tipoEntrada.toUpperCase()}</Text>
      </View>

      <View style={styles.ticketRow}>
        <Text style={styles.ticketLabel}>Teléfono</Text>
        <Text style={styles.ticketValue}>{datos.telefono || "No informado"}</Text>
      </View>

      <View style={styles.ticketLine} />

      <Text style={styles.ticketThanks}>
        ¡Listo! Guardá esta confirmación para el ingreso al festival.
      </Text>

      <TouchableOpacity style={styles.secondaryButton} onPress={nuevaInscripcion}>
        <Text style={styles.secondaryButtonText}>Volver a inscribir a otra persona</Text>
      </TouchableOpacity>
    </View>
  );
}