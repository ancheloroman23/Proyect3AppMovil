import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
} from '@ionic/react';
import './Sumadora.css'; // Importar el CSS

const Sumadora: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [resultado, setResultado] = useState<number>();
  const [isVisible, setIsVisible] = useState<boolean>(false); // Estado para controlar la visibilidad

  const sumar = () => {
    setResultado(num1 + num2);
    setIsVisible(true); // Mostrar resultado
  };

  return (
    <IonContent className="sumadora-container">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="sumadora-title">Sumadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="input-container">
        <IonItem>
          <IonLabel>Numero 1:</IonLabel>
          <IonInput
            type="number"
            onIonChange={(e) => setNum1(parseInt(e.detail.value!, 10))}
            placeholder="0"
          />
        </IonItem>
      </div>
      <div className="input-container">
        <IonItem>
          <IonLabel>Numero 2:</IonLabel>
          <IonInput
            type="number"
            onIonChange={(e) => setNum2(parseInt(e.detail.value!, 10))}
            placeholder="0"
          />
        </IonItem>
      </div>
      <IonButton onClick={sumar}>Sumar</IonButton>
      {resultado !== undefined && (
        <h2 className={`resultado ${isVisible ? 'resultado-visible' : ''}`}>
          Resultado: {resultado}
        </h2>
      )}
    </IonContent>
  );
};

export default Sumadora;
