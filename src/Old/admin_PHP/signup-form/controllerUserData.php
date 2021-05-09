<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";
    session_start();
    require_once "connection.php";
    $email = "";
    $name = "";
    $errors = array();

    $user = new User();

    //if user signup button
    if(isset($_POST['signup'])){
        $name = mysqli_real_escape_string($user->connect(), $_POST['name']);
        $email = mysqli_real_escape_string($user->connect(), $_POST['email']);
        $password = mysqli_real_escape_string($user->connect(), $_POST['password']);
        $cpassword = mysqli_real_escape_string($user->connect(), $_POST['cpassword']);
        if($password !== $cpassword){
            $errors['password'] = "Confirm password not matched!";
        }

        if(mysqli_num_rows($user->getUserByEmail($email)) > 0){
            $errors['email'] = "Email that you have entered is already exist!";
        }
        
        if(count($errors) === 0){
            $encpass = password_hash($password, PASSWORD_BCRYPT);
            $code = rand(999999, 111111);
            $status = "notverified";

            if($user->insertUser($name, $email, $encpass, $code, $status)){
                $mail = new PHPMailer();
                $subject = "Email Verification Code";
                $body = "Your verification code is $code";

                //SMTP Settings
                $mail->isSMTP();
                $mail->Host = "smtp.gmail.com";
                $mail->SMTPAuth = true;
                $mail->Username = "dinhkhakl01@gmail.com"; //enter you email address
                $mail->Password = 'Luly041101'; //enter you email password
                $mail->Port = 465;
                $mail->SMTPSecure = "ssl";

                //Email Settings
                $mail->isHTML(true);
                $mail->setFrom($email, "HKT Queen Hotel");
                $mail->addAddress($email); //enter you email address
                $mail->Subject = ($subject);
                $mail->Body = $body;

                if ($mail->send()) {
                    $info = "We've sent a verification code to your email - $email";
                    $_SESSION['info'] = $info;
                    $_SESSION['email'] = $email;
                    $_SESSION['password'] = $password;
                    header('location: user-otp.php');
                    exit();
                } else {
                    $errors['otp-error'] = "Failed while sending code!";
                }
            }else{
                $errors['db-error'] = "Failed while inserting data into database!";
            }
        }

    }

    //if user click verification code submit button
    if(isset($_POST['check'])){
        $_SESSION['info'] = "";
        $otp_code = mysqli_real_escape_string($user->connect(), $_POST['otp']);
        if(mysqli_num_rows($user->checkCode($otp_code)) > 0){
            $fetch_data = mysqli_fetch_assoc($user->checkCode($otp_code));
            $fetch_code = $fetch_data['code'];
            $email = $fetch_data['email'];
            $code = 0;
            $status = 'verified';
            $update_otp = "UPDATE users SET code = $code, status = '$status' WHERE code = $fetch_code";
            $update_res = mysqli_query($user->connect(), $update_otp);
            if($user->updateOtp($fetch_code)){
                $_SESSION['name'] = $name;
                $_SESSION['email'] = $email;
                $_SESSION['room_id'] = array();
                header('location: ../index.php');
                exit();
            }else{
                $errors['otp-error'] = "Failed while updating code!";
            }
        }else{
            $errors['otp-error'] = "You've entered incorrect code!";
        }
    }

    //if user click login button
    if(isset($_POST['login'])){
        $email = mysqli_real_escape_string($user->connect(), $_POST['email']);
        $password = mysqli_real_escape_string($user->connect(), $_POST['password']);
        if(mysqli_num_rows($user->getUserByEmail($email)) > 0){
            $fetch = mysqli_fetch_assoc($user->getUserByEmail($email));
            $fetch_pass = $fetch['password'];
            if(password_verify($password, $fetch_pass)){
                echo $password. $fetch_pass;
                $_SESSION['email'] = $email;
                $status = $fetch['status'];
                if($status == 'verified'){
                  $_SESSION['email'] = $email;
                  $_SESSION['password'] = $password;
                  $_SESSION['room_id'] = array();
                    header('location: ../index.php');
                }else{
                    $info = "It's look like you haven't still verify your email - $email";
                    $_SESSION['info'] = $info;
                    header('location: user-otp.php');
                }
            }else{
                $errors['email'] = "Incorrect email or password!";
            }
        }else{
            $errors['email'] = "It's look like you're not yet a member! Click on the bottom link to signup.";
        }
    }

    //if user click continue button in forgot password form
    if(isset($_POST['check-email'])){
        $email = mysqli_real_escape_string($user->connect(), $_POST['email']);
        if(mysqli_num_rows($user->getUserByEmail($email)) > 0){
            $code = rand(999999, 111111);
            if($user->setOtp($code, $email)){
                $mail = new PHPMailer();
                $subject = "Password Reset Code";
                $body = "Your password reset code is $code";

                //SMTP Settings
                $mail->isSMTP();
                $mail->Host = "smtp.gmail.com";
                $mail->SMTPAuth = true;
                $mail->Username = "dinhkhakl01@gmail.com"; //enter you email address
                $mail->Password = 'Luly041101'; //enter you email password
                $mail->Port = 465;
                $mail->SMTPSecure = "ssl";

                //Email Settings
                $mail->isHTML(true);
                $mail->setFrom($email, "HKT Queen Hotel");  
                $mail->addAddress("$email"); //enter you email address
                $mail->Subject = ("$subject");
                $mail->Body = $body;

                if ($mail->send()) {
                    $info = "We've sent a verification code to your email - $email";
                    $_SESSION['info'] = $info;
                    $_SESSION['email'] = $email;
                    header('location: reset-code.php');
                    exit();
                } else {
                    $errors['otp-error'] = "Failed while sending code!";
                }
            }else{
                $errors['db-error'] = "Something went wrong!";
            }
        }else{
            $errors['email'] = "This email address does not exist!";
        }
    }

    //if user click check reset otp button
    if(isset($_POST['check-reset-otp'])){
        $_SESSION['info'] = "";
        $otp_code = mysqli_real_escape_string($user->connect(), $_POST['otp']);
        if(mysqli_num_rows($user->checkCode($otp_code)) > 0){
            $fetch_data = mysqli_fetch_assoc($user->checkCode($otp_code));
            $email = $fetch_data['email'];
            $_SESSION['email'] = $email;
            $info = "Please create a new password that you don't use on any other site.";
            $_SESSION['info'] = $info;
            header('location: new-password.php');
            exit();
        }else{
            $errors['otp-error'] = "You've entered incorrect code!";
        }
    }

    //if user click change password button
    if(isset($_POST['change-password'])){
        $_SESSION['info'] = "";
        $password = mysqli_real_escape_string($user->connect(), $_POST['password']);
        $cpassword = mysqli_real_escape_string($user->connect(), $_POST['cpassword']);
        if($password !== $cpassword){
            $errors['password'] = "Confirm password not matched!";
        }else{
            $email = $_SESSION['email']; //getting this email using session
            $encpass = password_hash($password, PASSWORD_BCRYPT);
            if($user->updatePassword($encpass, $email)){
                $info = "Your password changed. Now you can login with your new password.";
                $_SESSION['info'] = $info;
                header('Location: password-changed.php');
            }else{
                $errors['db-error'] = "Failed to change your password!";
            }
        }
    }
    
   //if login now button click
    if(isset($_POST['login-now'])){
        header('Location: login-user.php');
    }
?>