/**
 * CONFIGURACIÓN DE CLAVES DE API — Briggith Pernía · App
 * ─────────────────────────────────────────────────────
 * 1. Copia este archivo:   cp config.example.js config.js
 * 2. Rellena tus claves reales en config.js
 * 3. Asegúrate de que config.js esté en .gitignore (NUNCA subir a GitHub)
 *
 * 🔒 SEGURIDAD EXTRA RECOMENDADA:
 *   - Firebase: configura las Security Rules en Firebase Console
 *     para permitir lectura/escritura solo desde tu dominio.
 *   - Gemini: en Google Cloud Console → APIs → Gemini API → "Restricciones de API"
 *     → agrega tu dominio en "Referentes HTTP permitidos".
 */
window._BP_CONFIG = {

  // ── GEMINI AI ──────────────────────────────────────────────
  // Obtén tu clave en: https://aistudio.google.com/app/apikey
  geminiKey: "REEMPLAZA_CON_TU_GEMINI_API_KEY",

  // ── FIREBASE ───────────────────────────────────────────────
  // Obtén estos valores en Firebase Console → Configuración del proyecto → Apps
  firebase: {
    apiKey:            "REEMPLAZA_CON_TU_FIREBASE_API_KEY",
    authDomain:        "TU-PROYECTO.firebaseapp.com",
    projectId:         "TU-PROYECTO",
    storageBucket:     "TU-PROYECTO.firebasestorage.app",
    messagingSenderId: "TU_SENDER_ID",
    appId:             "1:TU_SENDER_ID:web:TU_APP_ID"
  }

};
