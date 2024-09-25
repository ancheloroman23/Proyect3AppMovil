import { IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
import { useState } from "react";
import './Tabla.css'; // Importar el archivo CSS

const Tabla: React.FC = () => {
    const [numero, setNumero] = useState<number>(0);
    const [tabla, setTabla] = useState<number[]>([]);
  
    const generarTabla = () => {
      const nuevaTabla = Array.from({ length: 13 }, (_, i) => (i + 1) * numero);
      setTabla(nuevaTabla);
    };
  
    return (
      <IonContent className="tabla-container"> {/* Aplicar clase para estilos */}
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tabla de Multiplicar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>Número:</IonLabel>
          <IonInput type="number" onIonChange={(e) => setNumero(parseInt(e.detail.value!, 10))} />
        </IonItem>
        <div>
        <IonLabel>.</IonLabel>  
        </div>
        <IonButton onClick={generarTabla}>Generar</IonButton>
        <div>
          {tabla.map((resultado, i) => (
            <p key={i}>{`${numero} x ${i + 1} = ${resultado}`}</p>
          ))}
        </div>
      </IonContent>
    );
};

export default Tabla;
