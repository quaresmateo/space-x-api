// src/main/config/module-alias.ts
import { addAlias } from 'module-alias'
import { join } from 'path'

addAlias('@', join(__dirname, '/../../'))
