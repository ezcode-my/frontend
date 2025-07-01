'use client';

import SockJS from 'sockjs-client';
import { Client, IMessage } from '@stomp/stompjs';
import { BASE_URL } from '@/constants/env';
import { sharedStompRef } from '@/shared/lib/stomp/sharedStompRef';

export default function useConnectProblemWebSocket(accessToken: string, sessionKey: string) {
  const problemStompRef = sharedStompRef;

  if (problemStompRef.current || !accessToken) {
    console.log('already problem stomp connected');
    return problemStompRef;
  }
  const socket = new SockJS(`${BASE_URL}/ws?token=${encodeURIComponent(accessToken)}`);

  const client = new Client({
    webSocketFactory: () => socket,
    reconnectDelay: 5000,
    debug: () => {},
  });

  const base = `/topic/submission/${sessionKey}`;

  client.onConnect = () => {
    setTimeout(() => {
      client.subscribe(`${base}/init`, (msg: IMessage) => {
        localStorage.setItem('cases', msg.body);
      });

      client.subscribe(`${base}/case`, (msg: IMessage) => {
        localStorage.setItem('results', msg.body);
      });
      client.subscribe(`${base}/final`, (msg: IMessage) => {
        localStorage.setItem('final', msg.body);
      });
    }, 1000);

    // client.subscribe(`${base}/error`, (msg: IMessage) => {
    //   localStorage.setItem('error', msg.body);
    // });
    // client.subscribe(`${base}/git-status`, (msg: IMessage) => {
    //   localStorage.setItem('git-status', msg.body);
    // });
  };

  client.debug = (msg: string) => {
    console.log('stomp debug:', msg);
  };
  problemStompRef.current = client;
  client.activate();
}
