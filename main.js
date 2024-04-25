"use strict";

async function submitForm() {
    try {
        var form = document.getElementById("myForm");
        var formData = new FormData(form);
        var jsonObject = {};

        formData.forEach(function(value, key){
            jsonObject[key] = value;
        });

        const response = await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonObject)
        });

        if (response.ok) {
            console.log("Form data submitted successfully");
        } else {
            console.error("Error submitting form data");
        }
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
    s.push("<form id=\"myForm\">\n<b class=\"topText\">Add Game:</b>\n<p>\n<label for=\"teamId1\">Team 1 ID:</label>\n<input type=\"text\" id=\"teamId1\" name=\"teamId1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"teamId2\">Team 2 ID:</label>\n<input type=\"text\" id=\"teamId2\" name=\"teamId2\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>");
    s.push("\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"score2\">Team 2 Score:</label>\n<input type=\"text\" id=\"score2\" name=\"score2\"><br><br>\n</p>\n<p>\n<label for=\"date\">Date:</label>\n<input type=\"text\" id=\"date\" name=\"date\"><br><br>");
    s.push("\n</p>\n<p>\n<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>\n</p>\n</form>");
    
    var content = document.getElementById('inputs');
    content.innerHTML = s.join('')
}

function addPlayerScreen() {
    var s = [];
    s.push("<form id=\"myForm\">\n<b class=\"topText\">Add Game:</b>\n<p>\n<label for=\"teamId1\">Team 1 ID:</label>\n<input type=\"text\" id=\"teamId1\" name=\"teamId1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"teamId2\">Team 2 ID:</label>\n<input type=\"text\" id=\"teamId2\" name=\"teamId2\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>");
    s.push("\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"score2\">Team 2 Score:</label>\n<input type=\"text\" id=\"score2\" name=\"score2\"><br><br>\n</p>\n<p>\n<label for=\"date\">Date:</label>\n<input type=\"text\" id=\"date\" name=\"date\"><br><br>");
    s.push("\n</p>\n<p>\n<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>\n</p>\n</form>");
    
    var content = document.getElementById('inputs');
    content.innerHTML = s.join('')
}

function viewPlayersTeamScreen() {
    var s = [];
    s.push("<form id=\"myForm\">\n<b class=\"topText\">Add Game:</b>\n<p>\n<label for=\"teamId1\">Team 1 ID:</label>\n<input type=\"text\" id=\"teamId1\" name=\"teamId1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"teamId2\">Team 2 ID:</label>\n<input type=\"text\" id=\"teamId2\" name=\"teamId2\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>");
    s.push("\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"score2\">Team 2 Score:</label>\n<input type=\"text\" id=\"score2\" name=\"score2\"><br><br>\n</p>\n<p>\n<label for=\"date\">Date:</label>\n<input type=\"text\" id=\"date\" name=\"date\"><br><br>");
    s.push("\n</p>\n<p>\n<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>\n</p>\n</form>");
    
    var content = document.getElementById('inputs');
    content.innerHTML = s.join('')
}

function viewPlayersPositionScreen() {
    var s = [];
    s.push("<form id=\"myForm\">\n<b class=\"topText\">Add Game:</b>\n<p>\n<label for=\"teamId1\">Team 1 ID:</label>\n<input type=\"text\" id=\"teamId1\" name=\"teamId1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"teamId2\">Team 2 ID:</label>\n<input type=\"text\" id=\"teamId2\" name=\"teamId2\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>");
    s.push("\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"score2\">Team 2 Score:</label>\n<input type=\"text\" id=\"score2\" name=\"score2\"><br><br>\n</p>\n<p>\n<label for=\"date\">Date:</label>\n<input type=\"text\" id=\"date\" name=\"date\"><br><br>");
    s.push("\n</p>\n<p>\n<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>\n</p>\n</form>");
    
    var content = document.getElementById('inputs');
    content.innerHTML = s.join('')
}

function viewTeamsScreen() {
    var s = [];
    s.push("<form id=\"myForm\">\n<b class=\"topText\">Add Game:</b>\n<p>\n<label for=\"teamId1\">Team 1 ID:</label>\n<input type=\"text\" id=\"teamId1\" name=\"teamId1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"teamId2\">Team 2 ID:</label>\n<input type=\"text\" id=\"teamId2\" name=\"teamId2\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>");
    s.push("\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"score2\">Team 2 Score:</label>\n<input type=\"text\" id=\"score2\" name=\"score2\"><br><br>\n</p>\n<p>\n<label for=\"date\">Date:</label>\n<input type=\"text\" id=\"date\" name=\"date\"><br><br>");
    s.push("\n</p>\n<p>\n<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>\n</p>\n</form>");
    
    var content = document.getElementById('inputs');
    content.innerHTML = s.join('')
}

function viewGamesByTeamScreen() {
    var s = [];
    s.push("<form id=\"myForm\">\n<b class=\"topText\">Add Game:</b>\n<p>\n<label for=\"teamId1\">Team 1 ID:</label>\n<input type=\"text\" id=\"teamId1\" name=\"teamId1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"teamId2\">Team 2 ID:</label>\n<input type=\"text\" id=\"teamId2\" name=\"teamId2\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>");
    s.push("\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"score2\">Team 2 Score:</label>\n<input type=\"text\" id=\"score2\" name=\"score2\"><br><br>\n</p>\n<p>\n<label for=\"date\">Date:</label>\n<input type=\"text\" id=\"date\" name=\"date\"><br><br>");
    s.push("\n</p>\n<p>\n<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>\n</p>\n</form>");
    
    var content = document.getElementById('inputs');
    content.innerHTML = s.join('')
}

function viewGamesByDateScreen() {
    var s = [];
    s.push("<form id=\"myForm\">\n<b class=\"topText\">Add Game:</b>\n<p>\n<label for=\"teamId1\">Team 1 ID:</label>\n<input type=\"text\" id=\"teamId1\" name=\"teamId1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"teamId2\">Team 2 ID:</label>\n<input type=\"text\" id=\"teamId2\" name=\"teamId2\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>");
    s.push("\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>\n</p>\n<p>\n<label for=\"score1\">Team 1 Score:</label>\n<input type=\"text\" id=\"score1\" name=\"score1\"><br><br>");
    s.push("\n</p>\n<p>\n<label for=\"score2\">Team 2 Score:</label>\n<input type=\"text\" id=\"score2\" name=\"score2\"><br><br>\n</p>\n<p>\n<label for=\"date\">Date:</label>\n<input type=\"text\" id=\"date\" name=\"date\"><br><br>");
    s.push("\n</p>\n<p>\n<button class=\"submitButton\" type=\"button\" onclick=\"submitForm()\">Submit</button>\n</p>\n</form>");
    
    var content = document.getElementById('inputs');
    content.innerHTML = s.join('')
}