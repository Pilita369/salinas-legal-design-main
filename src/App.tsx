import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from "./pages/Index";

/*
  ✅ App simple, sin React Router

  Este sitio es una landing / one page.
  No necesita BrowserRouter ni HashRouter.

  Esto evita:
  - errores de rutas
  - problemas en GitHub Pages
  - pantallas blancas por navegación
*/

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* Página principal única */}
        <Index />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;