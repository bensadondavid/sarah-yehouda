'use client'

const Waze = ({ name, lat, long }: {name:string, lat: string, long:string}) => {


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
    <button className={name} onClick={handleOpenWaze}>Itineraire Waze</button>
  );
};

export default Waze;