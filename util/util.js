import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const staticPath = path.join(__dirname, "..", "public");
export const port = 8000;
