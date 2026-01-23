async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const posicion = { lat: -34.6037, lng: -58.3816 }; // Obelisco

  const map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: posicion,
    mapId: "DEMO_MAP_ID",
  });

  new AdvancedMarkerElement({
    map,
    position: posicion,
    title: "Mi ubicación",
  });
}
