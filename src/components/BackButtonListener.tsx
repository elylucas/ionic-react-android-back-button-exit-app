import React, { useEffect } from 'react';
import { Plugins } from '@capacitor/core';
import { useIonRouter } from '@ionic/react';
const { App } = Plugins;

interface BackButtonListenerProps {}

const BackButtonListener: React.FC<BackButtonListenerProps> = (props) => {
  const router = useIonRouter();

  useEffect(() => {
    document.addEventListener('ionBackButton', (ev: any) => {
      console.log({ ionBackButtonEvent: ev });
      ev.detail.register(-1, (next: any) => {
        if (!router.canGoBack()) {
          App.exitApp();
        } else {
          next();
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{props.children}</>;
};

export default BackButtonListener;
