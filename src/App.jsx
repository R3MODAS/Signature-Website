import React, { Suspense, lazy } from 'react'
import Loader from './Loader';
const Home = lazy(() => import('./Home'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  )
}

export default App