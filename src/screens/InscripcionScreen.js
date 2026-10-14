import React, { useContext, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import CampoFormulario from "../components/CampoFormulario";
import TicketConfirmacion from "../components/TicketConfirmacion";
import BannerSesion from "../components/BannerSesion";
import { InscripcionContext } from "../context/InscripcionContext";
import styles from "../styles/styles";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY_FORM = {
  nombreCompleto: "",
  email: "",
  edad: "",
  tipoEntrada: "",
  telefono: ""
};

export default function InscripcionScreen() {
  const {
    ticket,
    enviando,
    emailGuardado,
    emailCargado,
    enviarInscripcion
  } = useContext(InscripcionContext);
  const emailPrecargado = useRef(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: EMPTY_FORM,
    mode: "onChange"
  });

  // Precarga el último email guardado una sola vez, cuando el Context lo terminó de leer.
  useEffect(() => {
    if (emailCargado && !emailPrecargado.current) {
      emailPrecargado.current = true;
      if (emailGuardado) reset({ ...EMPTY_FORM, email: emailGuardado });
    }
  }, [emailCargado, emailGuardado, reset]);

  // Confirma la inscripción en el Context y deja el formulario limpio
  // para cuando se vuelva a inscribir a otra persona.
  const confirmar = async (datos) => {
    await enviarInscripcion(datos);
    reset(EMPTY_FORM);
  };

  if (ticket) {
    return (
      <View style={styles.screen}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.brand}>SONIDO SUR</Text>
          <Text style={styles.heading}>Tu entrada está lista</Text>
          <TicketConfirmacion />
        </ScrollView>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.brand}>SONIDO SUR</Text>
        <Text style={styles.heading}>Inscripción al festival</Text>
        <Text style={styles.description}>
          Completá tus datos para generar tu ticket de ingreso.
        </Text>

        <BannerSesion />

        <Controller
          control={control}
          name="nombreCompleto"
          rules={{
            required: "Ingresá tu nombre completo",
            minLength: {
              value: 3,
              message: "Ingresá tu nombre completo"
            },
            validate: (value) =>
              value.trim().length >= 3 || "Ingresá tu nombre completo"
          }}
          render={({ field: { onChange, value } }) => (
            <CampoFormulario
              label="Nombre completo"
              value={value}
              onChangeText={onChange}
              error={errors.nombreCompleto?.message}
              placeholder="Ej: Juan Pérez"
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{
            required: "Ingresá un email válido",
            pattern: {
              value: EMAIL_REGEX,
              message: "Ingresá un email válido"
            }
          }}
          render={({ field: { onChange, value } }) => (
            <CampoFormulario
              label="Email"
              value={value}
              onChangeText={onChange}
              error={errors.email?.message}
              placeholder="Ej: juan@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
        />

        <Controller
          control={control}
          name="edad"
          rules={{
            required: "La edad tiene que ser mayor a 12",
            validate: (value) => {
              const edad = Number(value);
              if (!/^\d+$/.test(value)) return "La edad tiene que ser mayor a 12";
              if (edad < 12 || edad > 99) return "La edad tiene que ser mayor a 12";
              return true;
            }
          }}
          render={({ field: { onChange, value } }) => (
            <CampoFormulario
              label="Edad"
              value={value}
              onChangeText={onChange}
              error={errors.edad?.message}
              placeholder="Ej: 17"
              keyboardType="numeric"
            />
          )}
        />

        <Controller
          control={control}
          name="tipoEntrada"
          rules={{
            required: "Elegí un tipo de entrada"
          }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.field}>
              <Text style={styles.label}>Tipo de entrada</Text>
              <View style={styles.options}>
                <TouchableOpacity
                  style={[styles.option, value === "general" && styles.optionSelected]}
                  onPress={() => onChange("general")}
                >
                  <Text
                    style={[
                      styles.optionText,
                      value === "general" && styles.optionTextSelected
                    ]}
                  >
                    GENERAL
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.option, value === "vip" && styles.optionSelected]}
                  onPress={() => onChange("vip")}
                >
                  <Text
                    style={[
                      styles.optionText,
                      value === "vip" && styles.optionTextSelected
                    ]}
                  >
                    VIP
                  </Text>
                </TouchableOpacity>
              </View>
              {errors.tipoEntrada ? (
                <Text style={styles.error}>{errors.tipoEntrada.message}</Text>
              ) : null}
            </View>
          )}
        />

        <Controller
          control={control}
          name="telefono"
          rules={{
            validate: (value) =>
              value === "" ||
              /^\d+$/.test(value) ||
              "Solo se permiten números"
          }}
          render={({ field: { onChange, value } }) => (
            <CampoFormulario
              label="Teléfono (opcional)"
              value={value}
              onChangeText={onChange}
              error={errors.telefono?.message}
              placeholder="Ej: 1123456789"
              keyboardType="phone-pad"
            />
          )}
        />

        <TouchableOpacity
          style={[
            styles.primaryButton,
            (!isValid || enviando) && styles.disabledButton
          ]}
          onPress={handleSubmit(confirmar)}
          disabled={!isValid || enviando}
        >
          {enviando ? (
            <View style={styles.loadingContent}>
              <ActivityIndicator color="#FFFFFF" />
              <Text style={styles.primaryButtonText}>Enviando...</Text>
            </View>
          ) : (
            <Text style={styles.primaryButtonText}>Confirmar inscripción</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}