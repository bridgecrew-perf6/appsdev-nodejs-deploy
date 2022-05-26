<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
  <style>
    body {
      background-color: #000;
    }
    a {
      display: block;
      color: #FFF;
      padding: 5px 10px;
    }
  </style>
</head>
<body>
{{#each files}}
  <a href="{{../dir}}/{{file}}">[{{icon}}]{{file}}</a>
{{/each}}
</body>
</html>
