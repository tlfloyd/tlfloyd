import mysql.connector
from tabulate import tabulate
from datetime import datetime
import sys


class db:
    def __init__(self):
        self.conn = None
        self.cursor = None
        self.open_database('turing.csce.uark.edu', 'sethtowe', 'poo2Eez1', 'sethtowe')


    def open_database(self, host, user, password, database):
        self.conn = mysql.connector.connect(
            host=host,
            user=user, 
            password=password, 
            database=database
        )
        self.cursor = self.conn.cursor()
        
        
    def add_game(self):
        #Game: GameId, TeamId1, TeamId2, Score1, Score2, Date

        home_team = input("Enter the home team: ")
        away_team = input("Enter the away team: ")
        date = input("Enter the date (YYYY-MM-DD): ")
        home_score = input("Enter the home team's score: ")
        away_score = input("Enter the away team's score: ")
        #Gets the next highest GameID
        self.cursor.execute("SELECT MAX(GameId) as HighestGameId FROM Game")
        Game_ID = self.cursor.fetchone()[0]
        Game_ID += 1
        #Gets the corresponding IDs from the team names
        self.cursor.execute(f"SELECT TeamId FROM Team WHERE Nickname = '{home_team}'")
        home_team_ID = self.cursor.fetchone()[0]
        self.cursor.execute(f"SELECT TeamId FROM Team WHERE Nickname = '{away_team}'")
        away_team_ID = self.cursor.fetchone()[0]
        #Inserts the data into the table
        self.cursor.execute(f"INSERT INTO Game VALUES ('{Game_ID}','{home_team_ID}', '{away_team_ID}', '{home_score}', '{away_score}', '{date}')")
        self.conn.commit()
        print("Game added successfully.")
        print()
    
    def add_player(self):
        #Player: PlayerId, TeamId, Name, Position

        team_name = input("Enter the team the player is on: ")
        player_name = input("Enter the name of the player: ")
        player_position = input("Enter the positon the player plays: ")
        #Gets the next highest playerID
        self.cursor.execute("SELECT MAX(PlayerId) AS HighestPlayerId FROM Player")
        player_ID = self.cursor.fetchone()[0]
        player_ID += 1
        #Gets the corresponding teamId from the inserted teamname
        self.cursor.execute(f"SELECT TeamId FROM Team WHERE Nickname = '{team_name}'")
        team_Id = self.cursor.fetchone()[0]
        #Inserts the data into the table
        self.cursor.execute(f"INSERT into Player VALUES ('{player_ID}','{team_Id}','{player_name}' ,'{player_position}')")
        self.conn.commit()
        print("Player added successfully.")
        print(tabulate([[player_ID, team_Id, player_name, player_position]], headers=['PlayerId', 'TeamId', 'Name', 'Position']))
    
    def view_players_on_team(self):
        team_name = input("Enter a team name: ")
        self.cursor.execute(f"SELECT TeamId FROM Team WHERE Nickname = '{team_name}'")
        team_id = self.cursor.fetchone()[0]
        self.cursor.execute(f"SELECT * FROM Player WHERE TeamId = '{team_id}'")
        players = self.cursor.fetchall()
        print(tabulate(players, headers=['PlayerId', 'TeamId', 'Name', 'Position']))
        
        
    
    def view_players_in_position(self):
        """
        View all players in a position
        """
        position = input("Enter a position: ")
        self.cursor.execute(f"SELECT * FROM Player WHERE Position = '{position}'")
        players = self.cursor.fetchall()
        print(tabulate(players, headers=['PlayerId', 'TeamId', 'Name', 'Position']))
    
    def view_teams_by_conference(self):
        """
        view all teams arranged by conference (alphabetically) and then by win rate
        """
        
        # Need to add win rate order within each conference
        self.cursor.execute("SELECT * FROM Team ORDER BY Conference, Location, Nickname")
        teams = self.cursor.fetchall()
        print(tabulate(teams, headers=['TeamId', 'Location', 'Nickname', 'Conference']))
    
    def view_games_by_team(self):
    # # View all games played by a given team (display the Team location, their nickname, and each result. Include their opponent's location and nickame, the date of the game, and the score. Indicate whether the won or lost.)
        team = input("Enter a team name: ")
        self.cursor.execute("SELECT TeamId, Location, Nickname FROM Team WHERE Nickname = %s", (team,))
        team_info = self.cursor.fetchone()
        
        if team_info:
            team_id, team_location, team_nickname = team_info
            self.cursor.execute("SELECT * FROM Game WHERE TeamId1 = %s OR TeamId2 = %s", (team_id, team_id))
            games = self.cursor.fetchall()
            
            print(f"Games played by {team_nickname} ({team_location}):")
            for game in games:
                if game[2] == team_id:
                    opponent_id = game[1]
                else:
                    opponent_id = game[2]
                
                self.cursor.execute("SELECT Location, Nickname FROM Team WHERE TeamId = %s", (opponent_id,))
                opponent_location, opponent_nickname = self.cursor.fetchone()
                
                print(f"{team_nickname} vs {opponent_nickname} at {game[5]}")
                print(f"Location: {team_location} (Home) - {opponent_location} (Away)")
                print(f"Score: {game[3]}-{game[4]}")
                
                if game[3] > game[4]:
                    print(f"Winner: {team_nickname}")
                elif game[3] < game[4]:
                    print(f"Winner: {opponent_nickname}")
                else:
                    print("Tie")
                
                print()
        else:
            print("Team not found.")
    
    def view_results_by_date(self):
        date = input("Enter a date (YYYY-MM-DD): \n")
        self.cursor.execute(f"SELECT g.*, home_team.Nickname AS home_nickname, home_team.Location AS home_location, away_team.Nickname AS away_nickname, away_team.Location AS away_location FROM Game g JOIN Team home_team ON g.TeamId1 = home_team.TeamId JOIN Team away_team ON g.TeamId2 = away_team.TeamId WHERE g.Date = '{date}'")
        games = self.cursor.fetchall()
        
        for game in games:
            print(f"{game[6]} vs {game[9]} at {game[5]}")
            print(f"Location: {game[7]} (Home) - {game[8]} (Away)")
            print(f"Score: {game[3]}-{game[4]}")
            if game[3] > game[4]:
                print(f"Winner: {game[6]}")
            elif game[3] < game[4]:
                print(f"Winner: {game[9]}")
            else:
                print("Tie")

            print()
    
    
    def close_database(self):
        self.conn.close()
        self.cursor.close()