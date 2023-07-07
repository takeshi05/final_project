$(document).ready(function() {
  var terminalInput = $('#terminal-input');
  var terminalOutput = $('#terminal-output');

  $('#submitBtn').click(function(event) {
    event.preventDefault();
    var command = terminalInput.val();
    terminalInput.val('');

    terminalOutput.append('<div class="command">$ ' + command + '</div>');

    switch (command) {
      case 'about':
        terminalOutput.append('<div>Hai, Saya Dimas Alfa Pratama.</div>');
        terminalOutput.append('<div>I am a script kiddie.</div>');

terminalOutput.append('<div>Buat info lebih lengkap klik menu "about" di bagian header</div>');
        break;
      case 'experiences':
terminalOutput.append('<div> Pengalaman bekerja saya:</div>');
        terminalOutput.append('<div>- Web development intern di Bank BCA</div>');
        terminalOutput.append('<div>- Freelance web developer untuk Microsoft</div>');
        terminalOutput.append('<div>Untuk info lebih lengkap klik menu "experiences" di bagian header</div>');
        break;
      case 'education':
        terminalOutput.append('<div>Riwayat Pendidikan saya:</div>');
        terminalOutput.append('<div>- SMK Islamiyah Ciputat</div>');
        terminalOutput.append('<div>- Web Development Bootcamp</div>');
        terminalOutput.append('<div>Untuk info lebih lengkap klik menu "educational" di bagian header</div>');
        break;
      case 'skills':
        terminalOutput.append('<div>Kemampuan saya:</div>');
        terminalOutput.append('<div>- HTML5</div>');
        terminalOutput.append('<div>- CSS3</div>');
        terminalOutput.append('<div>- JavaScript</div>');
        terminalOutput.append('<div>- jQuery</div>');
        terminalOutput.append('<div>Untuk info lebih lengkap klik menu "Skills" di bagian header</div>');
        break;
      case 'interests':
        terminalOutput.append('<div>interests saya adalah :</div>');
        terminalOutput.append('<div>- Web development</div>');
        terminalOutput.append('<div>- Technology</div>');
        terminalOutput.append('<div>- Gaming</div>');
        terminalOutput.append('<div>Untuk info lebih lengkap klik menu "interests" di bagian header</div>');
        break;
      case 'award':
        terminalOutput.append('<div>Berikut adalah penghargaan saya:</div>');
        terminalOutput.append('<div>- Best Web Developer Award (2019)</div>');
        terminalOutput.append('<div>- Outstanding Achievement in Web Design (2017)</div>');

terminalOutput.append('<div>Penghargaan diatas cuma contoh :v</div>');
        terminalOutput.append('<div>Untuk info lebih lengkap klik "awards" pada bagian header</div>');
        break;
      case 'help':
        terminalOutput.append('<div>Available commands:</div>');
        terminalOutput.append('<div>- about: Display information about me</div>');
        terminalOutput.append('<div>- experiences: Show my work experiences</div>');
        terminalOutput.append('<div>- education: Display my educational background</div>');
        terminalOutput.append('<div>- skills: List my skills</div>');
        terminalOutput.append('<div>- interests: Show my interests</div>');
        terminalOutput.append('<div>- award: Display my awards</div>');
        break;
      default:
        terminalOutput.append('<div>Command not found. Type "help" for a list of available commands.</div>');
        break;
    }

    terminalOutput.scrollTop(terminalOutput[0].scrollHeight);
  });
});