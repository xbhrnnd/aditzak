import { lazy } from 'react';
import { ADITZAK, HASIERA, HONIBURUZ } from './paths';

const Hasiera = lazy(() => import('components/Hasiera'));
const Aditzak = lazy(() => import('components/Aditzak'));
const HoniBuruz = lazy(() => import('components/HoniBuruz'));

const routes = [
    { path: HASIERA, component: Hasiera },
    { path: ADITZAK, component: Aditzak },
    { path: HONIBURUZ, component: HoniBuruz }
];

export default routes;
