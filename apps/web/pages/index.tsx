import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs'
import { Button } from 'ui'
import { fn } from '../utils'
import { useEffect } from 'react'

export default function Web() {
  datadogRum.init({
    applicationId: '268f283a-e8dc-4289-b64a-0ef73b091912',
    clientToken: 'pub3cdac897e1065b834cd3870ea7b52d88',
    site: 'us5.datadoghq.com',
    service:'shiiinji-blog',
    version: 'test9.11',
    env:'prod',
    sessionSampleRate: 100,
    trackUserInteractions: true,
    defaultPrivacyLevel:'mask-user-input'
  });
  datadogLogs.init({
    clientToken: 'pub3cdac897e1065b834cd3870ea7b52d88',
    site: 'us5.datadoghq.com',
    service:'shiiinji-blog',
    version: 'test9.11',
    env:'qa',
    sessionSampleRate: 100,
    forwardErrorsToLogs: true,
    forwardConsoleLogs: 'all'
  })

  datadogRum.startSessionReplayRecording();

  useEffect(() => {
    const test = fn(5, 5)
    console.log(test)
  }, [])

  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}

export async function getServerSideProps() {
  const f = () => 'test'

  return {
    props: {
      r: f()
    }
  }
}