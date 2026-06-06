const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("send-location", {latitude,longitude,});
        },
        (error) => {
            console.error("Geolocation Error:", error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );
}

const map = L.map("map").setView([0, 0], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
}).addTo(map);

const markers = {};
let mapCentered = false;

socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;

    console.log("Location:", id, latitude, longitude);

    if (!mapCentered) {
        map.setView([latitude, longitude], 15);
        mapCentered = true;
    }

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup(`User: ${id.substring(0, 6)}`);
    }
});

socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
