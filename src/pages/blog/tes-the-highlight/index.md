---
title: Test the highlight
date: 2019-07-12 23:44:48
tags:
  - gatsby
  - gatsby-starter
  - gatsby-starter-griddy
  - highlight
  - prismjs
  - gatsby-remark-prismjs
category: SSG
cover: cover.jpg
---

```javascript
import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className='footer'>
    <div className='content has-text-centered'>
      <p>
        {/**
         * You are permitted to change the copyright name and url.
         * If you url is local (eg. /) it's better use Link components
         * from Gatsby. Example: <Link to='/'>mustofa.id</Link>
         */}
        © 2018-2019 <Link to='/' aria-label='Aflasio'>Aflasio</Link>
        <br />
        Powered by <a href='https://www.gatsbyjs.org/'>Gatsby</a> and{' '}
        <a href='https://bulma.io'>Bulma</a>
        <br />
        Starter source code is available on{' '}
        <a href='https://github.com/mustofa-id/gatsby-starter-griddy'>Github</a>
      </p>
    </div>
  </footer>
)

export default Footer

```

```python
x = 1
if x == 1:
    # indented four spaces
    print("x is 1.")
```

```php
<?php

if(isset($_POST['submit']))
{

$message=
'Full Name: '.$_POST['name'].'<br/>
Comments:    '.$_POST['comments'].'<br/>
Email:       '.$_POST['email'].'
';

require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.yahoo.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'aroncea@yahoo.com';                 // SMTP username
$mail->Password = 'nope';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom($_POST['email'], $_POST['name']);
$mail->addReplyTo($_POST['email'], $_POST['name']);

$mail->Subject = "New Form Submission";
$mail->MsgHTML($message);
$mail->addAddress('aroncea@yahoo.com');     // Add a recipient
$result = $mail->Send();
$message = $result ? 'Successfully sent!' : 'Sending Failed!';
unset($mail);
};



?>

```

```ruby
irb(main):007:0> a = 3 ** 2
=> 9
irb(main):008:0> b = 4 ** 2
=> 16
irb(main):009:0> Math.sqrt(a+b)
=> 5.0
```

```html
<!DOCTYPE html>
 <!--
     MIT lisence
     Created by aflasio
   -->
<html lang="en">
  <head>
    <!-- metadata -->
    <title>404</title>
    <meta charset="utf-8" />
    <meta name="description" content="What are you trying to search?" />
    <meta name="google-site-verification" content="..." />
    <meta name="theme-color" content="#f5f5f5">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- favicon -->
    <link rel="icon"
      type="png/image"
      href="/img/favicon.png" alt="favicon">
    <!-- raleway fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <!-- use bulma -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" rel="stylesheet">
  </head>
  <body>
    <section class="hero is-fullheight is-light is-vcentered">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Error 404
          </h1>
          <h2 class="subtitle">
            The page you're looking is doesn't exist or has been moved.<br>
            Please go back to <strong><a href="/">Home</a></strong>
          </h2>
        </div>
      </div>
    </section>
  </body>
</html>
```



> Cheer...