import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';
// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'

const Home: React.FC = () => {

  // async function signIn() {
  //   console.log(GoogleAuth.signIn())
  // }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello World</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hello World!!</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <button onClick={signIn}>Login with Google</button> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
