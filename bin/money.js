#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "node:url";
import getStatistics from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = process.argv[2];

const content = fs.readFileSync(path.join(__dirname, '..', '__fixtures__', fileName), 'utf-8');

getStatistics(content);