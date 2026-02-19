# BookLedger: Building a Book Management App

**BookLedger** is a modern, full-stack web application designed to streamline the management of book collections. Built with performance and scalability in mind, it leverages the robust **ASP.NET Core** framework for the backend and the dynamic **Angular** platform for the frontend to provide a seamless user experience.

## 🚀 Project Overview

The primary goal of BookLedger is to demonstrate a clean, RESTful architecture allowing users to efficiently catalog books. Whether you are a library administrator or a book enthusiast, BookLedger provides an intuitive interface to track your library's inventory.

### Key Features
-   **📚 Comprehensive Book Management**: Effortlessly Add, View, Update, and Delete book records.
-   **🔎 Detail Tracking**: Manage essential details including Title, Author, ISBN, and Publication Date.
-   **⚡ Real-time Interaction**: Fast, responsive UI powered by Angular's single-page application architecture.
-   **🔒 Data Validation**: Built-in validation ensures data integrity, such as preventing future publication dates.
-   **🔌 RESTful API**: A fully functional ASP.NET Core Web API handling all data operations.

## 🛠️ Technology Stack

-   **Frontend**: Angular 19+ (Components, Services, Routing, HTTP Client)
-   **Backend**: ASP.NET Core 9.0 Web API (C#)
-   **Styling**: Bootstrap 4 & Custom CSS
-   **Data Storage**: In-Memory (for demonstration/development purposes)

## 🏃‍♂️ Getting Started

### Prerequisites
-   [.NET 9 SDK](https://dotnet.microsoft.com/download)
-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [Angular CLI](https://angular.io/cli)

### Installation & execution

1.  **Backend Setup**:
    ```bash
    cd BookApi/BookApi
    dotnet run
    ```
    *The API will launch at `http://localhost:5101`*

2.  **Frontend Setup**:
    ```bash
    cd BookApp
    npm install
    npm start
    ```
    *The Application will launch at `http://localhost:4200`*

## 🔮 Future Enhancements
-   Persistent database integration (SQL Server / PostgreSQL).
-   User authentication and authorization.
-   Search and filtering capabilities.
-   Book cover image uploads.
