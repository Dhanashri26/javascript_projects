
window.addEventListener("load", checkInternetConnection);

function checkInternetConnection() {
    const connectionStatusText = document.getElementById("connectionStatusText");
    const ipAddressText = document.getElementById("ipAddressText");
    const networkStrengthText = document.getElementById("networkStrengthText");
    // var connectionStatus = navigator.onLine

    connectionStatusText.textContent = 'Checking...';

    if (navigator.onLine) {
        // Check if the user is connected to a network
        fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {

                ipAddressText.textContent = data.ip;
                connectionStatusText.textContent = "Connected";

                const connection = navigator.connection;

                const networkStrength = connection ? connection.downlink + 'Mbps' : 'Unknown';
                networkStrengthText.textContent = networkStrength;

            })
            .catch(() => {
                connectionStatusText.textContent = 'Disconnected';
                ipAddressText.textContent = '-';
                networkStrengthText.textContent = '-';

            })
    }
    else {
        connectionStatusText.textContent = 'Disconnected';
        ipAddressText.textContent = '-';
        networkStrengthText.textContent = '-';
    }
}