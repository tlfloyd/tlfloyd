"use strict";

async function submitForm() {
    try {
        var form = document.getElementById("myForm");
        var formData = new FormData(form);
        var jsonObject = {};

        formData.forEach(function(value, key){
            jsonObject[key] = value;
        });

        const response = await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonObject)
        });

        if (response.ok) {
            console.log("Form data submitted successfully");
        } else {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log(data);

        
    } catch (error) {
        console.error("Error:", error);
    }

    blank();
}

function blank() {
    var s = [];
    var content = document.getElementById('inputs');
    content.innerHTML = s.join('');
}

function addGameScreen() {
    var s = [];
    s.push("<form id=\"myForm\">");
    s.push("<b class=\"topText\">Add Game:</b>");
    s.push("<p>");
    s.push("<label for=\"teamId1\">Team 1 ID:</label>");
    s.push("<input type=\"text\" id=\"teamId1\" name=\"teamId1\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<label for=\"teamId2\">Team 2 ID:</label>");
    s.push("<input type=\"text\" id=\"teamId2\" name=\"teamId2\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<label for=\"score1\">Team 1 Score:</label>");
    s.push("<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<label for=\"score2\">Team 2 Score:</label>");
    s.push("<input type=\"text\" id=\"score2\" name=\"score2\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<label for=\"date\">Date:</label>");
    s.push("<input type=\"text\" id=\"date\" name=\"date\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>");
    s.push("</p>");
    s.push("</form>");
    
    var content = document.getElementById('inputs');
    content.innerHTML = s.join('');
}

function addPlayerScreen() {
    var s = [];
    s.push("<form id=\"myForm\">");
    s.push("<b class=\"topText\">Add Player:</b>");
    s.push("<p>");
    s.push("<label for=\"teamID\">Team ID:</label>");
    s.push("<input type=\"text\" id=\"teamID\" name=\"teamID\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<label for=\"name\">Name:</label>");
    s.push("<input type=\"text\" id=\"name\" name=\"name\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<label for=\"position\">Position:</label>");
    s.push("<input type=\"text\" id=\"position\" name=\"position\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>");
    s.push("</p>");
    s.push("</form>");

    var content = document.getElementById('inputs');
    content.innerHTML = s.join('');
}

function viewPlayersTeamScreen() {
    var s = [];
    s.push("<form id=\"myForm\">");
    s.push("<b class=\"topText\">View Players:</b>");
    s.push("<p>");
    s.push("<label for=\"teamID\">Team ID:</label>");
    s.push("<input type=\"text\" id=\"teamID\" name=\"teamID\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>");
    s.push("</p>");
    s.push("</form>");

    var content = document.getElementById('inputs');
    content.innerHTML = s.join('');
}

function viewPlayersPositionScreen() {
    var s = [];
    s.push("<form id=\"myForm\">");
    s.push("<b class=\"topText\">View Players:</b>");
    s.push("<p>");
    s.push("<label for=\"position\">Position:</label>");
    s.push("<input type=\"text\" id=\"position\" name=\"position\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>");
    s.push("</p>");
    s.push("</form>");

    var content = document.getElementById('inputs');
    content.innerHTML = s.join('');
}

function viewTeamsScreen() {
    var s = [];
    
    var content = document.getElementById('inputs');
    content.innerHTML = s.join('');
}

function viewGamesByTeamScreen() {
    var s = [];
    s.push("<form id=\"myForm\">");
    s.push("<b class=\"topText\">View Games by Team:</b>");
    s.push("<p>");
    s.push("<label for=\"teamId\">Team ID:</label>");
    s.push("<input type=\"text\" id=\"teamId\" name=\"teamId\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>");
    s.push("</p>");
    s.push("</form>");

    var content = document.getElementById('inputs');
    content.innerHTML = s.join('');
}

function viewGamesByDateScreen() {
    var s = [];
    s.push("<form id=\"myForm\">");
    s.push("<b class=\"topText\">View Results by Date:</b>");
    s.push("<p>");
    s.push("<label for=\"date\">Date:</label>");
    s.push("<input type=\"text\" id=\"date\" name=\"date\"><br><br>");
    s.push("</p>");
    s.push("<p>");
    s.push("<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>");
    s.push("</p>");
    s.push("</form>");

    var content = document.getElementById('inputs');
    content.innerHTML = s.join('');
}

function addGame(added) {
    if (added) {
        var s = [];
        s.push("<b class=\"topText\">Game Added</b>");
        var content = document.getElementById('inputs');
        content.innerHTML = s.join('');
    }
    else if (!added) {
        var s = [];
        s.push("<b class=\"topText\">Error Adding Game</b>");
        var content = document.getElementById('inputs');
        content.innerHTML = s.join('');
    }
}

function addPlayer(added) {
    if (added) {
        var s = [];
        s.push("<b class=\"topText\">Player Added</b>");
        var content = document.getElementById('inputs');
        content.innerHTML = s.join('');
    }
    else if (!added) {
        var s = [];
        s.push("<b class=\"topText\">Error Adding Player</b>");
        var content = document.getElementById('inputs');
        content.innerHTML = s.join('');
    }
}

function viewPlayersTeam() {
    
}