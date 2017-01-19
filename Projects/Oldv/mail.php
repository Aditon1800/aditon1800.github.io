<?php

$recepient = "@mail.ru";
$sitename = "";

$email = trim($_POST["name"]);
$email = trim($_POST["address"]);
$email = trim($_POST["phone"]);
$message = "Email: $email ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");