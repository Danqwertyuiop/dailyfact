@echo off
start "" fact.html

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from:
    echo https://nodejs.org/
    echo.
    pause
    exit /b
)

node -v
echo ctrl + c or close command window to terminate server
echo server started at http://localhost:3000 and http://localhost:3000/fact
echo information outputted at %~dp0fact.html
node server.js >nul 
pause > nul