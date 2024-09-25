import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonTabs, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor';
import Tabla from './pages/Tabla';
import Experiencia from './pages/Experiencia';

// Iconos opcionales (usando Ionicons de Ionic)
import { homeOutline, calculatorOutline, languageOutline, listOutline, playCircleOutline } from 'ionicons/icons';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />
          <Route path="/sumadora" component={Sumadora} exact />
          <Route path="/traductor" component={Traductor} exact />
          <Route path="/tabla" component={Tabla} exact />
          <Route path="/experiencia" component={Experiencia} exact />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        
        {/* Barra de navegación con las opciones */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="sumadora" href="/sumadora">
            <IonIcon icon={calculatorOutline} />
            <IonLabel>Sumadora</IonLabel>
          </IonTabButton>

          <IonTabButton tab="traductor" href="/traductor">
            <IonIcon icon={languageOutline} />
            <IonLabel>Traductor</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tabla" href="/tabla">
            <IonIcon icon={listOutline} />
            <IonLabel>Tabla</IonLabel>
          </IonTabButton>

          <IonTabButton tab="experiencia" href="/experiencia">
            <IonIcon icon={playCircleOutline} />
            <IonLabel>Experiencia</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
