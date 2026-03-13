/**
 * @swagger
 * /api/document-generate:
 *   post:
 *     summary: Generate a document from a dynamic template and data
 *     description: This endpoint processes a dynamic template, replacing placeholders with the provided data and applying optional mappings for customization.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   dev:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: "Emerson Udovic"
 *                       contacts:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             type:
 *                               type: string
 *                               example: "phone"
 *                             contact:
 *                               type: string
 *                               example: "xx-981xx-038x"
 *                             interactions:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   date:
 *                                     type: string
 *                                     format: date-time
 *                                     example: "2024-12-21 05:31:07"
 *                                   contact:
 *                                     type: string
 *                                     example: "Hello!"
 *               template:
 *                 type: string
 *                 example: "Name: <<dev.name>> <<[start_loop|dev.contacts]>> - contact by <<type>>, <<[start_loop|dev.contacts.interactions]>> \n <<dev.contacts.interactions.date>> - <<dev.contacts.interactions.contact>>  <<[end_loop|dev.contacts.interactions]>><<[end_loop|dev.contacts]>>"
 *               map:
 *                 type: object
 *                 properties:
 *                   replace:
 *                     type: object
 *                     properties:
 *                       dev.name:
 *                         type: string
 *                         example: "<b><<dev.name>></b>"
 *     responses:
 *       200:
 *         description: Document generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 result:
 *                   type: string
 *                   example: "Name: <b>Emerson Udovic</b> - contact by phone, \n 2024-12-21 05:31:07 - Hello! \n 2024-12-21 05:31:30 - Go to sleep guy"
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Template and data are required."
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal server error."
 */
