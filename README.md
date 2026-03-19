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

-  
