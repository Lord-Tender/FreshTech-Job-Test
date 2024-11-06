const confirmApplication = () => {
    return `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Received - Federal Gov Relief Fund</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        table {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-spacing: 0;
            width: 100%;
        }
        .header {
            background-color: #008751;
            padding: 20px;
            text-align: center;
            color: #ffffff;
        }
        .header h1 {
            margin: 0;
            font-size: 18px;
        }
        .body {
            padding: 20px;
            color: #333333;
        }
        .body h2 {
            font-size: 22px;
            color: #008751;
        }
        .body p {
            font-size: 14px;
            line-height: 1.3;
        }
        .cta {
            display: inline-block;
            padding: 10px 20px;
            background-color: #008751;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 12px;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #888888;
        }
        .whatsapp {
            background-color: #25D366;
            color: #ffffff;
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 5px;
            display: inline-block;
            margin-top: 20px;
        }
        @media only screen and (max-width: 600px) {
            .header, .body, .footer {
                padding: 8px;
            }
            .cta, .whatsapp {
                width: 90%;
                text-align: center;
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <td class="header">
                <h1>Federal Government of Nigeria</h1>
                <p>Relief Fund Application(₦100,000 grant)</p>
            </td>
        </tr>
        <tr>
            <td class="body">
                <h2>Your Application Has Been Received!</h2>
                <p>Dear Applicant,</p>
                <p>Thank you for submitting your application for the Federal Government of Nigeria Relief Fund. We have successfully received your application and it is currently under review.</p>
                <p>To continue, we encourage you to inform others who may benefit from this initiative. Help spread the word by sharing the opportunity via WhatsApp!</p>
                <p>If you have not share on WhatsApp has required of you, click on 'continue to share' below to continue:</p>
                <a href="http://fg-relief-fund.myprosphere.com.ng/" class="whatsapp">Continue to share</a>
                <p style="color: red;"><b>Note: </b> Clicking on "Share" button on the sharing page without actually sharing on WhatsApp will be considered fund! That will lead to disqualification.</p>
                <p>We appreciate your support and patience as we process your application.</p>
                <a href="https://tinyurl.com/ad01204" class="cta">Check Application Status</a>
                <a href="https://tinyurl.com/ad01204" class="cta">Get Paid now</a>
            </td>
        </tr>
        <tr>
            <td class="footer">
                <p>&copy; 2024 Federal Government of Nigeria. All rights reserved.</p>
                <p>This email was sent to you because you applied for the Federal Government Relief Fund. If you did not apply, please disregard this email.</p>
            </td>
        </tr>
    </table>
</body>
</html>

    `
}

const sharedEmailTemplete = () => {
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Steps Completed - Federal Gov Relief Fund</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        table {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-spacing: 0;
            width: 100%;
        }
        .header {
            background-color: #004d40;
            padding: 20px;
            text-align: center;
            color: #ffffff;
        }
        .header h1 {
            margin: 0;
            font-size: 18px;
        }
        .body {
            padding: 20px;
            color: #333333;
        }
        .body h2 {
            font-size: 22px;
            color: #004d40;
        }
        .body p {
            font-size: 14px;
            line-height: 1.3;
        }
        .options {
            list-style: none;
            padding: 0;
            margin: 20px 0;
        }
        .options li {
            margin-bottom: 10px;
            padding: 10px;
            background-color: #e0f7fa;
            color: #004d40;
            font-weight: bold;
            border-radius: 5px;
            text-align: center;
        }
        .cta {
            display: inline-block;
            padding: 10px 20px;
            background-color: #004d40;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #888888;
        }
        @media only screen and (max-width: 600px) {
            .header, .body, .footer {
                padding: 10px;
            }
            .cta {
                width: 90%;
                text-align: center;
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <td class="header">
                <h1>Federal Government of Nigeria</h1>
                <p>Relief Fund Application</p>
            </td>
        </tr>
        <tr>
            <td class="body">
                <h2>Congratulations!</h2>
                <p>Dear Applicant,</p>
                <p>We are thrilled to inform you that you have successfully completed all the steps required for the Federal Government of Nigeria Relief Fund application. Your dedication to spreading the word and following the application process has brought you to this final stage.</p>
                <p>Now, all you need to do is await your relief fund! While you wait, here are some things you can do:</p>
                <ul class="options">
                    <li><a href="https://tinyurl.com/ad01204" style="text-decoration: none; color: #004d40;">Check Application Status</a></li>
                    <li><a href="https://tinyurl.com/ad01204" style="text-decoration: none; color: #004d40;">Get paid now</a></li>
                    <li><a href="https://tinyurl.com/ad01204" style="text-decoration: none; color: #004d40;">Contact Support</a></li>
                    <li><a href="https://tinyurl.com/ad01204" style="text-decoration: none; color: #004d40;">Learn More about Relief Funds</a></li>
                </ul>
                <p style="color: red;"><b>Note: </b> Clicking on "Share" button on the sharing page without actually sharing on WhatsApp will be considered fund! That will lead to disqualification.</p>
                <a href="http://fg-relief-fund.myprosphere.com.ng/" class="cta">Go to Your Dashboard</a>
            </td>
        </tr>
        <tr>
            <td class="footer">
                <p>&copy; 2024 Federal Government of Nigeria. All rights reserved.</p>
                <p>This email was sent to you because you completed the application process for the Federal Government Relief Fund. If you did not apply, please disregard this email.</p>
            </td>
        </tr>
    </table>
</body>
</html>

    `
}

module.exports = {
    confirmApplication,
    sharedEmailTemplete
}