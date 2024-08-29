document.getElementById('showMapBtn').addEventListener('click', function() {
    var mapContainer = document.getElementById('mapContainer');
    
    var locationId = 'biQzAojNHmTQpfqk8'; 

    // Construct the Google Maps Embed URL using your location ID
    var mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.234352235069!2d-122.4024134846811!3d37.78908467975739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809a94c4d9c7%3A0x6bb4f5b8e890c905!2sPike%20Place%20Market!5e0!3m2!1sen!2sus!4v1635328309810!5m2!1sen!2sus`;

    // Show the map container
    mapContainer.style.display = 'block';
    
    // Set the iframe to show the Google Maps location
    mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15438.123624467686!2d121.0974731!3d14.68254245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ba1babc8da7d%3A0x50372c6c70a4e868!2sBatasan%20Hills%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1724071458355!5m2!1sen!2sph" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
});
