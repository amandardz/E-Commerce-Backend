# E-Commerce-Backend

## Description
The E-Commerce Backend is a backend server created with Express, MySQL, and Sequelize through Object-Relational Mapping that can be utilized for an e-commerce website.

## Video Demonstration
[![Video Demonstration](https://img.youtube.com/vi/KPVR40hKZPs/0.jpg)](https://youtu.be/KPVR40hKZPs)

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation
1. Copy the clone link of the repository from GitHub.
2. Open Bash or Terminal Window.
3. When the console opens, navigate to the directory the repository will be added to. *Remember to use the command cd to change directories.*
4. In the console, type the command <i> git clone </i> and paste the link to repository.
5. Open repository in preferred code editor.
6. Open terminal in code editor.
7. Type in terminal <i>npm i</i> or <i>npm install </i> to install dependency packages needed.

*Ensure the following program/packages are installed. (To install packages, open the terminal in preferred coder editor and type npm install)*

* Program: 
    - Insomnia

* Packages:
    - nodemon (this is a developer dependency)
    - dotenv
    - express
    - mysql2
    - sequelize

## Usage
1. User will enter credentials to .env file to be able to create/access database. *Be sure to erase EXAMPLE from the file name to be able to rename the file .env for it to function.*
2. User will open the terminal and type *mysql -u root -p* to access sql and create the database. Once completed, user will exit sql in terminal by entering  \q .
3. User will type *npm run seed* in terminal to seed the data. *If unable to seed, be sure to be in the root folder in the terminal*
4. User will type *npm run watch* to run server.
5. User will open Insomnia. 
6. User will create a request collection.
7. User will create new GET, PUT, POST, DELETE requests for products, categories, and tags to be able to view, create, update, and delete data from the database. 

## License
MIT License

Copyright (c) 2021 Amanda Rodriguez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
