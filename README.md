# chess_game



Overview

This project is an advanced, chess-like game that allows two players to compete on a 5x5 grid. Players take turns moving their characters with the goal of eliminating all of the opponent's characters.
Game Logic
Character Types & Movement

    Pawn: Moves one block in any direction (Left, Right, Forward, or Backward).
        Command: <character_name>:<move> (e.g., P1:L).
    Hero1: Moves two blocks straight in any direction, capturing any opponent’s character in its path.
        Command: <character_name>:<move> (e.g., H1:F).
    Hero2: Moves two blocks diagonally, capturing any opponent’s character in its path.
        Command: <character_name>:<move> (e.g., H2:FL).

Game Flow

    Initial Setup: Players place their 5 characters on the starting row.
    Turns: Players alternate turns, moving one character per turn.
    Combat: Characters capture opponent pieces by moving to their occupied space. Heroes capture any piece in their path.
    Winning: The game ends when a player eliminates all of the opponent's characters. The game then declares the winner and disables further moves.

WebSocket Communication

    Connection: Players connect via WebSockets. The game starts when two players are connected.
    Messages:
        start: Initiates the game.
        move: Communicates the player's move to the server, which updates and broadcasts the game state.
        game_over: Indicates the winning player, and the game board is disabled.

Project Structure

    index.html: The main HTML page with the game interface.
    style.css: CSS for styling the game UI.
    script.js: Handles client-side game logic and WebSocket communication.
    server.js: Node.js server that manages WebSocket connections and game state.
    gameLogic.js: Contains the core game logic on the server-side.

