import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import AppRouter from "./router/AppRouter"
import Footer from "./components/Footer"
import QuoteModal from "./components/QuoteModal";
import { useState } from "react";
import WhatsAppButton from "./components/common/WhatsAppButton";

function App() {
const [quoteOpen, setQuoteOpen] = useState(false);  return (
    <BrowserRouter>
     <Navbar openQuote={() => setQuoteOpen(true)} />
<AppRouter openQuote={() => setQuoteOpen(true)} />
     
      <QuoteModal
    open={quoteOpen}
    onClose={() => setQuoteOpen(false)}
  />
   <Footer />
   <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App