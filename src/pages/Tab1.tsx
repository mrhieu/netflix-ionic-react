import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonItem, IonLabel, IonToggle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import ThemeService from '../services/theme.service';

const Tab1: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(ThemeService.getCurrentSetting());

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    ThemeService.toggleDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="md">
          <IonTitle color="danger"><strong>NETFLIX</strong></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem lines="full">
          <IonLabel>Dark mode</IonLabel>
          <IonToggle checked={isDarkMode} onIonChange={toggleDarkMode}></IonToggle>
        </IonItem>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
