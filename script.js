var cards = document.querySelectorAll('.flip-card');
cards.forEach(card => {
    card.addEventListener( 'click', function() {
      if(card.classList.contains('is-flipped') === false) {
        var answer = prompt('Your answer is ...', "");
        
          if (answer.toLowerCase() === 'hulk' || answer.toLowerCase() === 'dumbledore') {
            card.classList.toggle('is-flipped');
          } else {
            card.classList.toggle('invalid');
          }
      } else {
        card.classList.toggle('is-flipped');
      }
    });
});