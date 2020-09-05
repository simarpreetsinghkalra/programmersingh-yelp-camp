
IF EXIST build (
rmdir /q/s build && npm run tsc && mkdir build\views && xcopy src\views\ build\views /e/c && node build\app.js
) ELSE (
npm run tsc && mkdir build\views && xcopy src\views\ build\views /e/c && node build\app.js
)