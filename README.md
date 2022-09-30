<style>
   .container {
      font-familiy: Poppins;
      color: #2d4734;  
   }
   .container p {
      margin-bottom: 30px;
   }
   .container h1, .container h2 {
      margin: 0;
      padding: 0
   }
   .container h1 {
      font-size: 32px;
   }
   .container h2 {
      font-size: 24px;
      margin: 15px 0;
   }
   .container .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
   }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
<link href="./docs/static/styles.css" rel="stylesheet">

<div class="container">
<div class="logo">
   <img src="docs/static/logo.png" alt="myHealthbox Logo" width="55" />
   <h1>myHealthbox SDK</h1> 
</div>
<p align="center">An SDK built on top of the <a href="https://rapidapi.com/roblat/api/myhealthbox/" target="_blank">myHealthbox API</a>, exposing methods for using and accessing the API.
</p>

## Disclaimer

This SDK is an unofficial open-source tool. It is not developed or backed by **myHealthbox**. The brand name and logo belong to **myHealthbox**.

## Description

**myHealthbox API v2.1** is distributed by <a href="https://rapidapi.com/roblat/api/myhealthbox/" target="_blank">RapidAPI</a>. It is an API that provides access to a huge database of medicines and healthcare products: over 3 million products available in 70 countries, with information accessible in 40 languages. It provides basic information for a product like name, active ingredients, dosage, ATC code and more. It also exposes documents, related to a product (i.e. Patient Information Leaflets, SmPC, etc.)

**myHealthbox SDK** is a user-friendly interface on top of **myHealthbox API**, that comes with a set of methods for easy access and configuration of the available endpoints. It is written entirely in `TypeScript` and packaged with its own types to improve the developer experience. It can be installed, configured and used in seconds.

</div>
