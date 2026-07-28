document.addEventListener('DOMContentLoaded', () => {
    const ahora = new Date();

    // obtener el día en la CDMX 
    const diaCDMX = ahora.toLocaleDateString('en-US', {
        timeZone: 'America/Mexico_City',
        weekday: 'short'
    });

    // obtener la hora  en la CDMX
    const horaCDMXStr = ahora.toLocaleTimeString('en-US', {
        timeZone: 'America/Mexico_City',
        hour12: false,
        hour: '2-digit'
    });
    const horaCDMX = parseInt(horaCDMXStr, 10);
    const esFinDeSemana = diaCDMX === 'Sat' || diaCDMX === 'Sun';
    const esHoraLaboral = horaCDMX >= 9 && horaCDMX < 18;
    const esHorarioLaboral = !esFinDeSemana && esHoraLaboral;

    const statusText = document.getElementById('status-text');
    const statusIcon = document.getElementById('status-icon');

    if (statusText && statusIcon) {
        statusText.innerText = esHorarioLaboral ? 'ONLINE' : 'OFFLINE';
        statusIcon.style.color = esHorarioLaboral ? '#28a745' : '#dc3545';
    }
});