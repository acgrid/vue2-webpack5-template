import { clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'

clientsClaim()
precacheAndRoute(self.__WB_MANIFEST)

console.log('Hello world form service worker!')
