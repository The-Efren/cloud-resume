# Cloud Resume Challenge

## Objective
The goal of this project was to design and deploy a serveles resume website using Microsoft Azure. The project demonstrates core cloud engineer concepts including static website hosting, serverless compute, NoSQL database, API integration, and CI/CD automation.
The system hosts my own personal resume website(https://efrenresumelab.z13.web.core.windows.net/) and includes a dynamic visitor counter that records visits using an Azure Function and Azure Cosmos DB. The project also integrates a GitHub Actions pipeline that automatically deploys website updates to Azure Storage whenever code changes are pushed to the repository.
This project provided me with hands on experience with building and connecting multiple Azure services to create a modern cloud-native architecture.

<img width="781" height="791" alt="cloud-resume-architecture drawio" src="https://github.com/user-attachments/assets/2bd3bf16-2063-47e8-9211-6acd3b116294" />


### Skills Learned

- Designing and deploying a serverless web architecture in Microsoft Azure
- Hosting static websites using Azure Storage
- Building serverless APIs with Azure Functions
- Implementing a NoSQL database using Azure Cosmos DB
- Integrating frontend JavaScript with backend APIs
- Creating automated deployments using GitHub Actions CI/CD pipelines
- Troubleshooting cloud networking, API connectivity, and deployment errors
- Understanding HTTP requests and API communication
  
### Tools Used

- Microsoft Azure Storage (Static Website Hosting)
- Azure Functions (Serverless API)
- Azure Cosmos DB (NoSQL Database)
- GitHub (Source Control)
- GitHub Actions (CI/CD Automation)
- JavaScript Fetch API
- Azure CLI
  
## Steps
<p align="center">
  🚧 <strong>Work In Progress</strong> 🚧 <br>
  This project is actively being updated and improved.
</p>

---

Step 1: Create Azure Storage Account

- Go to https://portal.azure.com/
- Search for "storage accounts" and select create
- Create a new storage account using required configuration
- Select your newly created storage account and go to: Data Management > Static website > Enable Static website > Save.
<img width="2558" height="593" alt="storage" src="https://github.com/user-attachments/assets/55136daf-04fa-4852-9eea-56487b77135c" />
<img width="2558" height="888" alt="Static website" src="https://github.com/user-attachments/assets/c3154465-bfa2-454f-a286-718df8249c7e" />

---

Step 2: Uploade Resume Website Files

- Convert your most up to date resume into HTML code
- Verify the format looks presentable, Use an AI tool to assit with formatting if youre not too familiar with HTML
- Create a CSS and javascript file(you can use the ones in this repository)
- Go to your created storage > Containers > $web > upload > upload the 3 files.
<img width="2540" height="758" alt="code files" src="https://github.com/user-attachments/assets/d26666d4-cfc4-468b-b999-31f0744265dc" />

---

Step 3: Created Azure Cosmos DB

-  Search: Azure Cosmos DB → select "create" → select "Azure Cosmos DB for NoSQL"
-  Fill in required sections then click Review + Create → Create

<img width="2548" height="536" alt="cosmos 1" src="https://github.com/user-attachments/assets/72f9085f-d556-425a-b061-8b577222fd6e" />
<img width="2157" height="827" alt="cosmos 2" src="https://github.com/user-attachments/assets/994282d8-bec1-446a-8d7a-194ddc812ebb" />

---

Step 4: Create Database + Container

-Open your Cosmos DB account → Go to Data Explorer → Click: New Database → Database ID: Resume-db
- Create a container → Container ID: Couner → Partion Key: /id
- Inside your container, click "Items" → New Item and paste:
- JSON

      {
        "id": "1",
        "count": 0
      }

<img width="2143" height="850" alt="container" src="https://github.com/user-attachments/assets/e69ac405-d8d8-484d-a42e-905d00b77c45" />

---

Step 5: Create Azure Function (Backend API) 

- Go to Function App → Create → Consumption (Windows)
- select your newly created function and go to Funcstions → Create → HTTP Trigger
- Enter a Function name and for Authorization level select "Anonymous"
<img width="1056" height="407" alt="function" src="https://github.com/user-attachments/assets/f939f559-9a42-49b5-8c5b-c31f6ee227ae" />

---

Step 6: Connect Function to Cosmos DB

- In your Function App → go to: Settings → Environment Variables
- Add the following: COSMOS_DB_CONNECTION_STRING (keys are found in Cosmos DB → Keys)

---

Stept 7: Write Function Code and Test

<img width="2550" height="1156" alt="code+test" src="https://github.com/user-attachments/assets/1892add8-4906-4a6f-8914-f6fd2385f2e3" />

---

Step 8: Enable CORS

- From your Functiosn app, go to API → CORS
- Add: Your frontend URL (Static Website URL)
<img width="2153" height="1022" alt="CORS" src="https://github.com/user-attachments/assets/2f7cc29d-4ad5-4b7e-93ae-2956a7695ca5" />

Step 9: Connect Frontend to API

-Verify your Javascript file has the following code:

    fetch("YOUR_FUNCTION_URL")
      .then(response => response.json())
      .then(data => {
        document.getElementById("counter").innerText = data.count;
      });

-Verify HTML code has the following string:

    <p>Visitor Count: <span id="counter">Loading...</span></p>

---

Step 10: TEST your website 


    <p>Visitor Count: <span id="counter">Loading...</span></p>
