import "./styles.css";
let btnEnv = document.getElementById("enviar");
let posicion: number = document.getElementById("pos");

btnEnv.addEventListener("click", () => {
  let posicionLlegada: number = Number(posicion.value);
  switch (posicionLlegada) {
    case 1:
      console.log("Entregar medalla de oro");
      break;
    case 2:
      console.log("Entregar medalla de plata");
      break;
    case 3:
      console.log("Entregar medalla de bronce");
      break;
    default:
      console.log("Entregar mención de participación");
  }
  /* if (posicionLlegada === 1) {
    console.log("Entregar medalla de oro");
  } else {
    if (posicionLlegada === 2) {
      console.log("Entregar medalla de plata");
    } else {
      if (posicionLlegada === 3) {
        console.log("Entregar medalla de bronce");
      } else {
        console.log("Entregar mención de participación");
      }
    }
  }
*/
  //}
});
