import { IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import './Experiencia.css'; // Importa tu archivo CSS

const Experiencia: React.FC = () => (
    <IonContent>
      
      <div className="video-container">
        <iframe 
          src="https://1drv.ms/v/c/55058228ddb9e685/EftZu1ZCsV5PoSVgHhXUoDABpxpUBtnlImrIcFrioSXDxg?e=ukiPCx" 
          title="YouTube video" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </IonContent>
);

export default Experiencia;
