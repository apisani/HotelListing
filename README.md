# Hotel Listing
## Code Challenge

.Net Core 2.1 web application using Angular 5.2.
[PrimeNG](https://www.primefaces.org/primeng/#/) was used for UI components.

### Dependencies
* [.NET Core 2.1](https://www.microsoft.com/net/download)
* [Angular CLI](https://github.com/angular/angular-cli/wiki)
* [Node.js & npm](https://nodejs.org/en/)
* [Jasmine](https://www.npmjs.com/package/jasmine)
* [Karma](http://karma-runner.github.io/3.0/intro/installation.html)


### Unit Testing
* Front-End: **Jasmine & Karma**
* Back-End: **MSTest**

### Setup Project
Project should be ready to run upon pulling the solution from github, should all dependencies requirements are met.

#### 1. Run the project
The web app can either be started by pressing the **`Start`** button (F5) in Visual Studio *(VS 2017 was used for the development of this application)* or running the following promt command at the root of the solution:
**`dotnet build`** then **`dotnet run`**

#### 2. Debugging project
**`dotnet run`** is running the **`ng serve`** Angular compiler in the background and this increases the compile time to compile the application.You can connect to it from the ASP.NET application. To speed up things, the Angular server can be run as a standalone process. To do that, navigate to ClientApp directory on command prompt and run **`ng serve`** command to start the Angular server.

Copy the development server URL from the command prompt, and replace the following line in **Startup.cs**:

**```spa.UseAngularCliServer(npmScript: "start");```**

with

**```spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");```**
