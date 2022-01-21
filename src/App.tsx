import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import "./App.css";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Home />
        </QueryClientProvider>
    );
}

export default App;
