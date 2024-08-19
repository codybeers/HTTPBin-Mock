document.getElementById('get-ip').addEventListener('click', function() {
    const ip = '192.168.1.1'; // Mock IP address
    document.getElementById('output').innerText = `Your IP is: ${ip}`;
});