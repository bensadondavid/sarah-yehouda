'use client'

const Waze = ({ name, lat, long, text }: {name:string, lat: string, long:string, text:string}) => {


  const handleOpenWaze = () => {
    // Coordonnées de la destination (latitude et longitude)
    const latitude = lat; 
    const longitude = long;

    // URL pour ouvrir Waze
    const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;

    // Redirection vers l'URL
    window.location.href = wazeUrl;
  };

  return (
    <button className={name} onClick={handleOpenWaze}>{text}</button>
  );
};

export default Waze;