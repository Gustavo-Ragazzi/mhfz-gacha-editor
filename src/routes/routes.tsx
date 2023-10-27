import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DefaultLayout from '../renderer/src/components/DefaultLayout'
import NormalGacha from '../renderer/src/pages/NormalGacha';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Navigate to={'/normalgacha'} />} />
          <Route path='/normalgacha' element={<NormalGacha />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
