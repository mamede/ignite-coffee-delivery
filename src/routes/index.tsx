import { Route, Routes } from 'react-router-dom'

// PAGES
import { Home } from '../pages/Home'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Checkout } from '../pages/Checkout'
import { CheckoutDone } from '../pages/CheckoutDone'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-done" element={<CheckoutDone />} />
      </Route>
    </Routes>
  )
}
