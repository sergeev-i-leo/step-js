rd /s /q src
mkdir src
cd src
set location="C:\2025\e-crammers\web-crammer\client-app\src\step-js\core"
call xcopy %location%\ /E /H /C /I /Y *.*

call npm run create

cd ..

rd /s /q src

mkdir src
cd src

mkdir core
cd core
set location="..\..\dist"
call xcopy %location%\ /E /H /C /I /Y *.*
cd ..
cd ..
rd /s /q dist

cd src
mkdir bootstrap-widgets
cd bootstrap-widgets
set location="C:\2025\e-crammers\web-crammer\client-app\src\step-js\bootstrap-widgets"
call xcopy %location%\ /E /H /C /I /Y *.*
cd ..

mkdir views
cd views
set location="C:\2025\e-crammers\web-crammer\client-app\src\step-js\views"
call xcopy %location%\ /E /H /C /I /Y *.*
cd ..

mkdir widgets
cd widgets
set location="C:\2025\e-crammers\web-crammer\client-app\src\step-js\widgets"
call xcopy %location%\ /E /H /C /I /Y *.*
cd ..

