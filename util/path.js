const path = require("path");

export const absPath = path.dirname(require.main.filename);
export const modelPath = path.join(absPath, "model");
export const controllerPath = path.join(absPath, "controllers");
export const routesPath = path.join(absPath, "routes");
export const viewsPath = path.join(views, "model");
