import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </div>
  )
}

export default App;