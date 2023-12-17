/**
 * Folders route module
 * @module routes/folders
 */

import { Router } from 'express'

import * as auth from '../../../src/auth.mjs'
import * as foldersController from '../controllers/folders.mjs'
import itemsRouter from './items.mjs'

const router = Router({mergeParams:true})

// Validation middleware
router.use(auth.validateJWT)

// Items router
router.use("/:folder/items", itemsRouter)

// Folders routes
router.get('/:id', foldersController.get)

router.post("/:parent/folders/", foldersController.create)

router.put("/:id", foldersController.update)

router.delete("/:id", foldersController.remove)

router.get('/util/tree', foldersController.tree)

router.post("/:folder/groups/:group", foldersController.addGroup)

router.delete("/:folder/groups/:group", foldersController.removeGroup)

export default router