'use client';

import SockJS from 'sockjs-client';
import { Client, IMessage } from '@stomp/stompjs';
import { BASE_URL } from '@/constants/env';
import { sharedStompRef } from '@/shared/lib/stomp/sharedStompRef';

export default function connectProblemWebSocket(accessToken: string, sessionKey: string) {
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
    client.subscribe(`${base}/init`, (msg: IMessage) => {
      console.log('init구독', msg.body);
    });

    client.subscribe(`${base}/case`, (msg: IMessage) => {
      localStorage.setItem('results', msg.body);
    });
    client.subscribe(`${base}/final`, (msg: IMessage) => {
      localStorage.setItem('final', msg.body);
    });
  };

  problemStompRef.current = client;
  client.activate();
}
