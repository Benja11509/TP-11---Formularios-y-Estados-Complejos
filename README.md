# Sonido Sur — TP Formularios con validaciones y estados complejos

Proyecto realizado con React Native + Expo SDK 57.

## Cómo correrlo

```bash
npm install
npx expo start
```

Después se puede abrir con Expo Go escaneando el QR. Para usarlo desde otro dispositivo, la PC y el celular tienen que estar en una red que permita la conexión. También se puede usar `npx expo start --tunnel`.

## Validación elegida

Se eligió **React Hook Form**, usando `useForm`, `Controller` y `rules`, porque permite mantener el formulario controlado de forma ordenada y centralizar las validaciones sin tener que manejar un objeto de errores separado.

## Qué incluye

- Nombre completo obligatorio, mínimo 3 caracteres y con `trim()`.
- Email obligatorio con regex para validar formato y dominio.
- Edad obligatoria entre 12 y 99.
- Tipo de entrada obligatorio con exactamente dos opciones: General y VIP.
- Teléfono opcional, pero si se completa acepta solamente números.
- Mensajes de error debajo de cada campo.
- Botón de confirmación deshabilitado mientras el formulario no sea válido.
- `KeyboardAvoidingView` con comportamiento diferente para iOS y Android.
- `CampoFormulario` como componente reutilizable.
- `TicketConfirmacion` separado del formulario.
- Los datos del ticket y las acciones se comparten con React Context (ver sección **React Context**).
- El estado del formulario sigue en `InscripcionScreen` (React Hook Form); el estado de la inscripción vive en el Context.
- Renderizado condicional: formulario o ticket.
- Botón para volver a inscribir a otra persona y limpiar el formulario.

## Bonus

Se resolvieron los dos bonus:

1. **AsyncStorage:** se guarda el email de la última persona inscripta y se precarga al abrir la app (la lectura/escritura ahora se hace dentro del Context).
2. **Loading:** al confirmar se muestra un loading durante 1 segundo simulando el envío al servidor.

## React Context

### Información que se comparte a través del Context
- `ticket`: datos de la inscripción confirmada (o `null` si todavía no se confirmó).
- `enviando`: estado de loading mientras se simula el envío.
- `emailGuardado` y `emailCargado`: último email guardado en AsyncStorage y si ya terminó de leerse.
- `inscripciones`: lista de inscripciones confirmadas durante la sesión.
- `enviarInscripcion(datos)` y `nuevaInscripcion()`: acciones para confirmar una inscripción y volver al formulario.

### Archivo donde se creó el Context
`src/context/InscripcionContext.js` (`createContext` + componente `InscripcionProvider`).

### Componente contenedor del Provider
`App.js`: `InscripcionProvider` envuelve a `InscripcionScreen`, por lo que toda la pantalla y sus hijos acceden al estado.

### Componentes que consumen el Context con `useContext`
- `src/screens/InscripcionScreen.js`: usa `ticket`, `enviando`, `emailGuardado`, `emailCargado` y `enviarInscripcion`.
- `src/components/TicketConfirmacion.js`: usa `ticket` y `nuevaInscripcion` (ya no recibe props).
- `src/components/BannerSesion.js`: usa `emailGuardado` e `inscripciones` para mostrar el último email y la cantidad de inscripciones de la sesión.

### Justificación técnica
Antes, el ticket llegaba a `TicketConfirmacion` por props y el estado de la inscripción estaba encerrado en la pantalla. Como ahora el ticket, el loading, el email guardado y el historial de la sesión los necesitan varios componentes distintos, se centralizaron en un Context. Así se evita pasar props nivel por nivel, la lógica de envío y de AsyncStorage queda en un solo lugar y cada componente toma solo lo que necesita.

## Estructura

```text
SonidoSur-Expo-SDK57/
├── App.js
├── app.json
├── package.json
├── README.md
└── src/
    ├── components/
    │   ├── BannerSesion.js
    │   ├── CampoFormulario.js
    │   └── TicketConfirmacion.js
    ├── context/
    │   └── InscripcionContext.js
    ├── screens/
    │   └── InscripcionScreen.js
    └── styles/
        └── styles.js
```

## Capturas

La carpeta `capturas/` contiene vistas previas de referencia de los tres estados solicitados por la consigna. Para la entrega final, se recomienda reemplazarlas por capturas reales tomadas desde Expo Go:
- formulario con errores
- formulario completo y válido
- ticket de confirmación
