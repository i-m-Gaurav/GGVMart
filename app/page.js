'use client'
import Nav from "@/components/Nav";
import CardContainer from "@/components/CardContainer";
import { AuthContextProvider } from "./context/AuthContext";

export default function Home() {
 return(
  <>
  <AuthContextProvider>
    <Nav />
    <CardContainer  /> 
    </AuthContextProvider>
  </>
 )
}
