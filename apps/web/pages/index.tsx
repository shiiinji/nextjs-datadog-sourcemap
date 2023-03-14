import { datadogRum } from '@datadog/browser-rum';
import { Button } from 'ui'

export default function Web() {
  datadogRum.init({
    applicationId: '268f283a-e8dc-4289-b64a-0ef73b091912',
    clientToken: 'pub3cdac897e1065b834cd3870ea7b52d88',
    site: 'us5.datadoghq.com',
    service:'shiiinji-blog',
    version: '1.0.0-test-version',
    env:'qa',
    sessionSampleRate: 100,
    trackUserInteractions: true,
    defaultPrivacyLevel:'mask-user-input'
  });

  datadogRum.startSessionReplayRecording();

  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
