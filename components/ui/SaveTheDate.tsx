'use client'

// NE PAS OUBLIER D'INSTALLER ICS
import { createEvent } from "ics";

const SaveTheDate = ({ name, date, text }: {name : string, date: [number, number, number, number, number], text:string}) => {

  const handleDownload = () => {
    // Définir les détails de l'événement
    const event = {
      start: date, // [YYYY, MM, DD, HH, MM]
      duration: { hours: 4 },
      title: "Save the Date: Sarah&Yehouda's wedding",
    };

    // Générer le fichier ICS
    createEvent(event, (error, value) => {
      if (error) {
        console.error(error);
        return;
      }

      // Créer un fichier Blob et ouvrir dans Safari
      const blob = new Blob([value], { type: "text/calendar;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      window.location.href = url; // Ouvrir dans Safari
    });
  };

  return (
    <button className={name} onClick={handleDownload}>{text}</button>
  );
};

export default SaveTheDate;