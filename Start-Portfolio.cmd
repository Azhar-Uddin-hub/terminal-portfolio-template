@echo off
setlocal
cd /d "%~dp0"
title Terminal Portfolio
 echo Starting your portfolio...
 echo Open http://127.0.0.1:3000 after the Ready message appears.
 echo Keep this window open while using the website.
call npm.cmd run dev
pause
