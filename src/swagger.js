import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Json2Docs',
            version: '1.0.0',
            description: `
This API dynamically generates documents based on customizable templates and structured data. It allows you to define templates with placeholders, provide corresponding data, and receive a fully rendered document as the output.

### How It Works:
1. **Provide a Template**: A text with placeholders, such as \`<<placeholder>>\`.
2. **Supply Data**: A structured JSON object containing the values for placeholders.
3. **Receive the Document**: A completed document with all placeholders replaced.

---

### Example Input:
**Template**:
\`\`\`
Name: <<dev.name>>
<<[start_loop|dev.contacts]>>
- Contact Type: <<type>>, Number: <<contact>>
  <<[start_loop|interactions]>>
  Date: <<date>> - Message: <<contact>>
  <<[end_loop|interactions]>>
<<[end_loop|dev.contacts]>>
\`\`\`

**Data**:
\`\`\`json
{
  "dev": {
    "name": "Emerson Udovic",
    "contacts": [
      {
        "type": "phone",
        "contact": "xx-981xx-038x",
        "interactions": [
          { "date": "2024-12-21 05:31:07", "contact": "Hello!" },
          { "date": "2024-12-21 05:31:30", "contact": "Go to sleep guy" }
        ]
      }
    ]
  }
}
\`\`\`

---

### Example Output:
\`\`\`
Name: Emerson Udovic
- Contact Type: phone, Number: xx-981xx-038x
  Date: 2024-12-21 05:31:07 - Message: Hello!
  Date: 2024-12-21 05:31:30 - Message: Go to sleep guy
\`\`\`

---

### Use Cases:
- Automated generation of personalized letters, invoices, or reports.
- Simplified document generation for systems handling structured data.
- Dynamic content creation for communication or reporting needs.`,
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/docs/*.js', './src/routes/*.js'], // Ajuste o caminho conforme necessário
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default setupSwagger;
