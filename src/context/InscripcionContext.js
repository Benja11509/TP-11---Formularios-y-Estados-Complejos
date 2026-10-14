import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "sonidoSurUltimoEmail";

// Context que comparte el estado de las inscripciones entre la pantalla,
// el ticket y el banner de sesión.
export const InscripcionContext = createContext(null);

export function InscripcionProvider({ children }) {
  const [ticket, setTicket] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [emailGuardado, setEmailGuardado] = useState("");
  const [emailCargado, setEmailCargado] = useState(false);
  const [inscripciones, setInscripciones] = useState([]);

  // Carga inicial del último email guardado (bonus AsyncStorage).
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((email) => {
        if (email) setEmailGuardado(email);
      })
      .catch(() => {})
      .finally(() => setEmailCargado(true));
  }, []);

  // Simula el envío al servidor (1 segundo), guarda el email y genera el ticket.
  const enviarInscripcion = useCallback(async (datos) => {
    setEnviando(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await AsyncStorage.setItem(STORAGE_KEY, datos.email);
      setEmailGuardado(datos.email);
      setInscripciones((previas) => [...previas, datos]);
      setTicket(datos);
    } finally {
      setEnviando(false);
    }
  }, []);

  // Vuelve al formulario para inscribir a otra persona.
  const nuevaInscripcion = useCallback(() => {
    setTicket(null);
  }, []);

  const value = useMemo(
    () => ({
      ticket,
      enviando,
      emailGuardado,
      emailCargado,
      inscripciones,
      enviarInscripcion,
      nuevaInscripcion
    }),
    [
      ticket,
      enviando,
      emailGuardado,
      emailCargado,
      inscripciones,
      enviarInscripcion,
      nuevaInscripcion
    ]
  );

  return (
    <InscripcionContext.Provider value={value}>
      {children}
    </InscripcionContext.Provider>
  );
}
