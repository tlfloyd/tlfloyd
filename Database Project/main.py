import mysql.connector
from tabulate import tabulate
from datetime import datetime
import sys

def menu(db, choice):
        if choice == '1':
            db.addGame()
        elif choice == '2':
            db.addPlayer()
        elif choice == '3':
            db.viewPlayersFromTeam()
        elif choice == '4':
            db.viewPlayersFromPosition()
        elif choice == '5':
            db.viewTeamsbyConference()
        elif choice == '6':
            db.viewGamesFromTeam()
        elif choice == '7':
            db.viewResultsFromDate()
        elif choice == '8':
            db.viewTeamScores()
        elif choice == '9':
            db.close_database()
        else:
            print("Invalid choice")
            return


class db:
    def __init__(self):
        self.conn = None
        self.cursor = None
        self.open_database('turing.csce.uark.edu', 'tlfloyd', 'EiFemae3', 'tlfloyd')


    def open_database(self, host, user, password, database):
        self.conn = mysql.connector.connect(
            host=host,
            user=user, 
            password=password, 
            database=database
        )
        self.cursor = self.conn.cursor()
        
        
    def addGame(self):
        homeTeam = sys.argv[2]
        awayTeam = sys.argv[3]
        date = sys.argv[4]
        homeTeamScore = sys.argv[5]
        awayTeamScore = sys.argv[6]
        #Gets the next highest GameID
        self.cursor.execute("SELECT MAX(GameId) as HighestGameId FROM Game")
        gameId = self.cursor.fetchone()[0]
        gameId += 1
        #Gets the corresponding IDs from the team names
        self.cursor.execute(f"SELECT TeamId FROM Team WHERE Nickname = '{homeTeam}'")
        homeTeamId = self.cursor.fetchone()[0]
        self.cursor.execute(f"SELECT TeamId FROM Team WHERE Nickname = '{awayTeam}'")
        awayTeamId = self.cursor.fetchone()[0]
        #Inserts the data into the table
        self.cursor.execute(f"INSERT INTO Game VALUES ('{gameId}','{homeTeamId}', '{awayTeamId}', '{homeTeamScore}', '{awayTeamScore}', '{date}')")
        self.conn.commit()
        print("Game added successfully.")
    
    def addPlayer(self):
        teamName = sys.argv[2]
        playerName = sys.argv[3]
        position = sys.argv[4]
        #Gets the next highest playerID
        self.cursor.execute("SELECT MAX(PlayerId) AS HighestPlayerId FROM Player")
        playerId = self.cursor.fetchone()[0]
        playerId += 1
        #Gets the corresponding teamId from the inserted teamname
        self.cursor.execute(f"SELECT TeamId FROM Team WHERE Nickname = '{teamName}'")
        teamId = self.cursor.fetchone()[0]
        #Inserts the data into the table
        self.cursor.execute(f"INSERT into Player VALUES ('{playerId}','{teamId}','{playerName}' ,'{position}')")
        self.conn.commit()
        print(tabulate([[playerId, teamId, playerName, position]], headers=['PlayerId', 'TeamId', 'Name', 'Position'], tablefmt="html"))
    
    def viewPlayersFromTeam(self):
        teamName = sys.argv[2]
        self.cursor.execute(f"SELECT TeamId FROM Team WHERE Nickname = '{teamName}'")
        teamId = self.cursor.fetchone()[0]
        self.cursor.execute(f"SELECT * FROM Player WHERE TeamId = '{teamId}'")
        players = self.cursor.fetchall()
        print(tabulate(players, headers=['PlayerId', 'TeamId', 'Name', 'Position'], tablefmt="html"))
        
    def viewPlayersFromPosition(self):
        position = sys.argv[2]
        self.cursor.execute(f"SELECT * FROM Player WHERE Position = '{position}'")
        players = self.cursor.fetchall()
        print(tabulate(players, headers=['PlayerId', 'TeamId', 'Name', 'Position'], tablefmt="html"))
    
    def viewTeamsbyConference(self):
        mysqlQuery = """
        SELECT t.TeamId, t.Location, t.Nickname, t.Conference,
               COUNT(CASE WHEN g.Score1 > g.Score2 THEN 1 END) +
               COUNT(CASE WHEN g.Score1 = g.Score2 THEN 0.5 END) AS Wins
        FROM Team t
        LEFT JOIN Game g ON t.TeamId = g.TeamId1 OR t.TeamId = g.TeamId2
        GROUP BY t.TeamId
        ORDER BY t.Conference, Wins DESC
        """
    
        self.cursor.execute(mysqlQuery)
        teams = self.cursor.fetchall()
        print(tabulate(teams, headers=['TeamId', 'Location', 'Team Name', 'Conference', 'Wins'], tablefmt="html"))
    
    def viewGamesFromTeam(self):
        team = sys.argv[2]  # Get the team nickname from the command-line arguments
        self.cursor.execute("SELECT TeamId, Location, Nickname FROM Team WHERE Nickname = %s", (team,))
        teamInfo = self.cursor.fetchone()

        if teamInfo:
            teamId, teamLocation, teamNickname = teamInfo
            self.cursor.execute("SELECT * FROM Game WHERE TeamId1 = %s OR TeamId2 = %s", (teamId, teamId))
            games = self.cursor.fetchall()

            # List to store game data for tabulation
            tabData = []

            for game in games:
                if game[2] == teamId:
                    enemyId = game[1]
                else:
                    enemyId = game[2]

                self.cursor.execute("SELECT Location, Nickname FROM Team WHERE TeamId = %s", (enemyId,))
                enemyLocation, enemyNickname = self.cursor.fetchone()

                score = f"{game[3]}-{game[4]}"
                winner = (
                    teamNickname if game[3] > game[4]
                    else enemyNickname if game[3] < game[4]
                    else "Tie"
                )

                tabData.append({
                    "Game": f"{teamNickname} vs {enemyNickname}",
                    "Location": f"{teamLocation} (Home) - {enemyLocation} (Away)",
                    "Date": game[5],
                    "Score": score,
                    "Winner": winner,
                })

            # Print the tabulated data
            print(tabulate(tabData, headers="keys", tablefmt="html"))

        else:
            print("Team not found.")
    
    def viewResultsFromDate(self):
        date = sys.argv[2]
        self.cursor.execute(f"SELECT g.*, homeTeam.Nickname AS home_nickname, homeTeam.Location AS home_location, awayTeam.Nickname AS away_nickname, awayTeam.Location AS away_location FROM Game g JOIN Team homeTeam ON g.TeamId1 = homeTeam.TeamId JOIN Team awayTeam ON g.TeamId2 = awayTeam.TeamId WHERE g.Date = '{date}'")
        games = self.cursor.fetchall()
        
        tabData = []

        for game in games:
            team1, team2 = game[6], game[9]
            score = f"{game[3]}-{game[4]}"
            winner = (
                team1 if game[3] > game[4]
                else team2 if game[3] < game[4]
                else "Tie"
            )
            location = f"{game[7]} (Home) - {game[8]} (Away)"

            tabData.append({
                "Game": f"{team1} vs {team2}",
                "Location": location,
                "Score": score,
                "Winner": winner,
            })

        # Tabulating and printing the data with appropriate headers
        print(tabulate(tabData, headers="keys", tablefmt="html"))
        
        
    def viewTeamScores(self):
        # Query to fetch total points and average points per game for each team
        mysqlQuery = """
            SELECT t.Nickname, t.Location, 
                AVG(CASE WHEN g.TeamId1 = t.TeamId THEN g.Score1 ELSE g.Score2 END) AS AveragePointsPerGame
            FROM Team t
            LEFT JOIN Game g ON t.TeamId = g.TeamId1 OR t.TeamId = g.TeamId2
            GROUP BY t.TeamId
            ORDER BY AveragePointsPerGame DESC
        """
        
        self.cursor.execute(mysqlQuery)
        teamsScore = self.cursor.fetchall()
        print(tabulate(teamsScore, headers=['Name', 'Location', 'AveragePointsPerGame'], tablefmt= "html"))



    
    def close_database(self):
        self.conn.close()
        self.cursor.close()
        

if __name__ == '__main__':
    db = db()
    db.open_database('turing.csce.uark.edu', 'tlfloyd', 'EiFemae3', 'tlfloyd')
    
    choice = sys.argv[1]
    menu(db, choice)