//date object to show actual date on site by copyright icon.
var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('footer');
el.innerHTML += '<p>Artykuły pisane, umieszczone na stronie www.oswietlenieilampy.pl i jej subdomenach są własnością firmy Instalatorstwo Elektryczne i Pomiary Kontrolne Marek Świątek. Rozpowszechnianie ich, jest zabronione. </p><p><i class="far fa-copyright"></i> Copyright ' + year + '.</p>';

