import React, { useState, useEffect, useMemo } from 'react';
//import Planeta from './Planeta';

export function App() {
 
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100)
  const [estadoNave, setEstadoNave] = useState("En órbita")
  const [planetasVisitados, setPlanetasVisitados] = useState([])
  const [activo, setActivo] = useState(true)


  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => { // Montaje
      // ... (simulación de vuelo)
      setCombustible( prev => {

        const combustibleActual = prev > 0 ? prev-1 : 0

        if(combustibleActual === 0){
          setActivo(false)
        }

        return combustibleActual
      })
      
      setDistancia( prev => prev+10)
    }, 1000);

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  return (
    <div>
      {/* ... (información del panel) */}
      <h1>Panel de control espacial</h1>
      <ul>
        <li>Distancia: {distancia} km</li>
        <li>Combustible: {combustible}</li>
        <li>Estado: {estadoNave}</li>
      </ul>
      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}
    </div>
  );
}