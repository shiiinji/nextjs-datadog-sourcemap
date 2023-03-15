import { Button } from "ui";
import { datadogRum } from '@datadog/browser-rum';

datadogRum.startSessionReplayRecording();

export default function Docs() {
  datadogRum.init({
    applicationId: 'ddd468ca-57a2-446b-bcf5-b90f582c6f2f',
    clientToken: 'pub1d5e3a850385f8bfe87d7bf6848691fb',
    site: 'us5.datadoghq.com',
    service:'shiiinji-doc',
    env:'qa',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    premiumSampleRate: 100,
    trackUserInteractions: true,
    defaultPrivacyLevel:'mask-user-input'
  });


  return (
    <div>
      <h1>Docs</h1>
      <Button />
    </div>
  );
}
