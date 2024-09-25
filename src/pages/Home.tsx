import {
  IonContent,
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { personCircle, calculator, text } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonContent className="home-content">
      <div className="personal-info">
        <IonCard className="info-card">
          <IonGrid>
            <IonRow>
              <IonCol size="12" className="avatar-col">
                <IonAvatar>
                  <img
                    src="src/Images/profile_image.jpg"
                    alt="Foto 2x2"
                    className="avatar-image"
                  />
                </IonAvatar>
              </IonCol>
              <IonCol size="12" className="info-text">
                <IonCardHeader>
                  <IonCardTitle>Nombre:</IonCardTitle>
                  <IonCardSubtitle>Anchelo Roman Camilo</IonCardSubtitle>
                </IonCardHeader>
                <IonCardHeader>
                  <IonCardTitle>Matricula:</IonCardTitle>
                  <IonCardSubtitle>2022-1069</IonCardSubtitle>
                </IonCardHeader>
                <IonCardHeader>
                  <IonCardTitle>Email:</IonCardTitle>
                  <IonCardSubtitle>ancheloroman23@gmail.com</IonCardSubtitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </div>

      <h2 className="option-title">Elige una opción</h2>

      <IonGrid className="button-grid">
        <IonRow className="options-row">
          {[
            { label: 'Sumadora', route: '/sumadora', icon: calculator },
            { label: 'Traductor de Números', route: '/traductor', icon: text },
            { label: 'Tabla de Multiplicar', route: '/tabla', icon: calculator },
            { label: 'Experiencia', route: '/experiencia', icon: personCircle },
          ].map(option => (
            <IonCol key={option.label} size="12" className="option-col">
              <IonButton
                expand="full"
                color="tertiary"
                shape="round"
                onClick={() => history.push(option.route)}
                className="option-button"
              >
                <IonIcon slot="start" icon={option.icon} />
                {option.label}
              </IonButton>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Home;
