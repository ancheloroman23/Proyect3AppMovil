import { IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
import { useState } from "react";
import './Traductor.css'; // Asegúrate de importar el archivo CSS

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState<number>(0);
  const [letras, setLetras] = useState<string>("");

  const traducir = () => {
    setLetras(convertirNumeroALetras(numero));
  };

  return (
    <IonContent className="traductor-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Traductor de Números</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="traductor-container">
        <IonItem>
          <IonLabel>Número:</IonLabel>
          <IonInput
            type="number"
            onIonChange={(e) => setNumero(parseInt(e.detail.value!, 10))}
            className="traductor-input"
          />
        </IonItem>
        <IonButton onClick={traducir} className="traductor-button">Traducir</IonButton>
        {letras && <h2 className="traductor-result">{letras}</h2>}
      </div>
    </IonContent>
  );
};

const convertirNumeroALetras = (num: number): string => {
  if (num < 1 || num > 1000) return "Número fuera de rango";

  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const especiales = ["once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
  const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

  let letras = "";

  if (num === 1000) return "mil";

  const centena = Math.floor(num / 100);
  const decena = Math.floor((num % 100) / 10);
  const unidad = num % 10;

  if (centena > 0) {
    if (centena === 1 && num % 100 === 0) {
      letras += "cien";
    } else {
      letras += centenas[centena] + " ";
    }
  }

  if (decena === 1 && unidad > 0) {
    letras += especiales[unidad - 1];
  } else {
    if (decena > 0) {
      letras += decenas[decena] + " ";
    }
    if (unidad > 0) {
      letras += unidades[unidad];
    }
  }

  return letras.trim();
};

export default Traductor;
