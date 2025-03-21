function playGame(game) {
  switch (game) {
    case "subway":
      window.location.href = "games/subway/index.html";
      break;
    case "candy":
      window.location.href = "games/candy/index.html";
      break;
    case "flappy":
      window.location.href = "games/flappy/index.html";
      break;
    case "tic-tac-toe":
      window.location.href = "games/tic-tac-toe/index.html";
      break;
    default:
      alert("عذرًا، اللعبة غير متوفرة!");
  }
}
